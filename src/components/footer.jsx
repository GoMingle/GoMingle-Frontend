import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#C738EF] text-white py-20 mt-60">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="/" className="text-lg font-bold">GoMingle</a>
        </div>
        <div className="mb-4">
          
          <Link to="" className="text-sm text-gray-400 hover:text-white mx-2">Home</Link>
          <Link to="/aboutus" className="text-sm text-gray-400 hover:text-white mx-2">About Us</Link>
          <Link to="/events" className="text-sm text-gray-400 hover:text-white mx-2">Events</Link>
          <Link to="/createevents" className="text-sm text-gray-400 hover:text-white mx-2">Create Events</Link>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GoMingle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
