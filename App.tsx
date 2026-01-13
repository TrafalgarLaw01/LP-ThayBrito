
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Instagram, 
  MessageCircle, 
  User, 
  CheckCircle2, 
  Clock, 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  X 
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5567999092192&text&type=phone_number&app_absent=0&utm_source=ig";
const INSTAGRAM_URL = "https://www.instagram.com/fisiothaynarabriito/";

const IMAGES = {
  logo: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/logo.png",
  expert: {
    hero: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/t1.PNG",
    about: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/t2.PNG",
    details: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/t3.PNG",
  },
  studio: {
    one: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/studio1.PNG",
    two: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/studio2.PNG",
    video: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/N%C3%83O%20AGUENTAVA%20MAIS%20GUARDAR%20S%C3%93%20P-%20MIM%20%F0%9F%92%9A%F0%9F%8C%BF%F0%9F%AA%B4%E2%98%98%EF%B8%8Fapresento%20a%20voc%C3%AAs%20meu%20novo%20cantinho%2C%20que%20vai%20al%C3%A9m%20d.mp4",
  },
  quote: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/f1.PNG",
  proofs: [
    "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/ps1.PNG",
    "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/ps2.PNG",
    "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/ps3.PNG",
    "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/ps4.PNG",
    "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/ps5.PNG",
    "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/thaynara/ps6.PNG",
  ]
};

// --- Decorative Components ---

const PalmLeaf: React.FC<{ className?: string; opacity?: number }> = ({ className, opacity = 0.12 }) => (
  <motion.div 
    animate={{ rotate: [-2, 2, -2], y: [0, 5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute pointer-events-none z-0 ${className}`}
    // Fix: Cast style to any to resolve 'opacity' not existing on MotionStyle in some environments
    style={{ opacity } as any}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full fill-brand-primary">
      <path d="M10,190 C40,150 100,120 190,10 C160,80 120,130 10,190 Z M190,10 L160,50 M180,20 L140,40 M170,30 L120,30" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M10,190 Q120,180 190,10" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
  </motion.div>
);

const HangingFern: React.FC<{ className?: string; opacity?: number }> = ({ className, opacity = 0.15 }) => (
  <motion.div 
    animate={{ y: [-5, 10, -5], rotate: [-1, 1, -1] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute pointer-events-none z-0 ${className}`}
    // Fix: Cast style to any to resolve 'opacity' not existing on MotionStyle in some environments
    style={{ opacity } as any}
  >
    <svg viewBox="0 0 120 200" className="w-full h-full fill-brand-primary">
      <path d="M60,0 Q60,100 20,180 M60,0 Q60,90 100,170" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M60,20 Q40,40 15,70 M60,35 Q80,55 105,85 M60,60 Q30,85 10,120 M60,80 Q90,105 110,140" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="20" cy="180" r="1.5" />
      <circle cx="100" cy="170" r="1.5" />
    </svg>
  </motion.div>
);

// --- Layout Components ---

const ScrollProgress: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
      <div 
        className="h-full bg-brand-primary transition-all duration-150 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

const Lightbox: React.FC<{ image: string | null; onClose: () => void }> = ({ image, onClose }) => (
  <AnimatePresence>
    {image && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
      >
        <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full backdrop-blur-md">
          <X className="w-6 h-6" />
        </button>
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={image} 
          className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain" 
          alt="Expandido" 
        />
      </motion.div>
    )}
  </AnimatePresence>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string; dark?: boolean }> = ({ title, subtitle, dark }) => (
  <div className="relative mb-8 px-6 z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-serif mb-2 ${dark ? 'text-brand-light' : 'text-brand-primary'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-lg opacity-80 ${dark ? 'text-brand-light/70' : 'text-brand-muted'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const CTAButton: React.FC<{ className?: string; text?: string; secondary?: boolean }> = ({ 
  className = "", 
  text = "Agendar consulta gratuita",
  secondary = false
}) => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`
      flex flex-col items-center justify-center gap-1 w-full max-w-sm px-8 py-5 rounded-2xl 
      font-bold text-center transition-all duration-300 shadow-xl relative z-10
      ${secondary 
        ? 'bg-brand-light text-brand-primary border-2 border-brand-primary' 
        : 'bg-brand-primary text-brand-light'
      } 
      ${className}
    `}
  >
    <div className="flex items-center gap-2 text-lg">
      <MessageCircle className="w-5 h-5 fill-current" />
      <span>{text}</span>
    </div>
    <span className={`text-[10px] uppercase tracking-widest opacity-70 ${secondary ? 'text-brand-primary' : 'text-brand-light'}`}>
      Resposta rápida • Sem compromisso
    </span>
  </motion.a>
);

