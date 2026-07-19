import { features } from "../../constants";
import sectionImage from "../../assets/image_section.png";

const FeatureSection = () => {
  return (
    <div
      id="sobre"
      className="flex min-h-dvh w-full flex-col justify-center border-b border-neutral-800/60 px-4 py-16 pb-28 sm:px-8 lg:py-20"
    >
      <div className="w-full">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-10 lg:flex-row lg:gap-16 lg:py-20">
          <div className="order-2 flex w-full justify-center lg:order-1 lg:w-1/2">
            <img
              src={sectionImage}
              alt="Academia VitalFit"
              className="w-full max-w-lg object-cover sm:max-w-xl lg:max-w-2xl"
            />
          </div>

          <div className="order-1 flex w-full flex-col items-start justify-center text-left lg:order-2 lg:w-1/2">
            <span className="glass-main rounded-full px-3 py-1 text-sm font-medium uppercase tracking-wide text-brand">
              Saiba Mais
            </span>
            <h2 className="mt-6 font-heading text-3xl tracking-tight sm:text-5xl lg:mt-8 lg:text-6xl">
              Sobre
              <span className="text-gradient-brand"> nós</span>
            </h2>

            <div className="mt-8 w-full max-w-xl lg:mt-10">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="glass-main glass-hover mb-4 flex rounded-xl p-4 last:mb-0 sm:p-5"
                >
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 p-2 text-brand">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h5 className="mb-2 mt-0.5 text-lg font-semibold">{title}</h5>
                    <p className="text-sm text-neutral-400 sm:text-base">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
