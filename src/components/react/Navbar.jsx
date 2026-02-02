import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo/logo-64.webp"
            srcset="/logo/logo-64.webp 1x, /logo/logo-128.webp 2x, /logo/logo-192.webp 3x"
            width="64" 
            height="64"
            alt="Logo" 
            className="w-16 h-16 rounded-full" 
          />
          <span className="text-xl font-bold">QuickPhoneFix</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#brands" className="hover:text-purple-400 transition-colors">Marcas</a>
          <a href="#works" className="hover:text-green-400 transition-colors">Trabajos</a>
          <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonios</a>
          <a href="#contact" className="bg-linear-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
            Contactar
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4">
          <a href="#services" className="block py-3 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#brands" className="block py-3 hover:text-purple-400" onClick={() => setMenuOpen(false)}>Marcas</a>
          <a href="#works" className="block py-3 hover:text-green-400" onClick={() => setMenuOpen(false)}>Trabajos</a>
          <a href="#testimonials" className="block py-3 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Testimonios</a>
          <a href="#contact" className="block py-3 text-blue-400 font-semibold" onClick={() => setMenuOpen(false)}>Contactar</a>
        </div>
      )}
    </nav>
  )
}