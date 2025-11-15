"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Kor4Soft Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-slate-800">kor4soft</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre-nosotros" className="text-slate-700 hover:text-slate-900 transition-colors">
              Sobre nosotros
            </a>
            <a href="#servicios" className="text-slate-700 hover:text-slate-900 transition-colors">
              Servicios
            </a>
            <a href="#blog" className="text-slate-700 hover:text-slate-900 transition-colors">
              Blog
            </a>
          </nav>

          {/* Contact Button */}
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition-colors"
          >
            Contáctanos
          </button>
          </div>
        </div>
      </header>

      {/* Contact Modal - Fuera del header para correcto posicionamiento */}
      <ContactForm 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}

