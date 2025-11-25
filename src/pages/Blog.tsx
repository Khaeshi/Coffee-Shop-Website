import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Play, Calendar } from "lucide-react";
import frenchFriesBanner from "../assets/AdvertisementBanner.jpeg";
import React from "react";

const videoAds = [
  {
    title: "The Art of Brewing Perfect Coffee",
    description: "Watch our master barista demonstrate the techniques behind creating the perfect cup of coffee, from bean selection to the final pour.",
    thumbnail: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc2NDAxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "November 20, 2024",
    duration: "2:45",
    featured: true,
  },
  {
    title: "New Seasonal Menu Launch",
    description: "Get an exclusive first look at our winter seasonal menu featuring unique flavors and limited-time beverages.",
    thumbnail: "https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzYzOTQ4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "November 15, 2024",
    duration: "1:30",
    featured: false,
  },
  {
    title: "Behind the Scenes at Gwampit's",
    description: "Take a tour of our roastery and meet the team that makes your favorite coffee possible.",
    thumbnail: "https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjM5ODA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "November 10, 2024",
    duration: "3:15",
    featured: true,
  },
  {
    title: "Latte Art Tutorial for Beginners",
    description: "Learn the basics of creating beautiful latte art at home with our step-by-step guide.",
    thumbnail: "https://images.unsplash.com/photo-1619286310410-a95de97b0aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjQwMDkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "November 5, 2024",
    duration: "4:00",
    featured: false,
  },
  {
    title: "Coffee Bean Origins Explained",
    description: "Discover the journey of our coffee beans from farm to cup and learn about different growing regions.",
    thumbnail: "https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTU0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "November 1, 2024",
    duration: "2:30",
    featured: false,
  },
  {
    title: "Customer Favorites Countdown",
    description: "We asked our customers to vote for their favorite drinks. Watch to see which beverages made the top 10!",
    thumbnail: "https://images.unsplash.com/photo-1708572727896-117b5ea25a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGxhdHRlfGVufDF8fHx8MTc2Mzk3NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "October 28, 2024",
    duration: "3:45",
    featured: true,
  },
];

export function Blog() {
  return (
    <div className="bg-gradient-to-b from-[#0f0a05] via-[#1a1410] to-[#0f0a05]">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">Coffee Stories & Videos</h1>
          <p className="text-lg text-[#a89379] max-w-3xl mx-auto">
            Explore our collection of videos showcasing the art of coffee making, 
            new product launches, and behind-the-scenes content from Gwampit's Coffee.
          </p>
        </div>

        {/* Promotional Banner */}
        <div className="mb-12">
          <img 
            src={frenchFriesBanner} 
            alt="French Fries Now Available" 
            className="w-full rounded-lg shadow-[0_0_40px_rgba(212,165,116,0.3)] hover:shadow-[0_0_60px_rgba(212,165,116,0.5)] transition-all duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoAds.map((video, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] rounded-full p-4 shadow-[0_0_30px_rgba(212,165,116,0.6)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-[#0f0a05]" size={32} fill="#0f0a05" />
                    </div>
                  </div>
                  {video.featured && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-[#d4a574] to-[#c49060] text-[#0f0a05] hover:shadow-[0_0_15px_rgba(212,165,116,0.5)] transition-all duration-300">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute bottom-3 right-3 bg-[#0f0a05]/90 border border-[#d4a574]/30 text-[#d4a574] px-2 py-1 rounded text-sm backdrop-blur-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[#d4a574] mb-2 group-hover:text-[#c49060] transition-colors duration-300">{video.title}</h3>
                  <p className="text-[#a89379] mb-3">{video.description}</p>
                  <div className="flex items-center text-sm text-[#c49060]">
                    <Calendar size={16} className="mr-2" />
                    {video.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Embed Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] shadow-lg hover:shadow-[0_0_40px_rgba(212,165,116,0.3)] transition-all duration-500">
            <CardContent className="p-6">
              <h2 className="text-[#d4a574] mb-6 text-center">Featured Video</h2>
              <div className="aspect-video bg-gradient-to-br from-[#2d2419] to-[#1a1410] rounded-lg flex items-center justify-center border border-[#d4a574]/20 hover:border-[#d4a574]/40 transition-all duration-300 group">
                <div className="text-center text-[#d4a574]">
                  <Play size={64} className="mx-auto mb-4 drop-shadow-[0_0_15px_rgba(212,165,116,0.5)] group-hover:scale-110 transition-transform duration-300" />
                  <p>Video player placeholder</p>
                  <p className="text-sm text-[#a89379]">Embed your promotional videos here</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-[#d4a574] mb-2">The Art of Brewing Perfect Coffee</h3>
                <p className="text-[#a89379]">
                  Join our master barista as they walk you through the complete process of brewing 
                  the perfect cup of coffee. From selecting the right beans to mastering the pour, 
                  this comprehensive guide covers everything you need to know.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}