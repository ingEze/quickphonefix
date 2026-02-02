import { useState, useEffect, useRef, useCallback } from 'react'

export default function BrandNav({ brands }) {
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef(null)
  const itemRefs = useRef({})
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = requestAnimationFrame(() => {
        const sections = brands.map(brand => document.getElementById(brand.toLowerCase()))
        const scrollPosition = window.scrollY + 200

        for (const section of sections) {
          if (section) {
            const sectionTop = section.offsetTop
            const sectionBottom = sectionTop + section.offsetHeight

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(section.id)
              break
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current)
      }
    }
  }, [brands])

  useEffect(() => {
    if (!activeSection) return

    const container = navRef.current
    const item = itemRefs.current[activeSection]

    if (!container || !item) return

    const containerRect = container.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()

    const offset =
      itemRect.left -
      containerRect.left -
      containerRect.width / 2 +
      itemRect.width / 2

    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: 'smooth'
    })
  }, [activeSection])

  const scrollToBrand = useCallback((brand) => {
    const element = document.getElementById(brand.toLowerCase())
    if (element) {
      const offset = 150
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <section className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-xl border-y border-slate-800/50 py-4 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-slate-950/95 to-transparent pointer-events-none z-10 hidden md:block"></div>
          
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-slate-950/95 to-transparent pointer-events-none z-10 hidden md:block"></div>

          <div ref={navRef} className="overflow-x-auto scrollbar-hide">
            <nav className="flex gap-3 min-w-max justify-center px-2">
              {brands.map((brand) => {
                const brandId = brand.toLowerCase()
                const isActive = activeSection === brandId

                return (
                  <button
                    key={brand}
                    ref={(el) => (itemRefs.current[brandId] = el)}
                    onClick={() => scrollToBrand(brand)}
                    className={`
                      group relative px-6 py-3 rounded-full font-semibold text-sm
                      transition-all duration-300 transform hover:scale-105
                      whitespace-nowrap shrink-0 cursor-pointer
                      ${isActive 
                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50' 
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50 hover:border-purple-500/50'
                      }
                    `}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    )}
                    
                    <span className="relative z-10">{brand}</span>

                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                      </div>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        <div className="flex md:hidden justify-center mt-3">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}