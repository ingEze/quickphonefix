import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    { name: "María Palavecino", phone: "iPhone 13 Pro", comment: "Increíble servicio. Me arreglaron la pantalla en menos de 2 horas.", rating: 5 },
    { name: "Lucas Torres", phone: "Samsung Galaxy A20s", comment: "Mi teléfono tenía la pantalla destruida, lo dejaron como nuevo en un instante.", rating: 5 },
    { name: "Lucía Fernández", phone: "Xiaomi Redmi Note 11", comment: "Súper recomendable. Cambio de batería rápido y económico.", rating: 5 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Lo que Dicen Nuestros Clientes
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Opiniones verificadas de clientes satisfechos</p>
        
        <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-12">
          <div className="absolute top-4 left-4 text-6xl text-yellow-400 opacity-20">"</div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 text-center italic">
              {testimonials[activeTestimonial].comment}
            </p>
            
            <div className="text-center">
              <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
              <p className="text-slate-400">{testimonials[activeTestimonial].phone}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-yellow-400 w-8' : 'bg-slate-700'}`}
                aria-label={`Ver testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
