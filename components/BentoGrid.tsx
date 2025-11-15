export default function BentoGrid() {
  return (
    <section id="servicios" className="container mx-auto px-4 py-16 sm:py-20 max-w-7xl">
      {/* Header mejorado */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
          Nuestros Servicios
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 mx-auto mb-5"></div>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Soluciones tecnológicas adaptadas a tus necesidades
        </p>
      </div>

      {/* Servicios Principales - Grid mejorado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        
        {/* Desarrollo Web - Card destacada */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
          <div>
            {/* Icono y badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="px-3 py-1 bg-slate-700 text-white text-xs font-semibold rounded-full">Popular</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3">Desarrollo Web</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
              Aplicaciones web modernas, escalables y de alto rendimiento que impulsan tu negocio.
            </p>

            {/* Características */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-slate-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">React y Next.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-slate-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">Laravel y Node.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-slate-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">Responsive y optimizado</span>
              </div>
            </div>

            {/* Precio */}
            <div className="pt-5 border-t border-slate-200">
              <div className="flex items-end gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Desde</span>
                <span className="text-2xl font-bold text-slate-800">Consultar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aplicaciones Móviles - Card destacada */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
          <div>
            {/* Icono */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3">Aplicaciones Móviles</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
              Apps nativas e híbridas para iOS y Android que conectan con tu audiencia.
            </p>

            {/* Ventajas */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-slate-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">iOS y Android</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-slate-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">Entrega rápida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-slate-700/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">UX optimizada</span>
              </div>
            </div>

            {/* Badge inferior */}
            <div className="pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Desarrollo ágil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Secundarios - Grid compacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        
        {/* Automatización */}
        <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Automatización</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Optimiza procesos y ahorra tiempo con soluciones automatizadas.
          </p>
        </div>

        {/* Consultoría */}
        <div className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Consultoría</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Asesoría técnica especializada para tu proyecto.
          </p>
        </div>

        {/* Tecnologías - Span 2 columns */}
        <div className="sm:col-span-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 shadow-lg text-white">
          <h3 className="text-xl font-bold mb-4">Tecnologías que Dominamos</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-sm font-semibold">React</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-sm font-semibold">Next.js</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-sm font-semibold">Laravel</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-sm font-semibold">Node.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Trabajo - Rediseñado */}
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Nuestro Proceso</h3>
          <p className="text-slate-600 text-sm sm:text-base">De la idea a la realidad en 4 pasos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Paso 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h4 className="font-bold text-slate-800 text-base mb-2">Consulta</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analizamos tus necesidades y objetivos
            </p>
            {/* Conector - oculto en mobile */}
            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
          </div>

          {/* Paso 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h4 className="font-bold text-slate-800 text-base mb-2">Diseño</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Creamos la solución ideal para ti
            </p>
            {/* Conector */}
            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
          </div>

          {/* Paso 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h4 className="font-bold text-slate-800 text-base mb-2">Desarrollo</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Implementamos con calidad y precisión
            </p>
            {/* Conector */}
            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
          </div>

          {/* Paso 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h4 className="font-bold text-slate-800 text-base mb-2">Entrega</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lanzamos y brindamos soporte continuo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
