import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-7xl text-center relative">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-200/20 rounded-full blur-2xl animate-pulse-slow-delay"></div>
      </div>

      {/* Main Headline con efectos */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent animate-gradient-x">
            Kor4Soft
          </span>
          {/* Efecto de brillo sutil detrás del texto */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl opacity-50 animate-shimmer"></span>
        </h1>

        {/* Tagline con animación de entrada */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          Desarrollamos soluciones web y móviles que automatizan tareas, potencian la productividad y llevan tu tecnología al siguiente nivel.
        </p>
      </div>

      {/* Visual Element - Technology logos with lock icon */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {/* React Logo */}
        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float group cursor-pointer">
          <div className="relative w-10 h-10 group-hover:animate-rotate-slow transition-transform duration-300">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="React"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>

        {/* Next.js Logo */}
        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float-delay-1 group cursor-pointer">
          <div className="relative w-10 h-10 group-hover:animate-scale-bounce transition-transform duration-300">
            <Image
              src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
              alt="Next.js"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>

        {/* Lock Icon - Central */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow group cursor-pointer">
          <svg
            className="w-10 h-10 text-white group-hover:animate-shake transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        {/* Laravel Logo */}
        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float-delay-2 group cursor-pointer">
          <div className="relative w-10 h-10 group-hover:animate-scale-bounce transition-transform duration-300">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
              alt="Laravel"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>

        {/* Node.js Logo */}
        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float-delay-3 group cursor-pointer">
          <div className="relative w-10 h-10 group-hover:animate-rotate-slow transition-transform duration-300">
            <Image
              src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
              alt="Node.js"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

