// src/pages/LoginPage.jsx
import LoginOTP from "../components/LoginOTP";
import logo from "../assets/logo_ruby.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#6A4C93]/20 via-[#2DB7A3]/10 to-gray-100">
      
      {/* Header estilo “Welcome” */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <motion.div
              className="bg-[#6A4C93] p-2 rounded-xl flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={logo} alt="PetluApp" className="w-12 h-12 object-contain" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-[#6A4C93]">PetluApp</h1>
              <p className="text-sm text-[#2DB7A3]">Plataforma veterinaria inteligente</p>
            </div>
          </div>

          {/* Botón de inicio */}
          <Link
            to="/"
            className="px-4 py-2 bg-[#6A4C93] text-white font-semibold rounded-2xl shadow hover:scale-105 transition transform"
          >
            Inicio
          </Link>
        </div>
      </header>

      {/* Contenido central */}
      <main className="flex-1 flex items-center justify-center p-4">
        <LoginOTP />
      </main>

      {/* Footer estilo simple */}
      <footer className="bg-white/80 backdrop-blur-xl border-t border-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-500">
            © 2026 PetluApp · Plataforma veterinaria
          </p>
        </div>
      </footer>
    </div>
  );
}