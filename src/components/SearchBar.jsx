import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"
const SearchBar = () => {
  return (
    <div>
         <div className="flex items-center ring-2 ring-teal-300 bg-white shadow-lg rounded-lg p-2 w-full max-w-md max-auto  mb-3 mt-5 ">
                <MagnifyingGlassCircleIcon className="size-6 h-5 w-5 text-gray-500 mr-5  " />
                <input
                    type="text"
                    className="flex-grow bg-transparent  outline-none"
                    placeholder="Search here" />

            </div>
            
    </div>
  )
}

export default SearchBar