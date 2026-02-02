import { Phone, Zap, CheckCircle, Shield } from 'lucide-react';
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })

    if (window.innerWidth >= 768) {
      const onScroll = () => {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
        })
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', checkMobile)
      }
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16 md:pt-20 pb-6">
      <div
        className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-slate-950 to-purple-600/20 hero-parallax"
        style={{ 
          transform: isMobile ? 'none' : `translateY(${scrollY * 0.5}px)`,
          willChange: isMobile ? 'auto' : 'transform'
        }}
      />

      {!isMobile && (
        <>
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          />
        </>
      )}
      
      {isMobile && (
        <>
          <div className="absolute top-20 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl" />
        </>
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto text-center flex-1 flex flex-col justify-center">
        <div className="mb-6 md:mb-8 inline-block mx-auto">
          <div className="relative">
            <Phone className="w-16 h-16 md:w-20 md:h-20 mx-auto text-blue-400 animate-bounce" />
            <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-green-400 rounded-full animate-ping" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-black mb-4 md:mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          QuickPhoneFix
        </h1>
        
        <p className="text-lg md:text-3xl text-slate-300 mb-3 md:mb-4 font-light">
          Tu teléfono en manos expertas
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-6 md:my-12">
          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-4 md:px-6 py-2 md:py-3 rounded-full border border-slate-700">
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
            <span className="text-sm md:text-lg font-semibold">Rápido</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-4 md:px-6 py-2 md:py-3 rounded-full border border-slate-700">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            <span className="text-sm md:text-lg font-semibold">Confiable</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-4 md:px-6 py-2 md:py-3 rounded-full border border-slate-700">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            <span className="text-sm md:text-lg font-semibold">Garantizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}