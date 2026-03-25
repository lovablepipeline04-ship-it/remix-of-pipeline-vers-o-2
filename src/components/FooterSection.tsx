import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import pipelineLogo from "@/assets/pipeline-favicon.png";

const FooterSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-14 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => scrollTo("#inicio")}
              className="flex items-center gap-3 mb-3"
            >
              <img src={pipelineLogo} alt="Pipeline" className="h-7 w-auto" />
              <span className="text-lg font-black text-foreground tracking-tight">PIPELINE</span>
            </motion.button>
            <p className="text-xs text-muted-foreground mb-4">
              Seus leads virando vendas de verdade.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, url: "https://www.instagram.com/pipeline.br/" },
                { icon: Linkedin, url: "#" },
                { icon: Facebook, url: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-foreground uppercase tracking-wider mb-1">Navegação</span>
            {[
              { label: "Soluções", href: "#solucoes" },
              { label: "Processo", href: "#processo" },
              { label: "Sobre Nós", href: "#sobre" },
              { label: "FAQ", href: "#faq" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <motion.button
                key={link.label}
                whileHover={{ x: 4, color: "hsl(0 100% 50%)" }}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground transition-colors text-left"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-foreground uppercase tracking-wider mb-1">Contato</span>
            <span className="text-sm text-muted-foreground">(19) 99321-1881</span>
            <span className="text-sm text-muted-foreground">contato@pipelinebr.com</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pipeline. Todos os direitos reservados.
          </p>
          <motion.a
            href="https://www.instagram.com/pipeline.br/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
          >
            <span className="text-xs group-hover:text-primary transition-colors">Pipeline Consultoria Digital</span>
            <img
              src={pipelineLogo}
              alt="Pipeline"
              className="h-5 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
