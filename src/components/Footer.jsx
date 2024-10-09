import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Logo and description */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-pink-500">Praveen Saloon</h1>
            <p className="text-gray-400 mt-2">
              Look your best, feel your best. We provide top-notch services for
              your hair, nails, and beauty needs.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between mt-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Haircuts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Manicure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pedicure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <a href="https://www.instagram.com/praveensaloon/"> <img
                  src="https://static.vecteezy.com/system/resources/previews/023/986/555/large_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
                  alt="" 
                  className="w-10 rounded-full"
                /></a>
            </div>
            <br />
            <div>
              <a href="https://wa.me/919059839084">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&P=0&h=180"
                  alt="" 
                  className="w-10 rounded-full"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Opening Hours
            </h3>
            <ul>
              <li className="text-gray-400">Mon - Sat: 9:00 AM - 10:00 PM</li>
              <li className="text-gray-400">Tuesday: <span className="text-red-600">closed</span></li>
              <li className="text-gray-400">Sunday: 10:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>
        <hr className="text-white" />
        <h3>Make your call & book your service👇</h3>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="tel:+91 9059839084"
            className="text-blue-500 hover:underline"
          >
            Praveen: 9059839085
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
