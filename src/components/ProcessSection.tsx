import { motion } from "framer-motion";
import { Search, Target, Rocket, BarChart } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./InteractiveElements";

const steps = [
  { icon: Search, title: "Diagnóstico", description: "Analisamos sua operação comercial, canais de aquisição e gargalos que impedem a conversão de leads em vendas.", num: "01" },
  { icon: Target, title: "Estratégia de Tráfego", description: "Criamos campanhas que geram leads qualificados com perfil real de compra para o seu negócio.", num: "02" },
  { icon: Rocket, title: "Estruturação Comercial", description: "Treinamos seu time, criamos scripts de atendimento no WhatsApp e implementamos CRM para controle total.", num: "03" },
  { icon: BarChart, title: "Otimização Contínua", description: "Acompanhamos métricas de cada etapa do funil e otimizamos para aumentar a taxa de conversão continuamente.", num: "04" },
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-18">
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
                className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-foreground break-words"
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
                className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-gradient-red"
              >
                fechamento.
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
            Uma metodologia clara para transformar leads em clientes reais e previsíveis.
          </motion.p>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6" staggerDelay={0.12}>
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-7 pt-5 md:pt-8 group hover:border-primary/30 transition-all duration-500 overflow-hidden h-full"
              >
                <span className="absolute -top-3 -right-2 text-[5rem] md:text-[7rem] font-black text-foreground/[0.03] group-hover:text-primary/[0.08] transition-all duration-700 leading-none select-none">
                  {step.num}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary transition-colors duration-500">
                    <step.icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug break-words">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-[12px] md:text-sm leading-relaxed md:leading-relaxed">
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
