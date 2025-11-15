import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreNosotros from "@/components/SobreNosotros";
import BentoGrid from "@/components/BentoGrid";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background wave patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 pt-24">
        <Header />
        <Hero />
        
        {/* Sobre Nosotros Section */}
        <SobreNosotros />
        
        {/* Servicios Section */}
        <BentoGrid />
        
        {/* Portfolio Section */}
        <Portfolio />
      </div>
    </main>
  );
}

