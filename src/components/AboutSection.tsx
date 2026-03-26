import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative overflow-hidden bg-card">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:pr-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Sobre Nós
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] text-foreground mb-8 break-words"
            >
              Transformamos estratégia em
              <br />
              <span className="text-gradient-red">resultados.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-primary mb-8 origin-left w-20"
            />

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed text-base lg:text-lg"
              >
                A <strong className="text-foreground">Pipeline</strong> é uma consultoria digital criada para transformar estratégia em resultado. Acreditamos que o crescimento de uma marca não acontece por acaso e sim que seja algo construído com método, clareza e performance.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground leading-relaxed text-base lg:text-lg"
              >
                Unimos estratégia, marketing e tecnologia para ajudar empresas a crescerem de forma previsível, sustentável e inteligente.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground leading-relaxed text-base lg:text-lg"
              >
                Nosso trabalho vai muito além da gestão de campanhas: mergulhamos na essência de cada negócio para entender seu mercado, identificar oportunidades e traçar o caminho certo até os resultados.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-muted flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  
                  <video 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source src="/video-institucional.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute z-20 w-20 h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Play fill="currentColor" className="w-8 h-8 ml-1" />
                  </div>
                  
                  <div className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none z-30" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[400px] w-[90vw] p-0 overflow-hidden bg-black border-white/10 rounded-2xl flex items-center justify-center">
                <video 
                  className="w-full max-h-[85vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src="/video-institucional.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
