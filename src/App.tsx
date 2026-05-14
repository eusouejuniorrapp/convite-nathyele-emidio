import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Gift, Copy, Check, MessageCircle, Church, PartyPopper } from 'lucide-react';
import igrejaImg from './assets/images/igreja.png';

const ChurchSketch = () => (
  <img
    src={igrejaImg}
    alt="Igreja Nossa Senhora da Conceição"
    className="church-reference-image mx-auto foil-shadow"
  />
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
                  className="open-invite-cta group flex flex-col items-center space-y-3 pb-8 transition-opacity hover:opacity-70 focus:outline-none"
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
          <div className="w-full pt-16 pb-4 border-b border-gold/10 relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/5 to-transparent"></div>
            <ChurchSketch />
          </div>

          {/* Main Body */}
          <main className="w-full px-4 pt-8 text-center">
            
            <Monogram className="mb-8 scale-90" />

            <p className="font-serif text-[11.5px] tracking-widest leading-[2.05] text-ink max-w-sm mx-auto mb-12 uppercase px-2">
              "Deus marcou o tempo certo para cada coisa<br/>
              E tudo quanto ele faz dura eternamente." - Ecl 3:11, 14B:
            </p>

            <div className="flex justify-between items-start font-serif uppercase text-[9.5px] tracking-[0.14em] text-ink mb-10 px-1 leading-[1.9]">
              <div className="text-left w-1/2 pr-1">
                SEBASTIÃO SOUZA DA COSTA<br/>
                MARIA EDINEUZA FREITAS PINTO
              </div>
              <div className="text-right w-1/2 pl-1">
                JOSÉ EMIDIO FERREIRA CABRAL<br/>
                TEREZA CRISTINA SAMPAIO CABRAL
              </div>
            </div>

            <p className="font-serif text-[10.5px] tracking-[0.18em] text-ink mb-12 uppercase">
              Com a bênção de Deus e de seus pais
            </p>

            {/* Names */}
            <h1 className="font-script text-[4.35rem] text-gold-dark mb-12 transform -rotate-1 foil-shadow" style={{ lineHeight: '1.2' }}>
              Nathyele e Emídio
            </h1>

            {/* Details */}
            <div className="font-serif text-[11.5px] tracking-[0.13em] leading-[2.05] text-ink mb-20 w-full">
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
                  <h3 className="font-serif uppercase tracking-[0.2em] text-[10px] text-ink mb-3">Sugestão de Presentes</h3>
                  <a href="https://noivos.casar.com/nathyele-e-emidio/" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 font-serif text-[9px] tracking-[0.18em] hover:text-gold transition-colors">
                    <Gift size={10} />
                    <span>LISTA DE PRESENTES VIRTUAL</span>
                  </a>
                </div>

                <div className="w-12 h-[1px] bg-gold/30"></div>

                <div className="w-full">
                  <h3 className="font-serif uppercase tracking-[0.2em] text-[10px] text-ink mb-2">Chave PIX</h3>
                  <button 
                    onClick={handleCopyPix}
                    className="font-serif text-[10px] tracking-widest flex items-center justify-center space-x-2 w-full hover:text-gold transition-colors group"
                  >
                    <span className="select-all">88999259007</span>
                    {copied ? <Check size={10} className="text-green-600" /> : <Copy size={10} className="opacity-50 group-hover:opacity-100" />}
                  </button>
                  <p className="font-serif text-[8.5px] tracking-wider text-ink/70 mt-1 uppercase">(Jéssica Nathyele Freitas Souza)</p>
                </div>
              </div>

              {/* Extra Actions Grid */}
              <div className="grid grid-cols-1 gap-4 mx-2">
                 <a href="https://wa.me/5585996529226?text=Ol%C3%A1!%20Confirmo%20minha%20presen%C3%A7a%20no%20casamento%20de%20Nathyele%20e%20Em%C3%ADdio." target="_blank" rel="noreferrer" className="insert-card p-4 flex flex-col items-center justify-center space-y-3 hover:-translate-y-1 transition-transform cursor-pointer">
                    <MessageCircle size={14} className="text-gold" />
                    <span className="font-serif uppercase text-[9px] tracking-[0.14em] text-center text-ink">Confirmar<br/>Presença</span>
                 </a>
                 <a href="https://maps.app.goo.gl/4FdySTLivDqJWBK37?g_st=iw" target="_blank" rel="noreferrer" className="insert-card p-4 flex flex-col items-center justify-center space-y-3 hover:-translate-y-1 transition-transform cursor-pointer">
                    <Church size={14} className="text-gold" />
                    <span className="font-serif uppercase text-[9px] tracking-[0.14em] text-center text-ink">Local da<br/>Cerimônia</span>
                 </a>
                 <a href="https://maps.app.goo.gl/rf7UKTHqMngSXgw87?g_st=iw" target="_blank" rel="noreferrer" className="insert-card p-4 flex flex-col items-center justify-center space-y-3 hover:-translate-y-1 transition-transform cursor-pointer">
                    <MapPin size={14} className="text-gold" />
                    <span className="font-serif uppercase text-[9px] tracking-[0.14em] text-center text-ink">Local da<br/>Recepção</span>
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
