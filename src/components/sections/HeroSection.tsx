import type { CSSProperties } from "react";
import heroBackground from "../../assets/hero_background.mp4";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import Button from "../ui/Button";

const ATHLETE_MASK_STYLE: CSSProperties = {
  WebkitMaskImage:
    "radial-gradient(ellipse 52% 88% at 58% 42%, #000 18%, transparent 74%)",
  maskImage:
    "radial-gradient(ellipse 52% 88% at 58% 42%, #000 18%, transparent 74%)",
};

interface BackgroundVideoProps {
  className?: string;
  style?: CSSProperties;
}

const BackgroundVideo = ({ className, style }: BackgroundVideoProps) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className={className}
    style={style}
    aria-hidden
  >
    <source src={heroBackground} type="video/mp4" />
  </video>
);

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full overflow-visible box-border font-['Montserrat',sans-serif]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <BackgroundVideo className="absolute inset-0 z-0 h-full w-full min-h-full min-w-full object-cover object-center" />

        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/35 to-[#E5E2DD]/90 sm:from-black/70 sm:via-black/20 sm:to-[#E5E2DD]/85"
          aria-hidden
        />

        <BackgroundVideo
          className="pointer-events-none absolute inset-0 z-[8] hidden h-full w-full min-h-full min-w-full object-cover object-center lg:block"
          style={ATHLETE_MASK_STYLE}
        />

        <div className="relative z-20 flex h-full min-h-0 w-full items-start justify-end pt-24 pb-3 pl-4 pr-6 sm:pt-28 sm:pb-4 sm:pl-6 sm:pr-8 lg:pt-32 lg:pb-6 lg:pl-12 lg:pr-10 xl:pl-16 xl:pr-14">
          <div className="flex w-fit max-w-[calc(100%-0.5rem)] !leading-4 shrink-0 flex-col justify-center text-left sm:max-w-[min(88vw,440px)] lg:max-w-[min(28vw,420px)] xl:max-w-[min(26vw,460px)]">
            <h2 className="hero-title text-[clamp(2.15rem,6.8vw,4.75rem)] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              <span className="block">Eleve sua</span>
              <span className="block">jornada na</span>
              <span className="block">
                <span className="text-highlight">musculação</span>
              </span>
            </h2>

            <div className="mt-5 flex gap-3 sm:mt-6 sm:gap-4">
              <span className="hero-accent-bar" aria-hidden />
              <p className="hero-subtitle text-[clamp(0.72rem,2.1vw,1.2rem)]">
                <span className="block">com a melhor</span>
                <span className="block">
                  experiência no mundo do{" "}
                  <span className="text-highlight">bodybuilder!</span>
                </span>
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Button href="#contato" variant="primary" className="gap-2">
                <WhatsAppIcon />
                Entre em Contato
              </Button>
              <Button href="#sobre" variant="secondary">
                Sobre Nós
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
