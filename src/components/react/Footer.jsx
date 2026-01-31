import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-1 mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full">
            <img src="/logo/logo.webp" alt="Logo" className="w-10 h-10 rounded-full" />
          </div>
          <span className="text-xl font-bold">QuickPhoneFix</span>
        </div>
        <p className="text-slate-400 mb-2">
          © 2026 QuickPhoneFix - Todos los derechos reservados
        </p>
        <p className="text-slate-500">
          Reparaciones con garantía · Repuestos originales · Atención personalizada
        </p>
      </div>
    </footer>
  )
}
