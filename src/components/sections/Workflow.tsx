import { CheckCircle2 } from "lucide-react";
import vitalClip from "../../assets/vitalClip.mp4";
import { advantages } from "../../constants";

const Workflow = () => {
  return (
    <div
      id="vantagem"
      className="flex min-h-dvh flex-col justify-center py-16 pb-28 lg:py-9"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Por que{" "}
        <span className="text-gradient-brand">nos escolher?</span>
      </h2>

      <div className="flex flex-wrap pt-6 justify-center align-center">
        <div className="w-full  lg:w-1/2 flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="flex rounded-2xl w-full aspect-video object-cover my-6 lg:my-8"
          >
            <source src={vitalClip} type="video/mp4" />
          </video>
        </div>

        <div className="pt-8 w-full lg:w-1/2 lg:pt-12">
          {advantages.map(({ title, description }) => (
            <div key={title} className="flex mb-8 last:mb-0 lg:mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
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
  );
};

export default Workflow;
