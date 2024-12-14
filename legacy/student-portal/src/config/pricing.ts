// pricingConfig.js
export type PlanType = {
  title: string;
  price: string;
  features: { feature: string; included: boolean }[];
  colors: { from: string; to: string; text: string };
};
export const pricingPlans: PlanType[] = [
  {
    title: "Bronze Plan",
    price: "500 PKR",
    features: [
      { feature: "2 Tests", included: true },
      { feature: "No Solutions", included: false },
      { feature: "No MCQ Explanations", included: false },
    ],
    colors: {
      from: "#f0d9d9",
      to: "#d9b8b8",
      text: "bg-[#333]",
    },
  },
  {
    title: "Silver Plan",
    price: "1,500 PKR",
    features: [
      { feature: "3 Tests", included: true },
      { feature: "Solutions", included: true },
      { feature: "No MCQ Explanations", included: false },
    ],
    colors: {
      from: "#f0f0f0",
      to: "#d0d0d0",
      text: "bg-[#333]",
    },
  },
  {
    title: "Gold Plan",
    price: "2,500 PKR",
    features: [
      { feature: "5 Tests", included: true },
      { feature: "Solutions", included: true },
      { feature: "MCQ Explanations", included: true },
    ],
    colors: {
      from: "#f4e6d9",
      to: "#e8d1c0",
      text: "bg-[#333]",
    },
  },
];
