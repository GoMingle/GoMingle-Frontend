const Footer = () => {
  return (
    <footer className="bg-[#C738EF] text-white py-8 mt-80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Event Management App</h3>
          <p className="text-black">Your one-stop solution for managing <br />all your events seamlessly and efficiently.</p>
        </div>
        <div className="align-middle">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
          <li className="mb-2"><a href="#home" className="text-black hover:text-white">Home</a></li>
            <li className="mb-2"><a href="#about" className="text-black hover:text-white">About Us</a></li>
            <li className="mb-2"><a href="#events" className="text-black hover:text-white">Events</a></li>
            
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-black">123 Event Street, Suite 100</p>
          <p className="text-black">Event City, EC 12345</p>
          <p className="text-black">Email: info@eventmanagement.com</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-black hover:text-black">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-black hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black hover:text-black">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-black hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-black">
        &copy; 2024 Event Management App. All rights reserved.
      </div>
    </div>
  </footer>
);
};
 

export default Footer