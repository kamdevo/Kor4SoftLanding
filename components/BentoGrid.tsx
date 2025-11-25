import { InView } from "./InView";

export default function BentoGrid() {
  return (
    <section id="servicios" className="container mx-auto px-4 py-20 sm:py-24 max-w-7xl relative z-10">
      {/* Header mejorado */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Nuestros servicios
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Soluciones tecnológicas adaptadas a tus necesidades
        </p>
      </div>

      {/* Servicios Principales - Grid mejorado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">

        {/* Desarrollo Web - Card destacada */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 }
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="group h-full bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 group-hover:bg-slate-100/50"></div>

            <div className="relative z-10">
              {/* Icono y badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="px-4 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-200">Popular</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">Desarrollo web</h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Aplicaciones web modernas, escalables y de alto rendimiento que impulsan tu negocio al siguiente nivel.
              </p>

              {/* Características */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-medium">React y Next.js</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-medium">Laravel y Node.js</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-medium">Responsive y optimizado</span>
                </div>
              </div>

              {/* Precio */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-end gap-2">
                  <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Desde</span>
                  <span className="text-2xl font-bold text-slate-900">Consultar</span>
                </div>
              </div>
            </div>
          </div>
        </InView>

        {/* Aplicaciones Móviles - Card destacada */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="group h-full bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 group-hover:bg-slate-100/50"></div>

            <div className="relative z-10">
              {/* Icono */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-700/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">Aplicaciones móviles</h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Apps nativas e híbridas para iOS y Android que conectan con tu audiencia donde estén.
              </p>

              {/* Ventajas */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-medium">iOS y Android</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-medium">Entrega rápida</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-medium">UX optimizada</span>
                </div>
              </div>

              {/* Badge inferior */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Desarrollo ágil</span>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>

      {/* Servicios Secundarios - Grid compacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

        {/* Automatización */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Automatización</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Optimiza procesos y ahorra tiempo con soluciones automatizadas inteligentes.
            </p>
          </div>
        </InView>

        {/* Consultoría */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Consultoría</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Asesoría técnica especializada para llevar tu proyecto al éxito.
            </p>
          </div>
        </InView>

        {/* Tecnologías - Span 2 columns */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="sm:col-span-2"
        >
          <div className="h-full bg-slate-900 rounded-2xl p-8 shadow-lg text-white hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full -ml-10 -mb-10 blur-2xl group-hover:bg-purple-600/20 transition-colors"></div>

            <h3 className="text-2xl font-bold mb-6 relative z-10">Tecnologías que dominamos</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {/* React */}
              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-white/10 group/item">
                <svg className="w-10 h-10 text-[#61DAFB] group-hover/item:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" opacity="0.2"/>
                  <circle cx="12" cy="12" r="2" />
                  <g transform="rotate(60 12 12)"><ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/></g>
                  <g transform="rotate(120 12 12)"><ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/></g>
                  <g transform="rotate(0 12 12)"><ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/></g>
                </svg>
                <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">React</span>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-white/10 group/item">
                <svg className="w-10 h-10 text-white group-hover/item:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.32 9.235l6.616 8.498c.96-.925 1.753-2.032 2.32-3.275V8h-2v4.468L10.553 8H8v8h2V9.235z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">Next.js</span>
              </div>

              {/* Laravel */}
              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-white/10 group/item">
                <svg className="w-10 h-10 text-[#FF2D20] group-hover/item:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.7 1.15 6.28 4.22-2.3 13.9-5.68 2.73-5.68-2.73-2.3-13.9 6.28-4.22L12 2zm0 2.6l-4.8 3.22 1.7 10.3 3.1 1.5 3.1-1.5 1.7-10.3-4.8-3.22z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">Laravel</span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-white/10 group/item">
                <svg className="w-10 h-10 text-[#339933] group-hover/item:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm0 2.3l7.5 4.3v8.6l-7.5 4.3-7.5-4.3v-8.6l7.5-4.3z"/>
                  <path d="M12 14l-4-2.3v-4.6l4-2.3 4 2.3v4.6l-4 2.3z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">Node.js</span>
              </div>
            </div>
          </div>
        </InView>
      </div>

      {/* Proceso de Trabajo - Rediseñado */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800"></div>

        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Nuestro proceso</h3>
          <p className="text-slate-600 text-base sm:text-lg">De la idea a la realidad en 4 pasos simples</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-slate-100 -z-10"></div>

          {/* Paso 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300 relative z-10">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">1</span>
              </div>
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-3">Consulta</h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Analizamos tus necesidades y definimos los objetivos del proyecto.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300 relative z-10">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">2</span>
              </div>
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-3">Diseño</h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Creamos la arquitectura y el diseño visual de tu solución.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300 relative z-10">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">3</span>
              </div>
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-3">Desarrollo</h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Implementamos el código con las mejores prácticas y tecnologías.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300 relative z-10">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">4</span>
              </div>
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-3">Entrega</h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Lanzamos tu proyecto y brindamos soporte continuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
