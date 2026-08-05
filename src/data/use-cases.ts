export interface UseCase {
  title: string;
  description: string;
  icon: "Users" | "Cog" | "Landmark" | "ShoppingCart" | "Contact2";
}

export const useCases: UseCase[] = [
  {
    title: "Sales & Marketing",
    description: "Clean leads and import to your CRM.",
    icon: "Users",
  },
  {
    title: "Operations",
    description: "Standardize and clean operational data.",
    icon: "Cog",
  },
  {
    title: "Finance",
    description: "Fix formats and reduce import errors.",
    icon: "Landmark",
  },
  {
    title: "E-commerce",
    description: "Prepare product and order data for platforms.",
    icon: "ShoppingCart",
  },
  {
    title: "HR",
    description: "Clean employee and payroll data with ease.",
    icon: "Contact2",
  },
];