import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Gift, Copy, Check, MessageCircle, CalendarHeart } from 'lucide-react';

const ChurchSketch = () => (
  <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px] mx-auto text-gold foil-shadow" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Base lines and stairs */}
    <path d="M40 220 H260 M50 225 H250 M60 230 H240 M70 235 H230" />
    
    {/* Central Section */}
    <path d="M100 220 V120 L150 90 L200 120 V220" />
    <path d="M100 120 H200" strokeDasharray="2 2" />
    
    {/* Left Tower */}
    <path d="M70 220 V100 M100 100 H70 L85 30 L100 100" />
    <path d="M70 140 H100 M70 180 H100" strokeWidth="0.4" />
    <path d="M85 70 V90" />
    <path d="M80 110 H90 V130 A5 5 0 0 1 80 130 Z" />

    {/* Right Tower */}
    <path d="M230 220 V100 M200 100 H230 L215 30 L200 100" />
    <path d="M200 140 H230 M200 180 H230" strokeWidth="0.4" />
    <path d="M215 70 V90" />
    <path d="M210 110 H220 V130 A5 5 0 0 1 210 130 Z" />

    {/* Central Doors and Windows */}
    <path d="M135 220 V180 A15 15 0 0 1 165 180 V220" />
    <path d="M135 150 H165 V165 H135 Z" />
    <circle cx="150" cy="130" r="10" />

    {/* Crosses */}
    <path d="M85 20 V30 M80 25 H90" />
    <path d="M215 20 V30 M210 25 H220" />
    <path d="M150 75 V85 M145 80 H155" />
    
    {/* Decorative side elements */}
    <path d="M40 220 V160 L70 140 M260 220 V160 L230 140" strokeWidth="0.5"/>
  </svg>
);

