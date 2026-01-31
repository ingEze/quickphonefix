import { Phone, Zap, CheckCircle, Shield } from 'lucide-react';
import { useState } from 'react'

export default function Hero() {
  const { scrollY } = useState()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-slate-950 to-purple-600/20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="relative">
            <Phone className="w-20 h-20 mx-auto text-blue-400 animate-bounce" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          QuickPhoneFix
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-300 mb-4 font-light">
          Tu teléfono en manos expertas
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12">
          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-6 py-3 rounded-full border border-slate-700">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold">Rápido</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-6 py-3 rounded-full border border-slate-700">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-lg font-semibold">Confiable</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-6 py-3 rounded-full border border-slate-700">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold">Garantizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
