import { useState } from 'react'
import {
  IphoneIcon,
  SamsungIcon,
  MotorolaIcon,
  XiaomiIcon,
  HuaweiIcon,
  TclIcon,
  ZteIcon,
  InfinixIcon,
  AlcatelIcon,
  LgIcon,
} from './BrandIcon'

const iconMap = {
  iphone: IphoneIcon,
  samsung: SamsungIcon,
  motorola: MotorolaIcon,
  xiaomi: XiaomiIcon,
  huawei: HuaweiIcon,
  tcl: TclIcon,
  zte: ZteIcon,
  infinix: InfinixIcon,
  alcatel: AlcatelIcon,
  lg: LgIcon,
}

export default function BrandSection({ id, name, subtitle, iconColor, models, index }) {
  const Icon = iconMap[id]
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filteredModels = models.filter(model => 
    model.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedModels = showAll ? filteredModels : filteredModels.slice(0, 8)
  const hasMore = filteredModels.length > 8

  return (
    <div 
      id={id} 
      className="brand-section group scroll-mt-28 mb-5"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="bg-linear-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8 hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className={`
              relative w-20 h-20 rounded-2xl flex items-center justify-center
              transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3
              ${iconColor}
              shadow-lg group-hover:shadow-2xl
            `}>
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent"></div>
              {Icon ? <Icon /> : (
                <svg className="w-12 h-12 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              )}
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {name}
              </h2>
              <p className="text-slate-400 text-lg">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl px-6 py-3 backdrop-blur-sm">
              <div className="text-3xl font-black text-purple-400">{models.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Modelos</div>
            </div>
          </div>
        </div>

        {models.length > 6 && (
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder={`Buscar en ${name}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
            />
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedModels.map((model, idx) => (
          <div
            key={idx}
            className="group/item relative bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-5 hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
            style={{
              animation: `fadeIn 0.4s ease-out ${idx * 0.05}s both`
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">
                {model}
              </span>
            </div>

            <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center mb-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group/btn inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            {showAll ? (
              <>
                Ver menos
                <svg className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Ver todos los {models.length} modelos
                <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {searchTerm && filteredModels.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-slate-400 text-lg">No se encontraron modelos que coincidan con "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}