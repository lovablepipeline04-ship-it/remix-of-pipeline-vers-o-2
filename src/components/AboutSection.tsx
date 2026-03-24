import { motion } from "framer-motion";
import { TrendingUp, Settings, Cpu } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const pillars = [
  {
    icon: TrendingUp,
    title: "Performance",
    description: "Dados viram decisões. Campanhas otimizadas, funis inteligentes, acompanhamento constante.",
  },
  {
    icon: Settings,
    title: "Organização",
    description: "Gargalos mapeados. Processos claros. Previsibilidade na operação do seu negócio.",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    description: "Sites, sistemas, integrações e automações que ampliam sua capacidade operacional.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-36 relative overflow-hidden bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-6"
            >
              Sobre Nós
            </motion.span>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] text-foreground mb-10"
              >
                Estratégia que
                <br />
                <span className="text-gradient-red">gera resultado.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-primary mb-10 origin-left w-20"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground leading-relaxed text-base mb-6"
            >
              A <strong className="text-foreground">Pipeline</strong> é uma consultoria digital criada para transformar estratégia em resultado. Crescimento não acontece por acaso — é construído com método, clareza e performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed text-base"
            >
              Unimos <strong className="text-foreground">estratégia, marketing e tecnologia</strong> para ajudar empresas a crescerem de forma previsível, sustentável e inteligente.
            </motion.p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <StaggerContainer className="space-y-6" staggerDelay={0.15}>
              {pillars.map((pillar, i) => (
                <StaggerItem key={pillar.title}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative bg-background border border-border rounded-3xl p-8 md:p-10 group hover:border-primary/30 transition-colors duration-500 overflow-hidden"
                  >
                    <span className="absolute -top-6 -right-4 text-[10rem] font-black text-foreground/[0.02] group-hover:text-primary/[0.06] transition-all duration-700 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                        <pillar.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
