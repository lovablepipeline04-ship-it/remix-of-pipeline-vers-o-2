import { motion } from "framer-motion";
import { SmoothCounter } from "./InteractiveElements";

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "Leads gerados", sub: "por mês" },
  { value: 3, prefix: "", suffix: "x", label: "Mais orçamentos", sub: "em média" },
  { value: 98, prefix: "", suffix: "%", label: "Satisfação", sub: "dos clientes" },
  { value: 24, prefix: "", suffix: "h", label: "Online", sub: "sempre ativo" },
];

const ResultsSection = () => {
  return (
    <section className="py-36 relative overflow-hidden bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-6"
            >
              Resultados
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground"
              >
                Números que <span className="text-gradient-red">falam.</span>
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
            Resultados reais, mensuráveis e transparentes — sem promessas vazias.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-background border border-border rounded-3xl p-8 group cursor-default hover:border-primary/30 transition-all duration-500 text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground group-hover:text-primary transition-colors duration-500 mb-4 tabular-nums">
                <SmoothCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-1">{stat.label}</h3>
              <p className="text-muted-foreground text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
