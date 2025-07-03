import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Contact Us Section */}
        <div className="md:w-1/2">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {/* Phone */}
            <li className="flex items-center">
              <Phone className="mr-2 w-5 h-5" />
              <a
                href="tel:+2348109979822"
                className="hover:underline"
              >
                +2348103422336
              </a>
            </li>
            {/* Location */}
            <li className="flex items-center">
              <MapPin className="mr-2 w-5 h-5" />
              <span>Yaba, Lagos, Nigeria</span>
            </li>
            {/* WhatsApp */}
            <li className="flex items-center">
              <MessageCircle className="mr-2 w-5 h-5" />
              <a
                href="https://wa.me/message/UGQOXXVYW3QCG1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
            {/* Instagram */}
            <li className="flex items-center">
              <Instagram className="mr-2 w-5 h-5" />
              <a
                href="https://www.instagram.com/shes_essentials?igsh=Nms4MHg5Nzkyb21w"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="md:w-1/4">
          <h3 className="text-base sm:text-lg font-semibold mb-4">About</h3>
          <ul className="text-sm sm:text-base space-y-2">
            <li>
              <Link
                to="/about-us"
                className="hover:underline"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} She's Essentials. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
