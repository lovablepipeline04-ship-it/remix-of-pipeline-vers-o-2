import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Meus leads não têm perfil de compra. Vocês resolvem isso?",
    answer: "Sim. Criamos campanhas de tráfego pago segmentadas com foco em perfil de compra real não em volume. Leads qualificados custam mais por unidade, mas convertem de verdade.",
  },
  {
    question: "Meu time comercial não sabe atender leads do digital. E agora?",
    answer: "Nós treinamos e estruturamos o atendimento comercial pelo WhatsApp com scripts, cadência de follow-up e boas práticas. Seu time aprende a conduzir o lead até o fechamento.",
  },
  {
    question: "Preciso de CRM mas não sei por onde começar.",
    answer: "Implementamos o CRM do zero, configuramos as etapas do funil, treinamos o time e acompanhamos a adoção. Você terá visão completa de cada lead e cada oportunidade.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Em 30 dias as campanhas já estão rodando e gerando leads. Em 60 dias o time comercial está estruturado. Em 90 dias o funil está funcionando com previsibilidade.",
  },
  {
    question: "Vocês trabalham com empresas pequenas?",
    answer: "Sim. Nossos planos são personalizados para o momento de cada empresa. O importante é ter disposição para profissionalizar o comercial e investir em tráfego.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden bg-card">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 animate-blob" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              FAQ
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.8rem,4vw,2.5rem)] font-black text-foreground mb-6 break-words"
              >
                Dúvidas
                <br />
                <span className="text-gradient-red">frequentes.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed text-sm lg:text-base"
            >
              Não encontrou sua resposta? Fale direto pelo WhatsApp.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-5 data-[state=open]:border-primary/30 transition-all duration-500 overflow-hidden bg-card"
                  >
                    <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5 hover:text-primary transition-colors text-sm lg:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
