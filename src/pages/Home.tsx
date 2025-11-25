import { Link } from "react-router";
import { Coffee, Target, Eye, Award, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/Favicon.png";
import greenDrink from "figma:asset/cc432416dcbdcb774559bf4207f805ff0bc27f4a.png";
import frenchFriesBanner from "../assets/AdvertisementBanner.jpeg";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import React from "react";

export function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0f0a05] via-[#1a1410] to-[#0f0a05]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img src={logo} alt="Gwampit's Coffee" className="h-32 w-32 mb-6 drop-shadow-[0_0_30px_rgba(212,165,116,0.4)] rounded-full hover:drop-shadow-[0_0_50px_rgba(212,165,116,0.6)] transition-all duration-500 hover:rotate-6" />
            <h1 className="mb-6 text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">Welcome to Gwampit's Coffee</h1>
            <h2 className="mb-6 text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">Built for the Rush. Powered by Our Best.</h2>
            <p className="text-lg mb-8 text-[#a89379]">
              Your destination for premium coffee and delightful beverages. 
              Established in 2024, we bring you the finest coffee experience with every cup.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button className="bg-gradient-to-r from-[#d4a574] to-[#c49060] hover:from-[#c49060] hover:to-[#d4a574] text-[#0f0a05] shadow-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] transition-all duration-300 hover:scale-105">
                  <Coffee className="mr-2" size={20} />
                  View Menu
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-[#0f0a05] shadow-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] transition-all duration-300 hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={greenDrink} alt="Signature Drink" className="max-w-md w-full rounded-lg shadow-[0_0_50px_rgba(212,165,116,0.3)] hover:shadow-[0_0_80px_rgba(212,165,116,0.5)] transition-all duration-500 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4 py-8">
        <img 
          src={frenchFriesBanner} 
          alt="French Fries Now Available" 
          className="w-full rounded-lg shadow-[0_0_40px_rgba(212,165,116,0.3)] hover:shadow-[0_0_60px_rgba(212,165,116,0.5)] transition-all duration-500 hover:scale-[1.02]"
        />
      </section>

      {/* About Business */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="mb-6 text-[#d4a574]">About Our Business</h2>
          <p className="text-lg text-[#a89379]">
            Gwampit's Coffee is more than just a coffee shop – it's a community hub where 
            quality meets comfort. We source the finest beans, craft each beverage with care, 
            and create an atmosphere where everyone feels at home.
          </p>
        </div>

        {/* Vision, Mission, Objectives */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] shadow-lg hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0_20px_rgba(212,165,116,0.4)] hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] transition-all duration-300">
                <Eye className="text-[#0f0a05]" size={32} />
              </div>
              <h3 className="text-center mb-4 text-[#d4a574]">Our Vision</h3>
              <p className="text-center text-[#a89379]">
              To be the most cherished community coffee house, recognized for setting the standard in specialty coffee excellence,
              ethical sourcing, and creating unforgettable moments of connection.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] shadow-lg hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0_20px_rgba(212,165,116,0.4)] hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] transition-all duration-300">
                <Target className="text-[#0f0a05]" size={32} />
              </div>
              <h3 className="text-center mb-4 text-[#d4a574]">Our Mission</h3>
              <p className="text-center text-[#a89379]">
              Gwampits Coffee exists to expertly source, roast, and serve the world's finest coffee with a commitment to craft, sustainability, and warmth. We strive to be the authentic heart of the neighborhood,
              a welcoming space where every cup, conversation, and connection enriches the day.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] shadow-lg hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0_20px_rgba(212,165,116,0.4)] hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] transition-all duration-300">
                <Award className="text-[#0f0a05]" size={32} />
              </div>
              <h3 className="text-center mb-4 text-[#d4a574]">Our Objectives</h3>
              <p className="text-center text-[#a89379]">
                Maintain the highest quality standards, expand our menu offerings, 
                and build lasting relationships with our valued customers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Find Us Section with Static Map */}
        <div className="mb-16">
          <h2 className="text-center mb-8 text-[#d4a574]">Find Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 rounded-lg p-4 shadow-lg hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.509526739025!2d121.1119849119961!3d14.281801984741959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d94fdd0c5c21%3A0xc60e35238086cb4c!2sgwampits%20coffee!5e0!3m2!1sen!2sph!4v1764066537051!5m2!1sen!2sph"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gwampit's Coffee Location"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-[#a89379]">
              Visit us at our location! Click the map for directions.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="mb-6 text-[#d4a574]">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61556107491462"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#d4a574] to-[#c49060] text-[#0f0a05] p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,165,116,0.4)] hover:shadow-[0_0_30px_rgba(212,165,116,0.6)]"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://twitter.com/gwampitscoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#d4a574] to-[#c49060] text-[#0f0a05] p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,165,116,0.4)] hover:shadow-[0_0_30px_rgba(212,165,116,0.6)]"
            >
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
