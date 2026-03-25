import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import pipelineLogo from "@/assets/pipeline-favicon.png";
import { MagneticButton, FloatingElement } from "./InteractiveElements";

const LetterReveal = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ y: "120%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: delay + i * 0.03,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${formData.name}. Quero um diagnóstico gratuito para gerar mais vendas.`;
    window.open(
      `https://api.whatsapp.com/send/?phone=5519993211881&text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-20">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY, scale: bgScale, opacity: 0.15 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />

      {/* Decorative red line */}
      <motion.div
        className="absolute top-0 left-[10%] w-px h-screen bg-gradient-to-b from-primary/40 via-primary/10 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      />

      {/* Floating accent shapes */}
      <FloatingElement className="absolute top-[20%] right-[12%] hidden lg:block" duration={6} distance={15}>
        <div className="w-20 h-20 border border-primary/10 rounded-full" />
      </FloatingElement>
      <FloatingElement className="absolute top-[50%] right-[8%] hidden lg:block" duration={8} distance={10} delay={1}>
        <div className="w-3 h-3 bg-primary rounded-full" />
      </FloatingElement>

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left - Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Pipeline Consultoria Digital</span>
            </motion.div>

            <div className="overflow-hidden mb-1">
              <LetterReveal
                text="SEUS LEADS"
                className="text-[clamp(2rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-foreground block"
                delay={0.5}
              />
            </div>
            <div className="overflow-hidden mb-1">
              <LetterReveal
                text="NÃO VIRAM"
                className="text-[clamp(2rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-foreground block"
                delay={0.8}
              />
            </div>
            <div className="overflow-hidden">
              <LetterReveal
                text="VENDAS?"
                className="text-[clamp(2rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-gradient-red block"
                delay={1.1}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="text-sm lg:text-base text-muted-foreground max-w-lg leading-relaxed mt-6"
            >
              Geramos demanda qualificada, profissionalizamos seu atendimento comercial no WhatsApp e implementamos CRM para você não perder nenhuma oportunidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex items-center gap-6 mt-5"
            >
              <MagneticButton
                onClick={() => scrollTo("#contato")}
                className="bg-primary text-primary-foreground px-7 py-3.5 lg:px-9 lg:py-4 rounded-full text-sm lg:text-base font-semibold shadow-glow hover:shadow-[0_0_60px_-10px_hsl(0_100%_50%_/_0.6)] transition-shadow duration-500 group relative overflow-hidden"
              >
                <span className="relative z-10">Quero Gerar Mais Vendas</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </MagneticButton>

              <motion.button
                onClick={() => scrollTo("#dores")}
                className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ y: 3 }}
              >
                <ArrowDown size={20} className="group-hover:text-primary transition-colors" />
                <span className="text-sm">Saiba mais</span>
              </motion.button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="flex gap-8 md:gap-12 mt-8 pt-5 border-t border-border/50"
            >
              {[
                { value: "+500", label: "Leads qualificados/mês" },
                { value: "3x", label: "Mais conversão comercial" },
                { value: "100%", label: "Controle do funil" },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-lg md:text-xl font-bold text-foreground block"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-[10px] md:text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 space-y-4 relative overflow-hidden"
            >
              {/* Subtle glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <img src={pipelineLogo} alt="Pipeline" className="h-7 w-auto" />
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-tight">Diagnóstico Gratuito</h3>
                    <p className="text-xs text-muted-foreground">Descubra por que seus leads não compram</p>
                  </div>
                </div>

                {[
                  { field: "name", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                  { field: "phone", label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
                  { field: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
                ].map((input) => (
                  <div key={input.field} className="mb-3">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">{input.label}</label>
                    <input
                      type={input.type}
                      required
                      value={formData[input.field as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                      onFocus={() => setFocusedField(input.field)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={input.placeholder}
                      className={`w-full bg-background/50 border rounded-xl px-4 py-2.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-500 text-sm ${
                        focusedField === input.field ? "border-primary shadow-[0_0_20px_-8px_hsl(0_100%_50%_/_0.3)]" : "border-border"
                      }`}
                    />
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px -10px hsl(0 100% 50% / 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 shadow-glow relative overflow-hidden group mt-1"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Send size={16} className="relative z-10" />
                  <span className="relative z-10">Quero Meu Diagnóstico</span>
                </motion.button>

                <p className="text-[11px] text-center text-muted-foreground/60 mt-2">
                  Seus dados estão seguros. Sem spam.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
