import { Link } from "react-router-dom"
import K from "../constants/data"
import SearchBar from "./SearchBar"


const Navbar = () => {
    return (
        <div className="flex justify-between px-40 py-4 fixed w-full left-0 top-0 bg-white items-center z-20 ">
            <span className="font-extrabold text-2xl text-[#C738EF] ">GoMingle</span>
            <div className="flex gap-x-16">
                {
                    K.NAVLINKS.map(
                        (item, index) => {
                            return <Link key={index} to={item.path}>{item.name}</Link>
                        }
                    )
                }
            </div>
            <SearchBar/>
        </div>
    )
}

export default Navbar