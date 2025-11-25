import { Link, useLocation } from "react-router";
import logo from "../assets/Favicon.png";
import { Menu, X } from "lucide-react";
import { React, useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact Us" },
    { path: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-gradient-to-r from-[#1a1410] via-[#2d2419] to-[#1a1410] border-b border-[#d4a574]/20 sticky top-0 z-50 backdrop-blur-lg shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center transition-transform hover:scale-110 duration-300">
            <img src={logo} alt="Gwampit's Coffee" className="h-16 w-16 rounded-full drop-shadow-[0_0_20px_rgba(212,165,116,0.5)]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? "text-[#d4a574]"
                    : "text-[#a89379] hover:text-[#d4a574]"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4a574] transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#d4a574] hover:text-[#c49060] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-all duration-300 hover:translate-x-2 ${
                  isActive(link.path)
                    ? "text-[#d4a574]"
                    : "text-[#a89379] hover:text-[#d4a574]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}