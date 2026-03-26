const WA_PHONE = "5519993211881";
const WA_DEFAULT_MESSAGE = "Vim do site e queria saber mais informações da Pipeline";

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || WA_DEFAULT_MESSAGE;
  return `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (customMessage?: string) => {
  window.open(getWhatsAppUrl(customMessage), "_blank");
};
