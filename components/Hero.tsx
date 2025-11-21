import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20"></div>

      {/* Floating Elements Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Logo with Glow Effect */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-blue-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center shadow-xl ring-1 ring-slate-900/5">
              <Image
                src="/Logo.png"
                alt="Kor4Soft Logo"
                width={100}
                height={100}
                className="object-contain w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 animate-gradient-x">
              Kor4Soft
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Transformamos ideas en experiencias digitales excepcionales.
            <span className="block mt-2 text-slate-500 font-normal">
              Desarrollo web y móvil de alto impacto.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <button
              onClick={() => (window as any).openContactModal()}
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-slate-900/25 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Iniciar Proyecto
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#servicios"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              Ver Servicios
            </a>
          </div>

          {/* Tech Stack Floating Icons */}
          <div className="relative w-full max-w-3xl mx-auto h-20 sm:h-24 flex items-center justify-center gap-6 sm:gap-10 perspective-1000">

            {/* React */}
            <div className="group relative animate-float-delay-1">
              <div className="absolute -inset-2 bg-blue-50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-spin-slow" unoptimized />
              </div>
            </div>

            {/* Next.js */}
            <div className="group relative animate-float-delay-2">
              <div className="absolute -inset-2 bg-slate-200 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Image src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" unoptimized />
              </div>
            </div>

            {/* Central Security/Core Icon */}
            <div className="group relative animate-float z-10">
              <div className="absolute -inset-3 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            {/* Laravel */}
            <div className="group relative animate-float-delay-3">
              <div className="absolute -inset-2 bg-red-50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="Laravel" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" unoptimized />
              </div>
            </div>

            {/* Node.js */}
            <div className="group relative animate-float-delay-4">
              <div className="absolute -inset-2 bg-green-50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Image src="https://www.svgrepo.com/show/354119/nodejs-icon.svg" alt="Node.js" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" unoptimized />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
