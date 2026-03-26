import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { SmoothCounter } from "./InteractiveElements";

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "Leads qualificados", sub: "gerados por mês" },
  { value: 3, prefix: "", suffix: "x", label: "Mais conversão", sub: "no comercial" },
  { value: 98, prefix: "", suffix: "%", label: "Satisfação", sub: "dos clientes" },
  { value: 100, prefix: "", suffix: "%", label: "Funil rastreado", sub: "com CRM" },
];

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-18">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4"
            >
              Resultados
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-foreground break-words"
              >
                Números que <span className="text-gradient-red">vendem.</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-sm text-sm lg:text-base leading-relaxed"
          >
            Resultados reais de clientes que pararam de perder vendas.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative bg-background border border-border rounded-3xl p-6 lg:p-8 group cursor-default hover:border-primary/30 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-700" />

              <div className="relative z-10">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground group-hover:text-primary transition-colors duration-500 mb-3 tabular-nums">
                  <SmoothCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <h3 className="text-foreground font-semibold text-xs lg:text-sm uppercase tracking-wider mb-1">{stat.label}</h3>
                <p className="text-muted-foreground text-xs">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 flex flex-col items-center"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">O resultado na prática</h3>
            <p className="text-muted-foreground">Veja o feedback de quem já transformou seu comercial com a Pipeline.</p>
          </div>
          
          <div className="flex flex-nowrap md:grid md:grid-cols-2 gap-5 md:gap-12 w-[calc(100%+3rem)] md:w-full mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pt-2 pb-8 md:pb-0 -ml-6 md:ml-auto hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Video Celularis */}
            <div className="flex flex-col items-center gap-4 w-[75vw] max-w-[280px] md:w-auto md:max-w-none snap-center shrink-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 w-full aspect-[4/5] max-w-[320px] bg-muted flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                    
                    <video 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src="/Feedbackvideocelularis.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute z-20 w-16 h-16 md:w-20 md:h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
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
                    <source src="/Feedbackvideocelularis.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </DialogContent>
              </Dialog>
              <span className="text-sm font-bold text-foreground tracking-widest uppercase px-6 py-2.5 bg-background border border-border shadow-sm rounded-full mt-2">Celularis</span>
            </div>

            {/* Video Construfera */}
            <div className="flex flex-col items-center gap-4 w-[75vw] max-w-[280px] md:w-auto md:max-w-none snap-center shrink-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 w-full aspect-[4/5] max-w-[320px] bg-muted flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                    
                    <video 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src="/Feedbackvideoconstrufera.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute z-20 w-16 h-16 md:w-20 md:h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
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
                    <source src="/Feedbackvideoconstrufera.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </DialogContent>
              </Dialog>
              <span className="text-sm font-bold text-foreground tracking-widest uppercase px-6 py-2.5 bg-background border border-border shadow-sm rounded-full mt-2">Construfera</span>
            </div>
            
            {/* Spacer for proper right padding on scroll */}
            <div className="w-1 shrink-0 md:hidden" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-14"
          >
            <button onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300">
              Quero estruturar meu comercial
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
