import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../../constants";
import Button from "../ui/Button";

const Pricing = () => {
  return (
    <div id="planos" className="mt-20 scroll-mt-20 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Planos disponíveis
      </h2>

      <div className="flex flex-wrap h-max">
        {pricingOptions.map((option) => (
          <div key={option.title} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between min-h-full p-4 sm:p-6 border border-neutral-700 rounded-xl text-sm">
              <p className="text-2xl mb-3">
                {option.title}
                {option.isPopular && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-sm ml-2">
                    (Popular)
                  </span>
                )}
              </p>
              <p className="mb-4">
                <span className="text-3xl mr-1">{option.price}</span>
                <span className="text-neutral-400 text-sm tracking-tight">
                  /Mês
                </span>
              </p>
              <ul>
                {option.features.map((feature) => (
                  <li key={feature} className="mt-3 flex items-start gap-2">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="#" variant="outline" className="mt-8">
                Assinar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
