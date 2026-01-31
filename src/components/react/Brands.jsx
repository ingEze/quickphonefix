import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Brands() {
  const brands = [
    { 
      name: "iPhone", 
      models: ["11", "12", "13", "14", "15", "16"]
    },
    { 
      name: "Samsung", 
      models: ["Galaxy A Series", "Galaxy S Series", "Galaxy Note"]
    },
    { 
      name: "Motorola", 
      models: ["Moto G Series", "Moto E Series", "Edge Series"]
    },
    { 
      name: "Xiaomi", 
      models: ["Redmi Note", "Mi Series", "Poco"]
    }
  ]

  return (
    <section id="brands" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Marcas que Reparamos
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Trabajamos con todas las marcas principales</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {brands.map((brand, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition-all hover:transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">{brand.name}</h3>
              {brand.models.map((model, i) => (
                <p key={i} className="text-slate-300 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{model}</span>
                </p>
              ))}
              <p className="text-slate-500 text-sm mt-3">Y muchos más...</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/brands" 
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            ¿Quieres ver todas las marcas con las que trabajamos?
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}