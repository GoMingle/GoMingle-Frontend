import React from 'react';
import { landingEleven, landingFive, landingNine, landingSeven, landingSix, landingTen } from "../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";



const EventCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-40">
        <h3 className="font-serif font-semibold text-center text-5xl text-[#C738EF]">Events</h3>
      </div>
      <div className="bg-white p-2 pb-14 rounded-xl m-10 mt-10">
        <Swiper 
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-1/2"
        >
          <SwiperSlide>
            
              <img src={landingFive} alt="Landing Five" className="rounded-xl shadow-lg" />
               <h3 className="font-sans font-semibold text-xl text-black">Party</h3>
              
            
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={landingSix} alt="Landing Six" className="rounded-xl shadow-lg" />
              <h3 className="font-sans font-semibold text-xl text-black">Concert</h3>
            
          </SwiperSlide>
          <SwiperSlide>
           
              <img src={landingSeven} alt="Landing Seven" className="rounded-xl shadow-lg" />
              <h3 className="font-sans font-semibold text-xl text-black">Wedding</h3>
            
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={landingNine} alt="Landing Nine" className="rounded-xl shadow-lg" />
              <h3 className="font-sans font-semibold text-xl text-black">Nightlife</h3>
            
          </SwiperSlide>
          <SwiperSlide>
        
              <img src={landingTen} alt="Landing Ten" className="rounded-xl shadow-lg" />
              <h3 className="font-sans font-semibold text-xl text-black">Business</h3>
            
          </SwiperSlide>
        </Swiper>
      
      </div>

      <div className="flex ml-0">
        <div>
          <img src={landingEleven} alt="Landing Eleven" />
        </div>
        <div className="w-1/2 bg-[#C738EF] flex flex-col justify-center items-center">
          
          <div className="flex flex-col items-center">
            <span className="font-thin text-2xl text-white">Upcoming event</span>
            <span className="font-bold pt-4 text-4xl text-center">Above & Beyond #LiveLoveLaugh</span>
            <button className="bg-white w-24 py-2 rounded-xl shadow-lg text-black uppercase font-semibold mt-6">Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;