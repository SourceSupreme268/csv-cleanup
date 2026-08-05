
export interface TrustItem {
  title: string;
  description: string;
  icon: "Lock" | "ShieldCheck" | "Trash2" | "ServerCog";
}

export const trustItems: TrustItem[] = [
  {
    title: "100% Private",
    description: "Your files are never shared or sold.",
    icon: "Lock",
  },
  {
    title: "Secure Processing",
    description: "End-to-end encryption in transit and at rest.",
    icon: "ShieldCheck",
  },
  {
    title: "No Data Retention",
    description: "We don't store your files after processing.",
    icon: "Trash2",
  },
  {
    title: "Enterprise Ready",
    description: "Built for performance and scale.",
    icon: "ServerCog",
  },
];