import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import React from 'react';
import logo from "../assets/Favicon.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1410] to-[#0f0a05] text-[#f5e6d3] border-t border-[#d4a574]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <img src={logo} alt="Gwampit's Coffee" className="h-20 w-20 mb-4 bg-[#2d2419] rounded-full p-2 shadow-[0_0_30px_rgba(212,165,116,0.3)] group-hover:shadow-[0_0_40px_rgba(212,165,116,0.5)] transition-all duration-300" />
            <h2>Built for the Rush. Powered by Our Best.</h2>
            <p className="text-[#a89379]">
              Brewing excellence since 2025. Experience the finest coffee crafted with passion and dedication.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[#d4a574]">Contact Info</h3>
            <div className="space-y-2 text-[#a89379]">
              <div className="flex items-center gap-2 hover:text-[#d4a574] transition-colors duration-300 hover:translate-x-1">
                <MapPin size={18} />
                <span>1849, Brgy. Dita, City of Sta. Rosa, Laguna, Philippines</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#d4a574] transition-colors duration-300 hover:translate-x-1">
                <Phone size={18} />
                <span>(+63) 926-036-5020</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#d4a574] transition-colors duration-300 hover:translate-x-1">
                <Mail size={18} />
                <span>gwampitsco@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[#d4a574]">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556107491462"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d2419] p-3 rounded-full hover:bg-[#d4a574] hover:text-[#0f0a05] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/search?q=%40gwampits.coffee&t=1764065544711"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d2419] p-3 rounded-full hover:bg-[#d4a574] hover:text-[#0f0a05] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] hover:scale-110"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4a574]/20 mt-8 pt-8 text-center text-[#a89379]">
          <p>&copy; 2025 Gwampit's Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}