// --- Sections ---

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-8 md:pt-12">
    <HangingFern className="w-40 h-64 top-0 left-0 md:left-10" />
    <PalmLeaf className="w-64 h-64 -bottom-10 -left-10 opacity-10 rotate-45" />
    <PalmLeaf className="w-96 h-96 top-20 -right-20 opacity-5 -rotate-90" />
    <PalmLeaf className="w-48 h-48 top-1/3 right-0 opacity-5" />
    
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-8 flex-grow relative z-10">
      <div className="flex flex-col items-start gap-6 md:w-1/2 md:order-1 pb-16">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          src={IMAGES.logo} 
          className="h-28 md:h-36 mb-6 self-start object-contain relative z-20" 
          alt="Logo Thaynara Brito" 
        />
        
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif text-brand-primary leading-tight"
          >
            Eu sou Thaynara Brito. <br />
            <span className="italic text-brand-muted">Cuido do seu movimento</span> com cuidado e precisão.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-brand-muted max-w-md"
          >
            Sua primeira consulta é por minha conta. Vamos entender a origem do seu incômodo e traçar um caminho real para sua melhora.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full"
        >
          <CTAButton />
          <p className="mt-4 text-xs text-brand-muted flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-accent" />
            Atendimento individual e exclusivo em Dourados.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white md:order-2 bg-white flex items-center justify-center mb-8"
      >
        <img 
          src={IMAGES.expert.hero} 
          alt="Thaynara Brito" 
          className="w-full h-full object-contain"
        />
        <PalmLeaf className="w-32 h-32 bottom-2 right-2 opacity-20" />
      </motion.div>
    </div>
  </section>
);

