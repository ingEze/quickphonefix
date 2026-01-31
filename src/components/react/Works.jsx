export default function Projects({ works }) {
  return (
    <section id="works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Trabajos Realizados
        </h2>

        <p className="text-center text-slate-400 mb-16 text-lg">
          Casos reales de éxito
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map(work => (
            <a
              key={work.slug}
              href={`/works/${work.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-green-500 transition-all hover:-translate-y-2"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={work.data.cover}
                  alt={work.data.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-green-400 font-semibold">
                  {work.data.phone}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">
                  {work.data.title}
                </h3>
                <p className="text-slate-400">
                  {work.data.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
