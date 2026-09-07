export type Project = {
  slug: string;
  title: string;
  sector: string;
  year: string;
  services: string[];
  liveUrl?: string;
  cover: string;
  gallery: string[];
  headline: string;
  summary: string;
  challenge: string;
  direction: string;
  result: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "wingscraft",
    title: "WingsCraft Entertainment",
    sector: "Luxury weddings & experiences",
    year: "2026",
    services: ["Art direction", "Web design", "Development"],
    liveUrl: "https://wingscraft-entertainment.ardent-vale-0425.chatgpt.site/",
    cover: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&q=82&w=1800",
    gallery: [
      "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&q=82&w=1800",
      "https://images.unsplash.com/photo-1735052712489-f45220126a0c?auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&q=80&w=1500",
      "https://images.unsplash.com/photo-1744805624954-a6686543c3ff?auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&q=80&w=1500",
      "https://images.unsplash.com/photo-1722952934708-749c22eb2e58?auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&q=80&w=1500"
    ],
    headline: "Luxury, movement and emotion — without the usual wedding-site clichés.",
    summary: "A premium digital direction for a wedding and event brand built around atmosphere, editorial scale and confident restraint.",
    challenge: "WingsCraft needed a digital presence that felt closer to a luxury editorial brand than a vendor catalogue. The work had to feel aspirational while staying easy to navigate on mobile.",
    direction: "We used oversized type, cinematic composition, restrained copy and deliberate pacing. Motion supports the story instead of competing with the photography.",
    result: "A high-end responsive experience designed to create immediate perceived value and guide enquiries without flattening the brand into a template.",
    accent: "#4f191d"
  },
  {
    slug: "trinity-wraps",
    title: "Trinity Wraps",
    sector: "Automotive styling studio",
    year: "2026",
    services: ["Web design", "Development", "Responsive system"],
    liveUrl: "https://trinitywraps.vercel.app",
    cover: "/projects/trinity.jpg",
    gallery: ["/projects/trinity.jpg", "/projects/trinity-bike.jpg", "/projects/trinity-red-car.jpg", "/projects/trinity-services.jpg"],
    headline: "A sharper digital identity for a shop built around precision.",
    summary: "A performance-led automotive site that translates wrap culture into a controlled, premium web experience.",
    challenge: "The visual language had to carry speed and attitude while preserving clarity. The site also needed to work just as strongly on a phone as it did on a wide desktop.",
    direction: "Dark surfaces, dense image crops, oversized type and quick micro-interactions create energy. Structured spacing and clear hierarchy stop the experience from becoming noisy.",
    result: "A focused automotive showcase with stronger brand presence, clear service discovery and direct routes to enquiry.",
    accent: "#121212"
  },
  {
    slug: "dr-shekar-reddy",
    title: "Dr. Shekar Reddy",
    sector: "Dental care",
    year: "2026",
    services: ["UX", "Web design", "Development"],
    liveUrl: "https://dentalclinicdrshekhar.vercel.app/",
    cover: "/projects/dental-treating.jpg",
    gallery: ["/projects/dental-treating.jpg", "/projects/dental-reception.jpg", "/projects/dental.jpg"],
    headline: "Clinical credibility without the cold, generic clinic aesthetic.",
    summary: "A calm, conversion-aware website system designed to make treatment information easier to understand and the clinic easier to trust.",
    challenge: "Healthcare websites often become dense or visually interchangeable. The goal was to make essential information feel approachable without sacrificing professionalism.",
    direction: "A light visual system, generous whitespace and carefully paced content put trust first. Mobile layouts keep actions and treatment information within easy reach.",
    result: "A cleaner patient journey with stronger presentation, better hierarchy and a more considered digital first impression.",
    accent: "#c8ddd8"
  },
  {
    slug: "gb-motors",
    title: "GB Motors",
    sector: "Premium automotive care",
    year: "2026",
    services: ["Web design", "Development"],
    liveUrl: "https://gbmotors.vercel.app/",
    cover: "/projects/gb-work-1.jpg",
    gallery: ["/projects/gb-work-1.jpg", "/projects/gb-work-2.jpg", "/projects/gb-work-3.jpg"],
    headline: "Built to make premium automotive care feel premium online too.",
    summary: "A bold automotive interface balancing impact, service clarity and direct conversion paths.",
    challenge: "The business needed stronger visual authority without making the site difficult to scan. Service discovery and mobile conversion both had to remain immediate.",
    direction: "High-contrast typography, large vehicle imagery and disciplined content blocks give the site confidence while keeping navigation obvious.",
    result: "A memorable, high-impact digital storefront that better matches the quality and personality of the underlying service.",
    accent: "#352015"
  }
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
