import axios from "axios";

const CreateEvents = () => {
  // Post event to backend
  const postEvent =async (event) => {
    event.preventDefault();
    // Collect all inputs from form
    const formData = new FormData(event.target)
    // Post data to backend
    const response = await axios.post('https://gomingle-backend.onrender.com/addEvents',formData);
    console.log(response);
  }
  return (
    <>
      <div>
        <div className="p-10 px-5 bg-white mt-20">
          <h2 className="text-2xl font-bold text-center mb-5">
            Create an Event
          </h2>

          <form onSubmit={postEvent} className="max-w-lg mx-auto p-4">
            <div className="mb-8">
              <label
                htmlFor="eventName"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                EVENT NAME
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="description"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                DESCRIPTION
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="location"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                LOCATION
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="date"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                DATE
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="time"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                TIME
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="price"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                PRICE
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            

            <div className="mb-8">
              <label
                htmlFor="image"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >

                UPLOAD EVENT FLYER
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="flex justify-center">
              <button className="bg-[#f1f1f1] w-32 py-3 rounded-xl shadow-lg drop-shadow-lg text-black uppercase font-semibold mt-7">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvents;
