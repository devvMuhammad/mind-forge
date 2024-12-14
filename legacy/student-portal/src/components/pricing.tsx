import { PlanType, pricingPlans } from "@/config/pricing";
import { Icons } from "@repo/ui/components/icons";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pricing Plans
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Choose the plan that fits your needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingCard({ plan }: { plan: PlanType }) {
  return (
    <div
      className={`bg-gradient-to-r from-[${plan.colors.from}] to-[${plan.colors.to}] p-6 rounded-lg shadow-md`}
    >
      <div
        className={`bg-gradient-to-r ${plan.colors.to} ${plan.colors.from} ${plan.colors.text} px-4 py-2 rounded-t-lg font-bold text-2xl text-center`}
      >
        {plan.title}
      </div>
      <div className="py-6 space-y-4">
        <div className="text-3xl font-bold">{plan.price}</div>
        <div className="grid gap-2">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.included ? (
                <Icons.tick
                  className={`w-6 h-6 p-1 rounded-full bg-green-500 text-white`}
                />
              ) : (
                <Icons.cross className={`w-6 h-6 text-[#ff0000]`} />
              )}
              <span>{feature.feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full bg-black hover:bg-black/80">
          Get Started
        </Button>
      </div>
    </div>
  );
}
