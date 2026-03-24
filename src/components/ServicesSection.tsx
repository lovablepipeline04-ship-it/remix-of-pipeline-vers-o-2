import { motion } from "framer-motion";
import { BarChart3, Monitor, Share2, Globe, ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const services = [
  {
    icon: BarChart3,
    title: "Tráfego Pago",
    description: "Aumente suas vendas e alcance o público certo de forma rápida e eficiente. Estratégia personalizada que garante resultados reais.",
    num: "01",
  },
  {
    icon: Monitor,
    title: "Migração de Sistemas",
    description: "Modernize sua infraestrutura tecnológica sem perder dados. Transição rápida, segura e eficiente.",
    num: "02",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Conecte sua marca ao público certo, aumente o engajamento e potencialize suas vendas.",
    num: "03",
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Páginas modernas e personalizadas que unem design atraente e funcionalidade para sua marca.",
    num: "04",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header - editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Serviços
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground"
              >
                O que nós
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient-red"
              >
                fazemos.
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-sm text-base leading-relaxed"
          >
            Soluções completas para posicionar sua marca no digital e transformar presença em resultados mensuráveis.
          </motion.p>
        </div>

        {/* Services list - editorial horizontal cards */}
        <StaggerContainer className="space-y-0 divide-y divide-border" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ x: 16, backgroundColor: "hsl(0 0% 8%)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group cursor-pointer py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative"
              >
                {/* Number */}
                <span className="text-sm text-muted-foreground font-mono w-8 shrink-0">{service.num}</span>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500"
                >
                  <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                  {service.title}
                </h3>

                {/* Description - visible on hover */}
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>

                {/* Arrow */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                  whileHover={{ scale: 1.2 }}
                >
                  <ArrowUpRight size={24} className="text-primary" />
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
