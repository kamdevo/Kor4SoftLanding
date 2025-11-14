export default function BentoGrid() {
  return (
    <section id="servicios" className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          Nuestros Servicios
        </h2>
        <div className="w-24 h-1 bg-slate-700 mx-auto mb-4"></div>
        <p className="text-base text-slate-600 max-w-3xl mx-auto">
          Soluciones tecnológicas adaptadas a tus necesidades
        </p>
      </div>

      {/* Bento Grid Asimétrico Reorganizado */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Fila 1: Desarrollo Web (grande) y Aplicaciones Móviles */}
        <div className="md:col-span-2 bg-white rounded-lg p-3.5 shadow-sm border border-slate-200 hover:shadow-md hover:scale-[1.01] hover:border-slate-300 transition-all duration-300 group relative overflow-hidden">
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center mb-2.5 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-1.5">Desarrollo Web</h3>
          <p className="text-slate-600 text-xs leading-relaxed mb-2">
            Aplicaciones web modernas, escalables y de alto rendimiento.
          </p>
          <ul className="space-y-1 text-slate-600 text-xs mb-3">
            <li className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              React y Next.js
            </li>
            <li className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Laravel y Node.js
            </li>
            <li className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Responsive y optimizado
            </li>
          </ul>
          <div className="pt-3 border-t border-slate-300">
            <span className="text-slate-500 text-xs">Desde</span>
            <div className="text-lg font-bold text-slate-800">Consultar</div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 group">
          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-1">Aplicaciones Móviles</h3>
          <p className="text-slate-600 text-xs mb-2">
            Apps nativas e híbridas para iOS y Android
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <svg className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Entrega rápida</span>
          </div>
        </div>

        {/* Fila 2: Automatización, Consultoría y Tecnologías */}
        <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-1">Automatización</h3>
          <p className="text-slate-600 text-xs">
            Optimiza procesos automatizados
          </p>
        </div>

        <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-1">Consultoría</h3>
          <p className="text-slate-600 text-xs">
            Asesoría técnica especializada
          </p>
        </div>

        <div className="md:col-span-2 bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
          <h3 className="text-sm font-bold text-slate-800 mb-2">Tecnologías que Dominamos</h3>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-2 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group/item">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center group-hover/item:bg-slate-200 transition-colors">
                <span className="text-slate-700 font-bold text-xs">R</span>
              </div>
              <span className="text-xs font-semibold text-slate-700">React</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-2 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group/item">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center group-hover/item:bg-slate-200 transition-colors">
                <span className="text-slate-700 font-bold text-xs">N</span>
              </div>
              <span className="text-xs font-semibold text-slate-700">Next.js</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-2 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group/item">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center group-hover/item:bg-slate-200 transition-colors">
                <span className="text-slate-700 font-bold text-xs">L</span>
              </div>
              <span className="text-xs font-semibold text-slate-700">Laravel</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg p-2 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group/item">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center group-hover/item:bg-slate-200 transition-colors">
                <span className="text-slate-700 font-bold text-xs">N</span>
              </div>
              <span className="text-xs font-semibold text-slate-700">Node.js</span>
            </div>
          </div>
        </div>

        {/* Fila 3: Proceso de Trabajo */}
        <div className="md:col-span-4 bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
          <h3 className="text-sm font-bold text-slate-800 mb-2">Nuestro Proceso</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex gap-2 items-start group/item">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xs group-hover/item:scale-110 transition-transform duration-200">1</div>
                <div className="w-0.5 h-5 bg-slate-300 mt-0.5"></div>
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="font-semibold text-slate-800 text-xs mb-0.5">Consulta</h4>
                <p className="text-slate-600 text-xs">Analizamos necesidades</p>
              </div>
            </div>
            <div className="flex gap-2 items-start group/item">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xs group-hover/item:scale-110 transition-transform duration-200">2</div>
                <div className="w-0.5 h-5 bg-slate-300 mt-0.5"></div>
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="font-semibold text-slate-800 text-xs mb-0.5">Diseño</h4>
                <p className="text-slate-600 text-xs">Creamos solución ideal</p>
              </div>
            </div>
            <div className="flex gap-2 items-start group/item">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xs group-hover/item:scale-110 transition-transform duration-200">3</div>
                <div className="w-0.5 h-5 bg-slate-300 mt-0.5"></div>
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="font-semibold text-slate-800 text-xs mb-0.5">Desarrollo</h4>
                <p className="text-slate-600 text-xs">Implementamos con calidad</p>
              </div>
            </div>
            <div className="flex gap-2 items-start group/item">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xs group-hover/item:scale-110 transition-transform duration-200">4</div>
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="font-semibold text-slate-800 text-xs mb-0.5">Entrega</h4>
                <p className="text-slate-600 text-xs">Soporte continuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

