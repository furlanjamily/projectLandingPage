import { Check, X } from "lucide-react";
import { gymPlans, pricingSection } from "../../constants";
import Button from "../ui/Button";

const Pricing = () => {
  return (
    <section
      id="planos"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden py-16 pb-32 lg:py-20"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <header className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl tracking-tight sm:text-5xl lg:text-6xl">
            {pricingSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-base">
            {pricingSection.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {gymPlans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex min-h-full flex-col ${
                plan.isFeatured ? "md:-mt-2 md:mb-2" : ""
              }`}
            >
              {plan.isFeatured && plan.badgeText && (
                <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-brand/30 bg-brand px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_24px_rgba(249,115,22,0.35)]">
                  {plan.badgeText}
                </span>
              )}

              <div
                className={`glass-main glass-hover flex min-h-full flex-col rounded-2xl p-5 sm:p-6 ${
                  plan.isFeatured
                    ? "border-brand/40 pt-8 shadow-[0_0_50px_rgba(249,115,22,0.12)]"
                    : ""
                }`}
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6 flex items-end gap-1">
                  <span className="font-heading text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-neutral-500">{plan.period}</span>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          aria-hidden
                        />
                      ) : (
                        <X
                          className="mt-0.5 size-4 shrink-0 text-zinc-600"
                          aria-hidden
                        />
                      )}
                      <span
                        className={`text-sm leading-snug ${
                          feature.included
                            ? "text-neutral-300"
                            : "text-zinc-600 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contato"
                  variant={plan.isFeatured ? "primary" : "glass"}
                  fullWidth
                  size="md"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
