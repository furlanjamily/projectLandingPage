import type { CSSProperties } from "react";
import heroBackground from "../../assets/hero_background.mp4";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import Button from "../ui/Button";

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
      className="relative scroll-mt-20 h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full overflow-visible box-border font-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <BackgroundVideo className="absolute inset-0 z-0 h-full w-full min-h-full min-w-full object-cover object-center" />


        <div className="relative z-20 flex h-full min-h-0 w-full items-center justify-start pt-20 pb-6 pl-6 pr-4 sm:pl-8 sm:pr-6 lg:pl-10 lg:pr-12 xl:pl-14 xl:pr-16">
          <div className="flex w-full max-w-[18rem] shrink-0 flex-col justify-center text-left sm:max-w-[min(80vw,430px)] lg:max-w-[min(32vw,400px)] xl:max-w-[min(28vw,460px)]">
            <h2 className="font-display font-black uppercase leading-[0.88] text-[clamp(2.5rem,7vw,4.5rem)] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              <span className="block">Eleve sua</span>
              <span className="block">jornada na</span>
              <span className="block">
                <span className="text-highlight">musculação</span>
              </span>
            </h2>

            <div className="mt-[clamp(1rem,2.5vw,1.75rem)] flex gap-3 sm:gap-4">
              <span
                className="inline-block w-[3px] min-h-[2.4em] shrink-0 self-stretch bg-gradient-to-b from-brand-light to-brand-dark shadow-[0_0_14px_rgba(249,115,22,0.65)]"
                aria-hidden
              />
              <p className="font-display font-bold uppercase tracking-[0.04em] leading-[1.35] text-white/90 text-[clamp(0.95rem,2.2vw,1.25rem)]">
                <span className="block">com a melhor</span>
                <span className="block">
                  experiência no mundo do{" "}
                  <span className="text-highlight">bodybuilder!</span>
                </span>
              </p>
            </div>

            <div className="mt-[clamp(1.5rem,3.5vw,2.5rem)] flex flex-wrap items-center gap-3 sm:gap-4">
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
