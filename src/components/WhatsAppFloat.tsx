import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5519993211881&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Pipeline"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] cursor-hover"
    >
      <MessageCircle size={28} className="text-white" />
      
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
      />
    </motion.a>
  );
};

export default WhatsAppFloat;
