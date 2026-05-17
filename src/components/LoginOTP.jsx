// src/components/LoginOTP.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo_ruby.svg";

export default function LoginOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const startResendTimer = () => setResendTimer(60);

  const sendOtp = async () => {
    if (!email) return setErrors({ email: "El correo es obligatorio" });
    try {
      setLoading(true);
      await api.post("/otp/send", { email });
      setErrors({});
      setStep(2);
      startResendTimer();
    } catch (err) {
      setErrors({ general: err.response?.data?.message || "Error al enviar OTP" });
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) return setErrors({ otp: "El OTP es obligatorio" });
    try {
      setLoading(true);
      const res = await api.post("/otp/verify", { email, otp });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setErrors({ general: err.response?.data?.message || "OTP inválido o expirado" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md p-8 flex flex-col items-center">
      {/* Fondo interno del card */}
      <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[#6A4C93]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#2DB7A3]/25 rounded-full blur-3xl"></div>

      {/* Card principal */}
      <motion.div
        className="relative z-10 bg-white/80 backdrop-blur-xl border border-white rounded-[32px] shadow-2xl w-full p-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={logo}
          alt="PetluApp Logo"
          className="w-24 h-24 mb-4 object-contain"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-center text-3xl font-extrabold mb-6 text-[#6A4C93]"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PetluApp OTP Login
        </motion.h1>

        {errors.general && (
          <motion.p
            className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center font-medium w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {errors.general}
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border border-[#DCCDF2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2DB7A3]/30 focus:border-[#2DB7A3] transition"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>

              <button
                onClick={sendOtp}
                disabled={loading || resendTimer > 0}
                className={`w-full p-4 rounded-2xl font-bold text-white text-lg shadow-lg transition-transform transform ${
                  loading || resendTimer > 0
                    ? "bg-gradient-to-r from-[#6A4C93]/50 to-[#2DB7A3]/50 opacity-70 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#6A4C93] to-[#2DB7A3] hover:scale-105 cursor-pointer"
                }`}
              >
                {loading ? "Enviando OTP..." : resendTimer > 0 ? `Reenviar OTP en ${resendTimer}s` : "Enviar OTP"}
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Ingrese OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-4 border border-[#DCCDF2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2DB7A3]/30 focus:border-[#2DB7A3] transition"
                />
                {resendTimer > 0 && (
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-[#2DB7A3] rounded-b-2xl transition-all"
                    style={{ width: `${((60 - resendTimer) / 60) * 100}%` }}
                  />
                )}
                {errors.otp && <p className="text-red-500 mt-1">{errors.otp}</p>}
              </div>

              <button
                onClick={verifyOtp}
                disabled={loading}
                className={`w-full p-4 rounded-2xl font-bold text-white text-lg shadow-lg transition-transform transform ${
                  loading
                    ? "bg-gradient-to-r from-[#6A4C93]/50 to-[#2DB7A3]/50 opacity-70 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#6A4C93] to-[#2DB7A3] hover:scale-105 cursor-pointer"
                }`}
              >
                {loading ? "Verificando..." : "Verificar OTP"}
              </button>

              {resendTimer > 0 && (
                <p className="text-center mt-3 text-gray-500 font-medium">
                  Puedes reenviar OTP en <span className="font-bold text-[#6A4C93]">{resendTimer}s</span>
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}