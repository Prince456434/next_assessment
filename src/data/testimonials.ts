export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with Royal Treasure transformed not just our home, but the way we think about the objects within it. Every piece has a story we now know and love.",
    author: "A Private Collector",
    context: "Heritage Residence, Jaipur",
  },
  {
    id: 2,
    quote:
      "The restoration of our family haveli exceeded every expectation. The team understood the soul of the building and honoured it at every step.",
    author: "A Heritage Property Owner",
    context: "Haveli Restoration Project",
  },
  {
    id: 3,
    quote:
      "They found pieces I had been looking for across three countries, within weeks. The depth of knowledge and network is truly remarkable.",
    author: "An International Collector",
    context: "Antique Acquisition, Europe",
  },
  {
    id: 4,
    quote:
      "Our boutique hotel now tells a story that guests can feel the moment they walk through the door. That is entirely because of Royal Treasure's vision.",
    author: "A Hospitality Owner",
    context: "Heritage Boutique Hotel, Rajasthan",
  },
  {
    id: 5,
    quote:
      "The bespoke installation commissioned for our dining space has become the heart of our restaurant. Guests ask about it every single evening.",
    author: "A Restaurant Owner",
    context: "Art Installation, Mumbai",
  },
];
