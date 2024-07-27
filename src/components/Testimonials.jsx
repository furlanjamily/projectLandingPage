import { testimonials } from "../constants";
import testimonialImage from "../assets/testimonialImage.jpg";
import testimonialImage2 from "../assets/testimonialImage2.jpg";


const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        O que as pessoas estão dizendo?
      </h2>
      <div className="flex flex-col">
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-x-neutral-300"
                    src={testimonial.image}
                    alt={testimonial.user} />
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2 p-12">
        <img src={testimonialImage} className="rounded-md h-[360px]" alt="testimonial Image" />
        </div>
        <div className="pt-12 w-full  lg:w-1/2">
        <img src={testimonialImage2} className="rounded-md h-[360px]" alt="testimonial Image" />
        </div>
      </div>


    </div>



  );
}

export default Testimonials;
