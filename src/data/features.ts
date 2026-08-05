export interface Feature {
  title: string;
  description: string;
  icon: "Users2" | "ShieldCheck" | "Wand2" | "Download";
}

export const features: Feature[] = [
  {
    title: "Remove Duplicates",
    description:
      "Detect and remove duplicate rows instantly to keep your data accurate.",
    icon: "Users2",
  },
  {
    title: "Validate Columns",
    description: "Ensure required columns exist and data types are correct.",
    icon: "ShieldCheck",
  },
  {
    title: "Fix Formats",
    description:
      "Auto-fix common formatting issues like dates, phones, emails, and more.",
    icon: "Wand2",
  },
  {
    title: "Export Clean Data",
    description:
      "Download your cleansed data in CSV or Excel format.",
    icon: "Download",
  },
];
