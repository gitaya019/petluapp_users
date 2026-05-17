import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../assets/logo_ruby.svg";

export default function LoginOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1=Email, 2=OTP
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();

  // Countdown para reenvío de OTP
  const startResendTimer = () => {
    setResendTimer(60); // 60s de espera
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtp = async () => {
    if (!email) return setErrors({ email: "El correo es obligatorio" });

    try {
      setLoading(true);
      await api.post("/otp/send", { email });
      setStep(2);
      setErrors({});
      startResendTimer();
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || "Error al enviar OTP",
      });
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
      setErrors({
        general: err.response?.data?.message || "OTP inválido o expirado",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6A4C93]/20 via-[#2DB7A3]/10 to-gray-100 p-4 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#6A4C93]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#2DB7A3]/25 rounded-full blur-3xl"></div>

      <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white rounded-[32px] shadow-2xl w-full max-w-md p-8 flex flex-col items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="PetluApp Logo"
          className="w-24 h-24 mb-4 object-contain"
        />

        <h1 className="text-center text-3xl font-extrabold mb-6 text-[#6A4C93]">
          PetluApp OTP Login
        </h1>

        {errors.general && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center font-medium">
            {errors.general}
          </p>
        )}

        {step === 1 && (
          <>
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-[#DCCDF2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2DB7A3]/30 focus:border-[#2DB7A3] transition"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
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
              {loading
                ? "Enviando OTP..."
                : resendTimer > 0
                  ? `Reenviar OTP en ${resendTimer}s`
                  : "Enviar OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="Ingrese OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-4 border border-[#DCCDF2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2DB7A3]/30 focus:border-[#2DB7A3] transition"
              />
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
                Puedes reenviar OTP en{" "}
                <span className="font-bold text-[#6A4C93]">{resendTimer}s</span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
