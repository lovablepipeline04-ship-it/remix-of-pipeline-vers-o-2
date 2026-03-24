import { motion } from "framer-motion";
import { Search, Target, Rocket, BarChart } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const steps = [
  { icon: Search, title: "Diagnóstico", description: "Análise profunda do seu negócio, mercado e concorrência para mapear oportunidades reais.", num: "01" },
  { icon: Target, title: "Estratégia", description: "Plano personalizado com metas claras, canais definidos e cronograma de execução.", num: "02" },
  { icon: Rocket, title: "Execução", description: "Implementação ágil de campanhas, landing pages, automações e otimizações contínuas.", num: "03" },
  { icon: BarChart, title: "Resultados", description: "Acompanhamento em tempo real com relatórios claros e ajustes baseados em dados.", num: "04" },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Connector line behind cards */}
      <div className="absolute top-1/2 left-0 right-0 hidden lg:block">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Processo
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground break-words"
              >
                Do diagnóstico ao
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-gradient-red"
              >
                resultado.
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
            Uma metodologia clara e comprovada para levar sua empresa ao próximo nível digital.
          </motion.p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative bg-card border border-border rounded-3xl p-7 pt-8 group hover:border-primary/30 transition-all duration-500 overflow-hidden h-full"
              >
                <span className="absolute -top-4 -right-2 text-[7rem] font-black text-foreground/[0.03] group-hover:text-primary/[0.08] transition-all duration-700 leading-none select-none">
                  {step.num}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                    <step.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProcessSection;
