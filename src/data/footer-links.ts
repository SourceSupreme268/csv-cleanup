
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// this for version 2
// export const footerColumns: FooterColumn[] = [
//   { heading: "Product", links: ["Features", "Integrations", "Pricing", "Roadmap"] },
//   { heading: "Resources", links: ["Docs", "Blog", "Guides", "Help Center"] },
//   { heading: "Company", links: ["About", "Privacy", "Terms", "Contact"] },
// ];