import { testimonials } from "../constants";
import testimonialImage from "../assets/testimonialImage.jpg";
import testimonialImage2 from "../assets/testimonialImage2.jpg";


const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        O que as pessoas estão dizendo?
      </h2>

      {/* <div className="w-full flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2 p-12">
        <img src={testimonialImage} className="rounded-md h-[360px]" alt="testimonial Image" />
        </div>
        <div className="pt-12 w-full  lg:w-1/2">
        <img src={testimonialImage2} className="rounded-md h-[360px]" alt="testimonial Image" />
        </div>
      </div> */}

    </div>


  );
}

export default Testimonials;