const Authority: React.FC = () => (
  <section className="py-24 bg-brand-primary text-brand-light relative overflow-hidden">
    <HangingFern className="w-48 h-80 top-0 right-4 text-brand-accent/30" opacity={0.2} />
    <PalmLeaf className="w-80 h-80 bottom-0 -left-20 text-brand-accent/10 rotate-180" opacity={0.1} />
    <PalmLeaf className="w-48 h-48 top-40 right-0 opacity-5" />
    <PalmLeaf className="w-40 h-40 middle right-0 opacity-10" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle 
        title="Uma abordagem humana e próxima" 
        subtitle="Entenda quem guiará seu processo de recuperação."
        dark
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-accent/20"
        >
          <img src={IMAGES.expert.about} className="w-full h-full object-cover" alt="Atendimento" />
          <PalmLeaf className="w-24 h-24 top-0 left-0 text-white opacity-20" />
        </motion.div>

        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed font-light"
          >
            Acredito que a fisioterapia vai além de exercícios. É sobre escuta, diagnóstico preciso e uma conexão real entre profissional e paciente. 
            Em Dourados, meu objetivo é oferecer um espaço onde você se sinta seguro e acolhido desde o primeiro minuto.
          </motion.p>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <User className="w-5 h-5" />, text: "Atendimento totalmente personalizado" },
              { icon: <Activity className="w-5 h-5" />, text: "Foco na causa raiz, não apenas no sintoma" },
              { icon: <HeartPulse className="w-5 h-5" />, text: "Protocolos baseados em evidência científica" },
              { icon: <Clock className="w-5 h-5" />, text: "Tempo dedicado exclusivamente a você" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-4 bg-brand-light/5 p-4 rounded-xl backdrop-blur-sm border border-white/5 relative overflow-hidden"
              >
                <PalmLeaf className="w-12 h-12 -right-4 -bottom-4 opacity-10" />
                <div className="p-2 bg-brand-accent/20 rounded-lg text-brand-accent">
                  {item.icon}
                </div>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Proof: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <HangingFern className="w-32 h-56 top-0 left-10" />
      <PalmLeaf className="w-48 h-48 bottom-10 right-0 opacity-10 rotate-45" />
      <PalmLeaf className="w-56 h-56 top-1/2 -left-20 opacity-5 rotate-90" />
      <PalmLeaf className="w-40 h-40 bottom-1/4 left-10 opacity-5" />

      <SectionTitle 
        title="Resultados que falam" 
        subtitle="Confira alguns feedbacks de quem já passou pelo meu cuidado."
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {IMAGES.proofs.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden"
            >
              <img src={img} className="w-full rounded-2xl shadow-md border-2 border-white group-hover:shadow-xl transition-all" alt={`Prova Social ${idx}`} />
              <PalmLeaf className="w-16 h-16 bottom-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-2 rounded-full shadow-lg">
                  <ChevronRight className="w-5 h-5 text-brand-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-muted opacity-60 italic">
          * Resultados podem variar de pessoa para pessoa.
        </p>
      </div>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

const Trust: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <HangingFern className="w-40 h-64 top-0 right-10" />
    <PalmLeaf className="w-72 h-72 -bottom-20 -left-20 opacity-10 rotate-12" />
    <PalmLeaf className="w-48 h-48 top-1/2 right-[-20px] opacity-5 -rotate-12" />
    <PalmLeaf className="w-56 h-56 bottom-1/2 left-0 opacity-5" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle 
        title="Por que confiar no meu trabalho?" 
        subtitle="Qualidade técnica e empatia em cada atendimento."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Avaliação Honesta", desc: "Sem promessas impossíveis. Diagnóstico direto e transparente.", icon: <ShieldCheck /> },
          { title: "Atendimento Individual", desc: "Você é minha prioridade única durante todo o período da sessão.", icon: <User /> },
          { title: "Foco em Resultado", desc: "Acompanhamento constante da evolução para garantir sua melhora.", icon: <Activity /> },
          { title: "Segurança", desc: "Ambiente controlado, higienizado e técnicas certificadas.", icon: <ShieldCheck /> },
          { title: "Localização", desc: "Consultório moderno no coração de Dourados.", icon: <MapPin /> },
          { title: "Atendimento Humano", desc: "Cuidado que vai além da técnica, respeitando seu tempo e sua dor.", icon: <HeartPulse /> },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-brand-light/30 border border-brand-accent/10 hover:border-brand-accent/40 transition-all group relative overflow-hidden backdrop-blur-sm"
          >
            <PalmLeaf className="w-20 h-20 -bottom-4 -right-4 opacity-5 group-hover:opacity-15 transition-opacity" />
            <div className="w-12 h-12 bg-brand-primary text-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {/* Fix: Cast icon to ReactElement<any> to allow passing className via cloneElement */}
              {React.cloneElement(card.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-3">{card.title}</h3>
            <p className="text-brand-muted leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks: React.FC = () => (
  <section className="py-24 bg-brand-primary text-brand-light relative overflow-hidden">
    <HangingFern className="w-48 h-80 top-0 left-0 text-brand-accent/20" opacity={0.2} />
    <PalmLeaf className="w-64 h-64 top-40 -right-20 text-brand-accent/5 rotate-90" />
    <PalmLeaf className="w-40 h-40 bottom-10 right-1/2 opacity-5 rotate-45" />
    <PalmLeaf className="w-56 h-56 top-0 right-1/4 opacity-5" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle title="Como funciona o agendamento" subtitle="Passos simples para sua primeira consulta gratuita." dark />

      <div className="relative mt-12 grid md:grid-cols-3 gap-8">
        {[
          { step: "01", title: "WhatsApp", desc: "Clique nos botões desta página para falar comigo pelo WhatsApp." },
          { step: "02", title: "Agendamento", desc: "Escolhemos o melhor horário para sua rotina em meu studio." },
          { step: "03", title: "Avaliação", desc: "Realizamos sua primeira consulta gratuita e personalizada." },
        ].map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 group overflow-hidden"
          >
            <PalmLeaf className="w-16 h-16 bottom-0 left-0 text-brand-accent opacity-10 group-hover:opacity-20 transition-opacity" />
            <span className="text-6xl font-serif text-brand-accent/20 absolute top-4 right-4">{item.step}</span>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-brand-light/70 text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 flex flex-col items-center gap-4">
        <CTAButton className="shadow-2xl" text="Iniciar agendamento" />
        <p className="text-sm opacity-60">Primeira consulta gratuita • Sem compromisso</p>
      </div>
    </div>
  </section>
);

const Gallery: React.FC = () => (
  <section className="py-24 bg-brand-light overflow-hidden relative">
    <HangingFern className="w-40 h-72 top-0 right-0" />
    <PalmLeaf className="w-56 h-56 -bottom-10 -left-10 opacity-10" />
    <PalmLeaf className="w-48 h-48 top-1/2 -right-10 opacity-5 rotate-180" />
    <PalmLeaf className="w-40 h-40 top-1/4 left-0 opacity-5" />

    <SectionTitle title="Bastidores e cuidados" subtitle="Conheça o espaço pensado para o seu bem-estar." />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-xl aspect-video md:aspect-auto border-2 border-white"
        >
          <video 
            src={IMAGES.studio.video} 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          />
        </motion.div>
        
        <div className="grid grid-rows-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg relative border-2 border-white"
          >
            <img src={IMAGES.studio.one} className="w-full h-full object-cover" alt="Studio Parte 1" />
            <PalmLeaf className="w-12 h-12 bottom-2 left-2 opacity-20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-lg relative border-2 border-white"
          >
            <img src={IMAGES.studio.two} className="w-full h-full object-cover" alt="Studio Parte 2" />
            <PalmLeaf className="w-12 h-12 top-2 right-2 opacity-20 rotate-180" />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full rounded-3xl overflow-hidden shadow-2xl mt-6 relative border-2 border-white"
      >
        <img src={IMAGES.quote} alt="Frase Motivacional" className="w-full object-cover" />
        <PalmLeaf className="w-24 h-24 bottom-0 right-0 opacity-20" />
      </motion.div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <HangingFern className="w-56 h-96 top-0 left-0" />
    <HangingFern className="w-32 h-64 top-0 right-0" />
    <PalmLeaf className="w-96 h-96 -bottom-20 -right-20 opacity-10 rotate-12" />
    <PalmLeaf className="w-80 h-80 -bottom-20 -left-20 opacity-10 -rotate-45" />
    <PalmLeaf className="w-64 h-64 top-1/4 right-0 opacity-5" />

    <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6 leading-tight">
          Sua primeira consulta é gratuita. <br />
          <span className="italic">O próximo passo é seu.</span>
        </h2>
        <p className="text-xl text-brand-muted mb-10 leading-relaxed">
          Não deixe sua dor virar rotina. Agende agora uma avaliação personalizada e descubra como a fisioterapia de alto padrão pode transformar sua qualidade de vida.
        </p>
        <div className="flex flex-col items-center gap-6">
          <CTAButton className="!max-w-md !py-7 !text-2xl" text="Falar agora no WhatsApp" />
          <div className="mt-8">
             <div className="text-center">
                <span className="block font-bold text-brand-primary text-xl">Thaynara Brito</span>
                <span className="text-sm text-brand-muted uppercase tracking-widest">Fisioterapeuta • Dourados/MS</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-16 bg-brand-primary text-brand-light/80 border-t border-white/5 relative overflow-hidden">
    <PalmLeaf className="w-48 h-48 bottom-0 right-0 text-brand-accent/10 opacity-20" />
    <PalmLeaf className="w-32 h-32 top-0 left-0 text-brand-accent/5 -rotate-90" opacity={0.05} />
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-sm">© 2024 Thaynara Brito. Todos os direitos reservados.</p>
        <p className="text-xs opacity-50 mt-1 uppercase tracking-tighter font-medium">Cuidando do seu movimento em Dourados, MS.</p>
      </div>

      <div className="flex gap-4">
        <a 
          href={INSTAGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-white/5 rounded-full hover:bg-brand-accent/20 transition-all hover:scale-110 active:scale-95"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-white/5 rounded-full hover:bg-brand-accent/20 transition-all hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <ScrollProgress />
      
      <main className="relative">
        <Hero />
        <Authority />
        
        {/* Intermediate Quote Break */}
        <section className="py-16 bg-brand-light/50 border-y border-brand-accent/10 relative overflow-hidden">
           <HangingFern className="w-24 h-48 top-0 left-1/2 -translate-x-1/2 opacity-10" />
           <PalmLeaf className="w-48 h-48 top-0 right-0 opacity-5" />
           <PalmLeaf className="w-32 h-32 bottom-0 left-0 opacity-5 rotate-180" />
           <PalmLeaf className="w-56 h-56 middle left-0 opacity-5" />
           <div className="container mx-auto px-6 text-center relative z-10">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl font-serif italic text-brand-primary/60 max-w-2xl mx-auto"
              >
                "O movimento é a nossa essência. Cuidar dele é honrar sua própria história."
              </motion.p>
           </div>
        </section>

        <Proof />
        <Trust />
        
        {/* Intermediate CTA */}
        <section className="py-20 bg-brand-accent text-brand-light relative overflow-hidden">
          <PalmLeaf className="w-96 h-96 -bottom-20 -left-20 text-brand-primary opacity-10 rotate-45" />
          <HangingFern className="w-32 h-64 top-0 right-10 text-brand-primary opacity-10" />
          <PalmLeaf className="w-48 h-48 top-10 left-0 opacity-10 -rotate-12" />
          <PalmLeaf className="w-56 h-56 top-0 left-1/3 opacity-10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Pronto para começar sua transformation?</h2>
            <div className="flex justify-center">
              <CTAButton secondary text="Agendar minha avaliação agora" />
            </div>
          </div>
        </section>

        <HowItWorks />
        <Gallery />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
