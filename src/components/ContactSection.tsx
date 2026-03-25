import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Phone, Mail } from "lucide-react";
import { MagneticButton } from "./InteractiveElements";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${formData.name}. Quero um diagnóstico gratuito para parar de perder vendas.`;
    window.open(
      `https://api.whatsapp.com/send/?phone=5519993211881&text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Contato
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.8rem,4vw,3rem)] font-black text-foreground mb-6 break-words"
              >
                Quer parar de
                <br />
                <span className="text-gradient-red">perder vendas?</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-md text-sm lg:text-base"
            >
              Preencha o formulário para receber um diagnóstico gratuito da sua operação comercial. Ou fale direto pelo WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-5"
            >
              <MagneticButton
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=5519993211881&text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20gratuito",
                    "_blank"
                  )
                }
                className="inline-flex items-center gap-3 bg-[#25D366] text-primary-foreground px-7 py-3.5 rounded-full font-medium text-sm"
              >
                <MessageCircle size={18} />
                Falar pelo WhatsApp
              </MagneticButton>

              <div className="flex flex-col gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={16} className="text-primary" />
                  <span className="text-sm">(19) 99321-1881</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  <span className="text-sm">contato@pipelinebr.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-7 md:p-10 space-y-5"
            >
              <div className="mb-2">
                <h3 className="text-base font-bold text-foreground">Diagnóstico Gratuito</h3>
                <p className="text-xs text-muted-foreground">Descubra os gargalos que travam suas vendas</p>
              </div>

              {[
                { field: "name", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                { field: "phone", label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
                { field: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
              ].map((input, i) => (
                <motion.div
                  key={input.field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">{input.label}</label>
                  <input
                    type={input.type}
                    required
                    value={formData[input.field as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                    onFocus={() => setFocusedField(input.field)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={input.placeholder}
                    className={`w-full bg-transparent border-b-2 px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-500 text-sm ${
                      focusedField === input.field ? "border-primary" : "border-border"
                    }`}
                  />
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px -10px hsl(0 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-glow relative overflow-hidden group mt-4"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Send size={18} className="relative z-10" />
                <span className="relative z-10">Quero Meu Diagnóstico</span>
              </motion.button>

              <p className="text-xs text-center text-muted-foreground">
                Seus dados estão seguros. Sem spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
