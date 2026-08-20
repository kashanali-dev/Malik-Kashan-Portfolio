// src/app/lib/site.js
// Central site configuration — keep contact details in one place.

export const SITE = {
  name: "Malik Kashan",
  email: "kashanalikot@gmail.com",
  phoneDisplay: "+92 328 1944386",
  phoneIntl: "+923281944386",
  whatsappNumber: "923281944386",
  github: "https://github.com/kashanali-dev/",
  url: "https://malik-kashan-portfolio.vercel.app/",
  cvFile: "/Malik_Kashan_CV_Final.pdf",
  location: {
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
    label: "Lahore, Pakistan",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lahore%2C%20Punjab%2C%20Pakistan",
  },
};

// Pre-filled message used for every WhatsApp link on the site.
export const WHATSAPP_MESSAGE =
  "Assalam-o-Alaikum! I visited your portfolio and I'm really impressed by your work. I think you are the right fit for my frontend project and I want to build it with you. Could you please share your availability, pricing and estimated timeline so we can take this forward? Looking forward to hearing from you soon. JazakAllah Khair!";

// Opens WhatsApp Web directly (desktop) instead of the mobile app.
export const whatsappLink = (text = WHATSAPP_MESSAGE) =>
  `https://web.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(text)}`;