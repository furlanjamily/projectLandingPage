import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../constants";

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const Testimonials = () => {
  return (
    <section
      id="avaliacoes"
      className="flex min-h-dvh flex-col justify-center py-16 pb-32 tracking-wide sm:py-20 lg:py-16"
    >
      <h2 className="my-6 px-4 text-center font-heading text-3xl tracking-tight sm:my-10 sm:px-6 sm:text-5xl lg:my-16 lg:text-6xl">
        O que as pessoas estão dizendo?
      </h2>

      <div className="slider-container mx-auto block w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.user} className="px-2 py-2 sm:px-3">
              <div className="glass-main glass-hover flex h-full flex-col items-center rounded-xl p-4 text-center text-sm font-normal sm:p-6 sm:text-base lg:p-8">
                <p className="leading-relaxed text-neutral-200">{testimonial.text}</p>
                <div className="mt-6 flex flex-col items-center gap-2 sm:mt-8 sm:gap-3">
                  <img
                    className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover sm:h-12 sm:w-12"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div className="min-w-0 text-center">
                    <h6 className="truncate text-sm font-semibold sm:text-base">
                      {testimonial.user}
                    </h6>
                    <span className="block truncate text-xs font-normal italic text-neutral-500 sm:text-sm">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
