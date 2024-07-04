
import { landingEleven, landingFive, landingNine, landingSeven, landingSix, landingTen } from "../../../assets"



const EventCard = () => {
  return (

    <div>
      <div className="mt-40">
        <h3 className="font-serif font-semibold text-center text-5xl ml-96 mr-80  text-[#C738EF]"> Events</h3>
      </div>
  <div className="bg-white p-2  pb-14 rounded-xl m-10 mt-10">
  <div className=" grid grid-cols-5   items-center  gap-4   ">
        <div>
        <img src={landingFive} alt="Landing Five" className="rounded-lg shadow-lg "  />
        <h3 className="font-sans font-semibold text-xl text-black">Food & Drink</h3>
        </div>
        <div>
        <img src={landingSix} alt="Landing Six" className="rounded-lg shadow-lg" />
        <h3 className="font-sans font-semibold text-xl text-black">Music</h3>
        </div>
        <div>
        <img src={landingSeven} alt="Landing Seven" className="rounded-lg shadow-lg" />
        <h3 className="font-sans font-semibold text-xl text-black">Wedding</h3>
        </div>
        <div>
        <img src={landingNine} alt="Landing Nine" className="rounded-lg shadow-lg" />
        <h3 className="font-sans font-semibold text-xl text-black">Nightlife</h3>
        </div>
        <div>
        <img src={landingTen} alt="Landing Ten" className="rounded-lg shadow-lg " />
        <h3 className="font-sans font-semibold text-xl text-black">Business</h3>
        </div>
        <button className="bg-[#C738EF]  w-32 py-3 place- rounded-xl shadow-lg drop-shadow-lg text-white
        uppercase font-semibold mt-7 ml-[540px]">View More</button>

      </div>
      </div>
  

      <div className="flex ml-7  ">
        <div>
          <img src={landingEleven} alt="Landing Eleven"  />
        </div>

        <div className=" w-1/2 bg-[#C738EF] place-content-center   ">
          <div className="  flex flex-col  ">
            <div className="flex flex-col  ">
              <span className="font-thin ml-[155px] text-2xl text-white text-left">Upcoming event</span>
              <span className="font-bold pt-4 ml-24 text-4xl ">Above & Beyond #LiveLoveLaugh</span>
            </div>
            <button className="bg-white  w-24 py-2  rounded-xl shadow-lg drop-shadow-lg text-blackuppercase font-semibold ml-[180px] mt-6">Discover</button>
          </div>

        </div>
      </div>



    </div>
  )
}

export default EventCard