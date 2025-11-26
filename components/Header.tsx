"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            const headerOffset = 100; // Altura del navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 sm:py-5 lg:py-6 max-w-7xl">
          <div className="flex items-center justify-center md:justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="Kor4Soft Logo"
              width={40}
              height={40}
              className="object-contain sm:w-12 sm:h-12 mix-blend-multiply"
            />
          </div>

          {/* Navigation - Centrado y espaciado */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            <a href="#sobre-nosotros" className="text-sm lg:text-base text-slate-700 hover:text-slate-900 font-medium">
              Sobre nosotros
            </a>
            <a href="#servicios" className="text-sm lg:text-base text-slate-700 hover:text-slate-900 font-medium">
              Servicios
            </a>
            <a href="#portfolio" className="text-sm lg:text-base text-slate-700 hover:text-slate-900 font-medium">
              Proyectos
            </a>
          </nav>
          </div>
        </div>
      </header>
    </>
  );
}

