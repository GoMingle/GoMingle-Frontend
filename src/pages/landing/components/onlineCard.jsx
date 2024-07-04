import { onlineFour, onlineOne, onlineThree, onlineTwo } from "../../../assets"

const OnlineCard = () => {
  return (
    <div>
      <div className="mt-40">
        <div >
          <h3 className="font-serif font-bold text-center text-5xl ml-96 mr-80  text-[#C738EF]">Online Events</h3>
        </div>

        <div className="grid grid-cols-2 mt-9">
          <div className="flex">
            <img src={onlineOne} alt="Online One" className="w-60 h-40 rounded-2xl shadow-2xl ml-7" />
            <p className="ml-5 mt-4 text-black font-serif text-lg">Master Images AI to Grow your Brand. <br /> Wed,Jul 10, 3:30PM GMT</p>

          </div>
          <div className="flex">
            <img src={onlineTwo} alt="Online Two" className="w-60 h-40 rounded-2xl shadow-2xl ml-7" />
            <p className="ml-5 mt-4 text-black font-serif text-lg">Six strategies for explosive Business Growth. <br /> Mon,Jul 20, 11:30PM GMT</p>
            </div>
        </div>


        <div className="grid grid-cols-2 mt-9">
          <div className="flex">
            <img src={onlineThree} alt="Online Three" className="w-60 h-40 rounded-2xl shadow-2xl ml-7" />
            <p className="ml-5 mt-4 text-black font-serif text-lg"> Virtual Event: Guy Kawasaki on how to think "Remarkable". <br />Fri,Aug 12, 10:30PAMGMT </p>
            <p></p>
          </div>
          <div className="flex">
            <img src={onlineFour} alt="Online Four" className="w-60 h-40 rounded-2xl shadow-2xl ml-7" />
            <p className="ml-5 mt-4 text-black font-serif text-lg">2024 CR Summit. <br /> wed,Jul 11,8:00PM GMT</p>
            
          </div>
        </div>
      </div>
        
    </div>

  )
}

export default OnlineCard