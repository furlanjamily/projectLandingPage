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
      className="flex min-h-dvh flex-col justify-center py-16 pb-32 sm:py-20 lg:py-16 tracking-wide"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center px-4 sm:px-6 my-6 sm:my-10 lg:my-16">
        O que as pessoas estão dizendo?
      </h2>

      <div className="slider-container block w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.user} className="px-2 sm:px-3 py-2">
              <div className="h-full flex flex-col items-center text-center rounded-lg p-4 sm:p-6 lg:p-8 text-sm sm:text-base border border-neutral-800 font-thin">
                <p className="leading-relaxed">{testimonial.text}</p>
                <div className="flex flex-col mt-6 sm:mt-8 items-center gap-2 sm:gap-3">
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border border-neutral-300 object-cover"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div className="min-w-0 text-center">
                    <h6 className="text-sm sm:text-base font-medium truncate">
                      {testimonial.user}
                    </h6>
                    <span className="block text-xs sm:text-sm font-normal italic text-neutral-500 truncate">
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
