import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Uma das melhores consultoras de negócios com quem já trabalhei, o site que fizeram ficou maravilhoso.",
    author: "Cachaça Pardinho",
    location: "Brasil",
  },
  {
    quote: "A Pipeline nos ajudou a crescer no digital e com um planejamento bem feito conseguimos aumentar as nossas vendas e o reconhecimento da marca cresceu também!",
    author: "Gold Rush",
    location: "EUA",
  },
  {
    quote: "Pensamento estratégico excepcional e atenção aos detalhes ajudaram nossa empresa a alcançar um crescimento extraordinário.",
    author: "Grão Café Moda Feminina",
    location: "Brasil",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-36 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-6"
            >
              Depoimentos
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl font-black text-foreground mb-10"
              >
                O que dizem
                <br />
                <span className="text-gradient-red">nossos clientes.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-14 h-14 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <ArrowLeft size={18} className="text-muted-foreground" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-14 h-14 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <ArrowRight size={18} className="text-muted-foreground" />
              </motion.button>
              <span className="text-sm text-muted-foreground ml-3 font-mono">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card border border-border rounded-3xl p-10 md:p-16 relative overflow-hidden"
              >
                <Quote size={60} className="text-primary/10 absolute top-8 right-8" />

                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-snug mb-12 relative z-10">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonials[current].author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonials[current].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