const Monogram = ({ className = "" }) => (
  <div className={`relative font-display flex items-center justify-center ${className}`}>
    <span className="text-4xl sm:text-5xl tracking-tighter emboss-text relative z-10" style={{ transform: 'translateX(0.1em)' }}>N</span>
    <span className="text-[2.5rem] sm:text-[3.2rem] opacity-90 emboss-text absolute" style={{ transform: 'translate(0.3em, 0.15em)' }}>E</span>
  </div>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Prevent scrolling when closed to keep the physical feel
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleCopyPix = () => {
    navigator.clipboard.writeText('88999259007');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[100dvh] w-full flex justify-center sm:py-8 sm:px-4 font-sans selection:bg-gold/20">
      <div 
        className={`w-full max-w-[414px] bg-paper relative shadow-2xl transition-all duration-700 ease-in-out flex flex-col ${!isOpen ? 'h-[100dvh] overflow-hidden' : 'min-h-[100dvh] sm:rounded-md'}`}
      >
        {/* --- COVER (Animated) --- */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40, scale: 0.98, filter: "blur(2px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-between paper-bg"
            >
              {/* Elegant Golden Curve */}
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none">
                <svg width="100%" height="200" viewBox="0 0 400 200" preserveAspectRatio="none" className="foil-shadow opacity-90">
                  <path d="M-50,150 C150,180 250,10 450,40" stroke="var(--color-gold)" strokeWidth="3" fill="none" />
                  <path d="M-50,150 C150,180 250,10 450,40" stroke="white" strokeWidth="1" fill="none" className="opacity-40 translate-y-[1px]" />
                </svg>
              </div>

              <div className="flex-1"></div>

              {/* Bottom Section of Cover */}
              <div className="flex-1 flex flex-col items-center justify-end pb-24 w-full px-8 relative">
                <div className="w-full flex justify-end mb-16 pr-4">
                   <Monogram className="scale-90" />
                </div>
                
                <button 
                  onClick={() => setIsOpen(true)}
                  className="group flex flex-col items-center space-y-3 pb-8 transition-opacity hover:opacity-70 focus:outline-none"
                >
                  <span className="uppercase tracking-[0.2em] text-xs font-serif text-ink/60">Abrir Convite</span>
                  <div className="w-[1px] h-12 bg-gold/50 group-hover:h-16 transition-all duration-500 ease-out"></div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- INSIDE CONTENT (Scrollable) --- */}
        <div className={`paper-bg flex-1 w-full pb-32 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Top Flap Area (Church) */}
          <div className="w-full pt-16 pb-8 border-b border-gold/10 relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/5 to-transparent"></div>
            <ChurchSketch />
          </div>

          {/* Main Body */}
          <main className="w-full px-4 pt-16 text-center">
            
            <Monogram className="mb-12 scale-90" />

            <p className="font-serif text-[10px] tracking-widest leading-loose text-ink/70 max-w-sm mx-auto mb-16 uppercase px-2">
              "Deus marcou o tempo certo para cada coisa<br/>
              E tudo quanto ele faz dura eternamente." - Ecl 3:11, 14B:
            </p>

            <div className="flex justify-between items-start font-serif uppercase text-[8px] tracking-[0.15em] text-ink/80 mb-12 px-1 leading-loose">
              <div className="text-left w-1/2 pr-1">
                SEBASTIÃO SOUZA DA COSTA<br/>
                MARIA EDINEUZA FREITAS PINTO
              </div>
              <div className="text-right w-1/2 pl-1">
                JOSÉ EMIDIO FERREIRA CABRAL<br/>
                TEREZA CRISTINA SAMPAIO CABRAL
              </div>
            </div>

            <p className="font-serif text-[9px] tracking-[0.2em] text-ink/60 mb-16 uppercase">
              Com a bênção de Deus e de seus pais
            </p>

            {/* Names */}
            <h1 className="font-script text-6xl text-gold-dark mb-16 transform -rotate-2 foil-shadow" style={{ lineHeight: '1.2' }}>
              Nathyele e Emidio
            </h1>

            {/* Details */}
            <div className="font-serif text-[10px] tracking-[0.15em] leading-loose text-ink/80 mb-24 w-full">
              <p className="mb-6 px-2">
                CONVIDAM PARA A CERIMÔNIA RELIGIOSA DE SEU CASAMENTO,<br/>
                A REALIZAR-SE ÀS DEZENOVE HORAS E TRINTA MINUTOS<br/>
                DO DIA TREZE DE JUNHO DE DOIS MIL E VINTE E SEIS,<br/>
                NA IGREJA NOSSA SENHORA DA CONCEIÇÃO (SEMINÁRIO DA PRAINHA)<br/>
                AV. MONSENHOR TABOSA - CENTRO.
              </p>
              <p className="mb-6 px-2">
                APÓS A CERIMÔNIA, OS NOIVOS RECEPCIONARÃO OS CONVIDADOS<br/>
                NO ROYAL GOURMET BOULEVARD,<br/>
                AV. ENG. LEAL LIMA VERDE, 570 - SAPIRANGA/COITÉ.<br/>
                <span className="block mt-4">TRAJE: PASSEIO COMPLETO</span>
              </p>
              <p className="tracking-[0.3em] mt-8">
                FORTALEZA - CEARÁ
              </p>
            </div>

            {/* Actions / Inserts */}
            <div className="flex flex-col gap-6 w-full mt-24">
              
              {/* Insert 2: Gifts & RSVP */}
              <div className="insert-card p-6 flex flex-col items-center justify-center text-center space-y-6 mx-2">
                
                <div>
                  <h3 className="font-serif uppercase tracking-[0.2em] text-[9px] text-ink/60 mb-3">Sugestão de Presentes</h3>
                  <a href="https://noivos.casar.com/nathyele-e-emidio/" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 font-serif text-[8px] tracking-[0.2em] hover:text-gold transition-colors">
                    <Gift size={10} />
                    <span>LISTA DE PRESENTES VIRTUAL</span>
                  </a>
                </div>

                <div className="w-12 h-[1px] bg-gold/30"></div>

                <div className="w-full">
                  <h3 className="font-serif uppercase tracking-[0.2em] text-[9px] text-ink/60 mb-2">Chave PIX</h3>
                  <button 
                    onClick={handleCopyPix}
                    className="font-serif text-[9px] tracking-widest flex items-center justify-center space-x-2 w-full hover:text-gold transition-colors group"
                  >
                    <span className="select-all">88999259007</span>
                    {copied ? <Check size={10} className="text-green-600" /> : <Copy size={10} className="opacity-50 group-hover:opacity-100" />}
                  </button>
                  <p className="font-serif text-[7.5px] tracking-wider text-ink/50 mt-1 uppercase">(Jéssica Nathyele Freitas Souza)</p>
                </div>
              </div>

              {/* Extra Actions Grid */}
              <div className="grid grid-cols-2 gap-4 mx-2">
                 <a href="https://wa.me/?text=Olá!%20Gostaria%20de%20confirmar%20minha%20presença%20no%20casamento%20de%20Nathyele%20e%20Emídio!" target="_blank" rel="noreferrer" className="insert-card p-4 flex flex-col items-center justify-center space-y-3 hover:-translate-y-1 transition-transform cursor-pointer">
                    <MessageCircle size={14} className="text-gold" />
                    <span className="font-serif uppercase text-[8px] tracking-[0.15em] text-center">Confirmar<br/>Presença</span>
                 </a>
                 <a href="#" className="insert-card p-4 flex flex-col items-center justify-center space-y-3 hover:-translate-y-1 transition-transform cursor-pointer">
                    <MapPin size={14} className="text-gold" />
                    <span className="font-serif uppercase text-[8px] tracking-[0.15em] text-center">Como<br/>Chegar</span>
                 </a>
              </div>

            </div>
            
            <div className="mt-24 pb-4 flex justify-center">
               <Monogram className="scale-75 opacity-40" />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
