// Site configuration — all real business data should be filled in here.
// Do NOT invent real contact details, addresses, or client names.

export const siteConfig = {
  brandName: "Royal Treasure",
  brandTagline: "Uncovering Stories, Preserved Through Time",
  brandDescription:
    "A luxury heritage brand dedicated to preserving extraordinary objects, spaces, and stories from across India.",
  brandBelief:
    "Heritage isn't preserved by being untouched. It's preserved by being lived in.",

  // Contact — replace with verified details
  contact: {
    email: "hello@royaltreasure.in",
    phone: "+91 00000 00000",
    address: "Showroom Address, Jaipur, Rajasthan, India",
    studio: "Studio Address, Jaipur, Rajasthan, India",
    instagram: "@Royale_treasurers",
    instagramUrl: "https://www.instagram.com/Royale_treasurers",
    googleMapsUrl: "#",
  },

  // Business hours
  hours: "Monday – Saturday, 10am – 7pm IST",

  // Meta
  location: {
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    coords: "26.9124° N, 75.7873° E",
  },
};

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export const navigationLinks: {
  left: NavLink[];
  right: NavLink[];
} = {
  left: [
    { label: "The Story", href: "/#story" },
    { label: "The Collection", href: "/collection" },
    { label: "The Spaces", href: "/#spaces" },
    { label: "What We Do", href: "/#services" },
  ],
  right: [
    { label: "Shop Heritage", href: "/collection" },
    { label: "The Legacy", href: "/legacy" },
    { label: "Visit", href: "/contact" },
    {
      label: "Begin Conversation",
      href: "/conversation",
      isButton: true,
    },
  ],
};
