import { Link } from "react-router-dom"
import K from "../constants/data"
import SearchBar from "./searchBar"

const Navbar = () => {
    return (
        <div className="flex justify-between px-40 py-4 fixed w-full left-0 top-0 bg-white items-center ">
            <span className="font-extrabold text-2xl ">GoMingle</span>
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