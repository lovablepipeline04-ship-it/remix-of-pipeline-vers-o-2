import { motion } from "framer-motion";
import pipelineLogo from "@/assets/pipeline-logo.png";

const FooterSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => scrollTo("#inicio")}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary" />
              <span className="text-lg font-black text-foreground tracking-tight">PIPELINE</span>
            </motion.button>
            <p className="text-xs text-muted-foreground">
              Consultoria Digital de Performance
            </p>
          </div>

          <div className="flex gap-10">
            {[
              { label: "Processo", href: "#processo" },
              { label: "Sobre", href: "#sobre" },
              { label: "FAQ", href: "#faq" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <motion.button
                key={link.label}
                whileHover={{ color: "hsl(0 100% 50%)" }}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
            <span className="text-xs group-hover:text-primary transition-colors">Desenvolvido por Pipeline Consultoria Digital</span>
            <img
              src={pipelineLogo}
              alt="Pipeline Consultoria Digital"
              className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
