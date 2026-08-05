export interface Step {
  step: number;
  title: string;
  description: string;
  icon: "Upload" | "Sparkles" | "Eye" | "FileDown";
}

export const steps: Step[] = [
  {
    step: 1,
    title: "Upload CSV",
    description: "Upload your file in seconds.",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Clean Data",
    description: "We detect issues and clean your data.",
    icon: "Sparkles",
  },
  {
    step: 3,
    title: "Review",
    description: "Preview the cleaned results.",
    icon: "Eye",
  },
  {
    step: 4,
    title: "Export",
    description: "Download clean data and use anywhere.",
    icon: "FileDown",
  },
];