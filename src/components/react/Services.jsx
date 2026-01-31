import { Wrench, Zap, Shield, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Wrench className="w-6 h-6" />, title: "Reparación de Pantallas", brands: "Todas las marcas" },
    { icon: <Zap className="w-6 h-6" />, title: "Cambio de Baterías", brands: "Originales y compatibles" },
    { icon: <Phone className="w-6 h-6" />, title: "Desbloqueo", brands: "Software y hardware" }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Nuestros Servicios
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Soluciones profesionales para cada problema</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.brands}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
