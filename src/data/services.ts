export interface Service {
  title: string;
  description: string;
  links: string[];
}

export const services: Service[] = [
  {
    title: "Interior Design\n& Hospitality",
    description:
      "Crafting spaces that carry memory — from private residences and boutique hotels to heritage retreats and curated dining experiences.",
    links: [
      "Residential Interiors",
      "Hospitality Design",
      "Boutique Hotels",
      "Retreat & Spa Design",
    ],
  },
  {
    title: "Heritage &\nArchitectural Restoration",
    description:
      "Breathing life back into old structures — havelis, forts, courtyard homes, and heritage properties given careful, respectful restoration.",
    links: [
      "Haveli Restoration",
      "Fort & Palace Conservation",
      "Adaptive Reuse",
      "Documentation & Research",
    ],
  },
  {
    title: "Artefacts, Antiques\n& Furniture",
    description:
      "Sourcing, restoring, and placing extraordinary objects from across India and beyond into spaces where they can live again.",
    links: [
      "Antique Sourcing",
      "Furniture Restoration",
      "Collection Curation",
      "Private Sales & Acquisitions",
    ],
  },
  {
    title: "Art &\nBespoke Installations",
    description:
      "Commissioning original artworks, custom-crafted installations, and one-of-a-kind pieces that transform a space into a story.",
    links: [
      "Commissioned Artwork",
      "Site-Specific Installations",
      "Craft Collaborations",
      "Art Direction",
    ],
  },
];
