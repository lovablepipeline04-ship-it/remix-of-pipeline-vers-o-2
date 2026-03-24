import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Que tipo de problemas de negócios vocês resolvem?",
    answer: "Através de uma análise interna da sua marca e de mercado, identificamos os pontos de melhorias na sua operação e possíveis caminhos para atingir os objetivos.",
  },
  {
    question: "Como funciona o processo de consultoria?",
    answer: "Através de reuniões e um modelo de comunicação eficiente, mantemos alinhamento constante com planejamentos semanais, quinzenais e mensais.",
  },
  {
    question: "O que diferencia a Pipeline de outros consultores?",
    answer: "Com um estudo de mercado eficiente, entregamos um projeto personalizado com soluções práticas e bom custo-benefício através de parcerias com diversas plataformas.",
  },
  {
    question: "Conseguem ajudar a um custo acessível?",
    answer: "Sim! Trabalhamos com planos personalizados que cabem no orçamento de cada cliente, garantindo resultados reais independente do tamanho do investimento.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
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
                className="text-3xl md:text-4xl font-black text-foreground mb-6 break-words"
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
              Não encontrou sua resposta? Entre em contato direto pelo WhatsApp.
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
