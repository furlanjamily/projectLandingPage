import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import HeroImage from "../assets/heroImage.png";


const HeroSection = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col items-center mt-6 lg:mt-20 bg w-full h-full">
        <div className="flex flex-1">
          <div className="">
            <h1 className="flex flex-col text-4xl font-extrabold sm:text-6xl lg:text-7xl text-center tracking-wide">
              VITAL FIT
              <span className="text-3xl font-medium bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                feito especialmente para você
              </span>
            </h1>
            <p className="flex mt-4 text-lg text-center text-neutral-500 max-w-4xl">
              Eleve a sua jornada na musculção com a melhor experiência no mundo do bodybuilder!
            </p>
            <div className="flex justify-center items-center my-16 gap-4 ">
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
              >
                Sobre nós
              </a>
              <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Entre em contato
              </a>
            </div>
          </div>
          <div>
            <img className="flex flex-col w-[40vw] -mt-9" src={HeroImage} alt="" />

          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center mt-6 lg:mt-20 w-full h-full">
        <div className="flex flex-1 flex-col items-center">
          <h1 className="flex flex-col text-3xl font-extrabold sm:text-5xl lg:text-6xl text-center tracking-wide">
            VITAL FIT
            <span className="text-2xl font-medium bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              feito especialmente para você
            </span>
          </h1>
          <div className="w-full flex justify-center items-center mt-6">
            <img className="w-full max-w-xs sm:max-w-sm" src={HeroImage} alt="Hero" />
          </div>
          <p className="mt-4 text-base sm:text-lg text-center text-neutral-500 max-w-md sm:max-w-2xl">
            Eleve a sua jornada na musculação com a melhor experiência no mundo do bodybuilder!
          </p>
          <div className="flex justify-center items-center my-8 sm:my-16 gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 sm:py-3 px-3 sm:px-4 mx-2 sm:mx-3 rounded-md"
            >
              Sobre nós
            </a>
            <a href="#" className="py-2 sm:py-3 px-3 sm:px-4 mx-2 sm:mx-3 rounded-md border">
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </div>


  )
};

export default HeroSection;
