import React from 'react';
import { features } from '../constants';
import vitalClip from '../assets/vitalClip.mp4';

const FeatureSection = () => {
  return (
    <div className='mt-20 w-full flex flex-col items-center'>
      <div className="mt-20 border-b border-neutral-800 min-h-[800px] w-full flex flex-col items-center">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Saiba Mais
          </span>
          <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
            Sobre
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
              {" "}
              nós
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 w-full justify-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            {features.map((feature, index) => (
              <div key={index} className='w-full sm:w-2/3 lg:w-3/4 flex mb-6'>
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className='mt-1 mb-2 text-xl'>{feature.text}</h5>
                  <p className='text-md p-2 text-neutral-500'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="flex rounded-lg w-2/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={vitalClip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
