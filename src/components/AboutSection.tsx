import { motion } from "framer-motion";
import { BarChart3, MessageCircle, Database } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const pillars = [
  {
    icon: BarChart3,
    title: "Tráfego Qualificado",
    description: "Campanhas de performance que geram leads com perfil real de compra — não curiosos, compradores.",
  },
  {
    icon: MessageCircle,
    title: "Vendas pelo WhatsApp",
    description: "Estruturação do atendimento comercial digital: scripts, cadência de follow-up e treinamento do time.",
  },
  {
    icon: Database,
    title: "CRM & Funil de Vendas",
    description: "Implementação de CRM para rastrear cada lead, cada etapa, cada oportunidade. Controle total.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative overflow-hidden bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Sobre Nós
            </motion.span>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] text-foreground mb-8 break-words"
              >
                Transformamos leads em
                <br />
                <span className="text-gradient-red">vendas reais.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-primary mb-8 origin-left w-20"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-4"
            >
              A <strong className="text-foreground">Pipeline</strong> nasceu para resolver o problema mais caro das empresas: perder vendas por falta de processo. Leads entram e ninguém sabe o que fazer com eles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed text-sm lg:text-base"
            >
              Unimos <strong className="text-foreground">tráfego pago, atendimento comercial e CRM</strong> para criar uma máquina de vendas previsível e escalável.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <StaggerContainer className="space-y-5" staggerDelay={0.15}>
              {pillars.map((pillar, i) => (
                <StaggerItem key={pillar.title}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative bg-background border border-border rounded-3xl p-7 md:p-8 group hover:border-primary/30 transition-colors duration-500 overflow-hidden"
                  >
                    <span className="absolute -top-6 -right-4 text-[8rem] font-black text-foreground/[0.02] group-hover:text-primary/[0.06] transition-all duration-700 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                        <pillar.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
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
