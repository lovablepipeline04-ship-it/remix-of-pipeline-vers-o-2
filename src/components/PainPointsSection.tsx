import { motion } from "framer-motion";
import { AlertTriangle, MessageCircleWarning, DatabaseZap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const pains = [
  {
    icon: AlertTriangle,
    title: "Leads desqualificados ou inexistentes",
    description: "Você investe em tráfego mas os leads que chegam não têm perfil de compra? Ou pior não chega ninguém?",
    num: "01",
  },
  {
    icon: MessageCircleWarning,
    title: "Atendimento amador no WhatsApp",
    description: "Seus vendedores não sabem conduzir leads do digital até o fechamento? Leads entram e morrem na conversa?",
    num: "02",
  },
  {
    icon: DatabaseZap,
    title: "Zero controle sobre seus leads",
    description: "Você não sabe em que etapa cada lead está e perde vendas por falta de acompanhamento e organização?",
    num: "03",
  },
];

const PainPointsSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="dores" className="py-20 lg:py-28 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
          >
            Isso soa familiar?
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-foreground break-words"
            >
              Seus leads somem e você{" "}
              <span className="text-gradient-red">não sabe por quê.</span>
            </motion.h2>
          </div>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {pains.map((pain) => (
            <StaggerItem key={pain.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative bg-background border border-border rounded-3xl p-7 pt-8 group hover:border-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col"
              >
                <span className="absolute -top-4 -right-2 text-[7rem] font-black text-foreground/[0.03] group-hover:text-primary/[0.08] transition-all duration-700 leading-none select-none">
                  {pain.num}
                </span>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                    <pain.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {pain.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {pain.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => scrollTo("#solucoes")}
                    className="text-primary text-sm font-semibold mt-5 text-left hover:underline"
                  >
                    A Pipeline resolve isso →
                  </motion.button>
                </div>

                <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <button onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300">
            Quero resolver isso
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
