import { CheckCircle2 } from "lucide-react";
import vitalClip from "../../assets/vitalClip.mp4";
import { advantages } from "../../constants";

const Workflow = () => {
  return (
    <section
      id="vantagem"
      className="flex min-h-dvh flex-col justify-center py-16 pb-28 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-8 text-center font-heading text-3xl tracking-tight sm:mb-10 sm:text-5xl lg:mb-12 lg:text-6xl">
          Por que <span className="text-gradient-brand">nos escolher?</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
          <div className="glass-main order-2 w-full overflow-hidden rounded-2xl p-1 lg:order-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full rounded-xl object-cover"
            >
              <source src={vitalClip} type="video/mp4" />
            </video>
          </div>

          <ul className="order-1 flex w-full flex-col gap-3 sm:gap-3.5 lg:order-2 lg:gap-4">
            {advantages.map(({ title, description }) => (
              <li key={title}>
                <div className="glass-main glass-hover flex items-start gap-3 rounded-xl p-3.5 sm:gap-4 sm:p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 p-1.5 text-emerald-400 sm:h-10 sm:w-10 sm:p-2">
                    <CheckCircle2 className="size-4 sm:size-5" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h5 className="mb-1 text-base font-semibold sm:text-lg">{title}</h5>
                    <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
