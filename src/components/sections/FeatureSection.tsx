import { features } from "../../constants";
import sectionImage from "../../assets/image_section.png";

const FeatureSection = () => {
  return (
    <div id="sobre" className="mt-20 w-full">
      <div className="mt-20 border-b border-neutral-800 min-h-[800px] w-full px-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-10 lg:flex-row lg:gap-16 lg:py-20">
          <div className="flex w-full justify-center lg:w-1/2">
            <img
              src={sectionImage}
              alt="Academia VitalFit"
              className="w-full max-w-lg object-cover sm:max-w-xl lg:max-w-2xl"
            />
          </div>

          <div className="flex w-full flex-col items-start justify-center text-left lg:w-1/2">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
              Saiba Mais
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-8 tracking-wide">
              Sobre
              <span className="text-gradient-brand">
                {" "}
                nós
              </span>
            </h2>

            <div className="mt-8 lg:mt-10 w-full max-w-xl">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex mb-6 last:mb-0">
                  <div className="flex shrink-0 mr-4 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    <Icon />
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{title}</h5>
                    <p className="text-md text-neutral-500">{description}</p>
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
