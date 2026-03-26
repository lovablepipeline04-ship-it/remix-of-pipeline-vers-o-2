import { motion } from "framer-motion";
import { BarChart3, MessageCircle, Database, ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const services = [
  {
    icon: BarChart3,
    title: "Geração de Demanda por Tráfego Pago",
    description: "Campanhas estratégicas no Google e Meta que atraem leads qualificados, prontos para comprar. Chega de gastar com cliques que não viram venda.",
    num: "01",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Comercial Profissional",
    description: "Treinamento e estruturação do seu time comercial para converter leads do digital pelo WhatsApp. Scripts, cadência e follow-up que fecham.",
    num: "02",
  },
  {
    icon: Database,
    title: "Implementação de CRM",
    description: "Controle total do funil de vendas. Cada lead rastreado, cada etapa visível. Nenhuma oportunidade esquecida ou perdida.",
    num: "03",
  },
];

const ServicesSection = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Soluções
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-foreground break-words"
              >
                Como a Pipeline
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-gradient-red"
              >
                resolve isso.
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-sm text-sm lg:text-base leading-relaxed"
          >
            Três pilares que transformam leads em vendas reais e previsíveis.
          </motion.p>
        </div>

        <StaggerContainer className="space-y-0 divide-y divide-border" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ x: 12, backgroundColor: "hsl(0 0% 8%)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group cursor-pointer py-7 lg:py-8 px-4 md:px-6 md:pr-24 lg:pr-28 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 relative rounded-2xl overflow-hidden"
              >
                <span className="text-sm text-muted-foreground font-mono w-8 shrink-0">{service.num}</span>

                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500"
                >
                  <service.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1 break-words">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm max-w-[320px] leading-relaxed md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>

                <motion.div
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <ArrowUpRight size={22} className="text-primary" />
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
