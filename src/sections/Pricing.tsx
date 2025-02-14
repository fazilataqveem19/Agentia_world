import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "@/components/Button";

export const pricingTiers = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    buttonVariant: "secondary",
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    buttonVariant: "secondary",
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    buttonText: "Contact Us",
    buttonVariant: "primary",
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
   title: string;
   description: string;
   price: string | number | null;
   buttonText: string;
   buttonVariant? : ButtonProps["variant"];
   features: string [];
   color: string;
   className: string;
} []; 

export const Pricing = () => {
  return (
    <section id="pricing" className="mt-[-30px]">
      <div className="container mx-auto px-4 lg:px-0 xl:px-16">
        <div className="border-l border-r border-t border-[var(--color-border)] relative">
          <>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faPlus} className="size-3 text-gray-200" />
            </div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faPlus} className="size-3 text-gray-200" />
            </div>
          </>
          <div className="container py-24 md:py-40 md:px-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center text-gray-200">Flexible plans for every need</h2>
            <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start">
              {pricingTiers.map((tier) => (
                <div key={tier.title} className={twMerge("border border-[var(--color-border)] rounded-3xl px-6 py-12 max-w-sm mx-auto flex-1",
                tier.className
                )}
                >
                  <h3
                  className={twMerge(
                    "font-semibold text-4xl",
                    tier.color === "violet" && "text-violet-400",
                    tier.color === "amber" && "text-amber-300",
                    tier.color === "teal" && "text-teal-300"
                    )}
                    >
                    {tier.title}
                    </h3>
                  <p className="mt-4 text-gray-40">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === "number" && (
                    <span className="text-2xl font-semibold text-gray-200 align-top">
                      $
                    </span>
                     )}
                    <span className="text-7xl font-semibold text-gray-200">
  {tier.price ? tier.price : <>&nbsp;</>}
</span>

                    </div>
                  <Button className="mt-8" block variant={tier.buttonVariant}>{tier.buttonText}</Button>
                  <ul className="flex flex-col gap-4 mt-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="border-t border-[var(--color-border)] pt-4 flex gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-6 text-violet-400 flex-shrink-0"/>
                        <span className="font-medium">{feature}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

