import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between items-center space-y-8 lg:space-y-0">
        
        {/* Left Section: Logo and Copyright */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 lg:space-y-0">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Monal </span>
            <span className="text-black">Resturant</span>
          </h1>
          <p className="mt-2 text-sm md:text-base">© 2024 Monal Resturant Reserved.</p>
        </div>
        

        {/* Right Section: Email Subscription */}
        <div className="flex flex-col items-center lg:items-start text-black space-y-4 lg:space-y-0">
          <p className="font-semibold text-lg text-center lg:text-left">Subscribe to our News letter</p>
          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-md focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-8 lg:mt-0 lg:justify-end">
          <a href="https://www.facebook.com/osamanadeem.osama?mibextid=ZbWKwL" className="hover:text-gray-300">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/osama-nadeem-761915235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-300">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a href="https://github.com/OsamaNadeem55/Monal-Restaurant-Website-Using-Tailwind.git" className="hover:text-gray-300">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/osama_shiekh_80/profilecard/?igsh=MWdrZjB1am9ld2ZudQ==" className="hover:text-gray-300">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;