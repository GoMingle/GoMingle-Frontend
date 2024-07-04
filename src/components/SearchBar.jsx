import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
const SearchBar = () => {
  return (
    <div>
         <div className="flex items-center  ring-2 ring-slate-600 bg-white shadow-lg rounded-lg p-2  w-full mb-3 mt-5 ">
                <MagnifyingGlassIcon className="size-6 h-5 w-5 text-gray-500 mr-5  " />
                <input
                    type="text"
                    className="flex-grow bg-transparent  outline-none "
                    placeholder="Search event..." />

            </div>
            
    </div>
  )
}

export default SearchBar