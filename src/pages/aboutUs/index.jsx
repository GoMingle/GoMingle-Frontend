import React from 'react';
import { aboutUsOne, aboutUsTwo } from '../../assets';


const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <img src={aboutUsOne} alt="About Us One" className="object-cover w-full h-full brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-semibold">ABOUT US</h1>
        </div>
      </div>
      <div>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-[#C738EF] font-semibold tracking-wide uppercase">About Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Your Event, Our Expertise
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We specialize in creating unforgettable events. From corporate conferences to private parties, we handle every detail to ensure your event is a success.
              </p>
            </div>

            <div className="mt-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Our Mission
                  </h3>
                  <p className="mt-3 max-w-3xl text-lg text-gray-500">
                    Our mission is to provide exceptional event planning and management services, ensuring that every event is executed flawlessly and leaves a lasting impression on your guests.
                  </p>

                  <div className="mt-8">
                    <div className="flex">
                       <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-[#C738EF]">Comprehensive Planning</h4>
                        <p className="mt-2 text-base text-gray-500">
                          We cover every aspect of event planning, from venue selection and vendor coordination to on-site management and post-event follow-up.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex">
                       <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-[#C738EF]">Creative Design</h4>
                        <p className="mt-2 text-base text-gray-500">
                          Our team of creative designers will bring your vision to life with innovative concepts and breathtaking designs that captivate your audience.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex">
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-[#C738EF]">Experienced Team</h4>
                        <p className="mt-2 text-base text-gray-500">
                          With years of experience in the industry, our team is equipped with the knowledge and expertise to handle events of all sizes and complexities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 lg:mt-0">
                  <img className="object-cover w-full h-full rounded-lg shadow-lg" src={aboutUsTwo} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;