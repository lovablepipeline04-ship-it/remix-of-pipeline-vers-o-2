import { useState, useEffect, useCallback } from "react";
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

const AUTOPLAY_INTERVAL = 6000;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);
  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (100 / (AUTOPLAY_INTERVAL / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="depoimentos" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Depoimentos
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-black text-foreground mb-8 break-words"
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
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <ArrowLeft size={16} className="text-muted-foreground" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <ArrowRight size={16} className="text-muted-foreground" />
              </motion.button>
              <span className="text-sm text-muted-foreground ml-3 font-mono">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </motion.div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <div key={i} className="h-1 flex-1 rounded-full bg-border overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    style={{
                      width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.05 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                <Quote size={48} className="text-primary/10 absolute top-6 right-6" />

                <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground leading-snug mb-10 relative z-10">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-base">
                    {testimonials[current].author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonials[current].author}</p>
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
