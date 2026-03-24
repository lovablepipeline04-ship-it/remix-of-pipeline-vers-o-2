import { motion } from "framer-motion";

const MarqueeSection = () => {
  const items = ["ESTRATÉGIA", "PERFORMANCE", "TRÁFEGO PAGO", "CONSULTORIA", "BRANDING", "TECNOLOGIA"];

  return (
    <section className="py-6 border-y border-border overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(4)].map((_, setIdx) =>
          items.map((text, i) => (
            <span key={`${setIdx}-${i}`} className="text-sm font-medium tracking-[0.3em] uppercase mx-8 text-muted-foreground/40 flex items-center gap-8 select-none">
              {text}
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            </span>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
