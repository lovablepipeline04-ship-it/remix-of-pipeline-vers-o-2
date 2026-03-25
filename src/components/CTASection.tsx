import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./InteractiveElements";

const CTASection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-card">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2 mb-10"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm text-muted-foreground">Vamos Trabalhar Juntos</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1.05] text-foreground mb-4 break-words"
          >
            CANSADO DE
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1.05] mb-8 break-words"
          >
            <motion.span
              className="text-gradient-red inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              PERDER VENDAS?
            </motion.span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Pare de deixar dinheiro na mesa. Cada lead que você perde é uma venda que seu concorrente fecha. Fale agora com nossa equipe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            onClick={() => scrollTo("#contato")}
            className="bg-primary text-primary-foreground px-9 py-4 lg:px-12 lg:py-5 rounded-full text-sm lg:text-base font-semibold shadow-glow hover:shadow-[0_0_60px_-10px_hsl(0_100%_50%_/_0.6)] transition-all duration-500 group inline-flex items-center gap-3 relative overflow-hidden"
          >
            <span className="relative z-10">Quero Parar de Perder Vendas</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </MagneticButton>

          <MagneticButton
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=5519993211881&text=Ol%C3%A1%2C%20quero%20parar%20de%20perder%20vendas.%20Podem%20me%20ajudar%3F", "_blank")}
            className="border border-border text-foreground px-9 py-4 lg:px-12 lg:py-5 rounded-full text-sm lg:text-base font-medium hover:bg-secondary/50 transition-all duration-300"
          >
            Falar pelo WhatsApp
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
