import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 max-w-7xl">
      {/* Sistema de cajas: Header centralizado con jerarquía clara */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        {/* Logo centrado */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src="/Logo.png"
            alt="Kor4Soft Logo"
            width={80}
            height={80}
            className="object-contain sm:w-24 sm:h-24 lg:w-32 lg:h-32 mix-blend-multiply"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4 sm:mb-6">
          Kor4Soft
        </h1>

        {/* Tagline - Escalado proporcional */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
          Desarrollamos soluciones web y móviles que automatizan tareas, potencian la productividad y llevan tu tecnología al siguiente nivel.
        </p>
      </div>

      {/* Tecnologías - Rearreglo con propósito según tamaño */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 flex-wrap max-w-xl mx-auto">
        {/* React Logo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
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
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <Image
              src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
              alt="Next.js"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>

        {/* Lock Icon - Central, más grande para jerarquía visual */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
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
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
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
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
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
