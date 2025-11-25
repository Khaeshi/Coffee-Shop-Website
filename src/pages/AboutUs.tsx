import { Card, CardContent } from "../components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import React from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Head Barista",
    bio: "With over 15 years of coffee expertise, Sarah founded Gwampit's Coffee to share her passion for exceptional brews. She personally sources our beans and trains our team.",
    email: "sarah@gwampitscoffee.com",
    image: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MDI2MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    bio: "Michael ensures everything runs smoothly at Gwampit's. His attention to detail and customer service excellence make every visit memorable.",
    email: "michael@gwampitscoffee.com",
    image: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc2NDAxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Barista",
    bio: "Emily is a latte art champion and beverage innovator. She creates our seasonal specials and trains new baristas in the art of coffee making.",
    email: "emily@gwampitscoffee.com",
    image: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MDI2MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "James Thompson",
    role: "Pastry Chef",
    bio: "James brings his culinary expertise to our food menu, creating delicious pastries and snacks that perfectly complement our beverages.",
    email: "james@gwampitscoffee.com",
    image: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc2NDAxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Aisha Patel",
    role: "Marketing Director",
    bio: "Aisha connects our brand with the community through creative campaigns and events. She's the voice behind our social media presence.",
    email: "aisha@gwampitscoffee.com",
    image: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MDI2MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "David Kim",
    role: "Sustainability Coordinator",
    bio: "David ensures our coffee shop operates sustainably, from sourcing eco-friendly materials to implementing waste reduction programs.",
    email: "david@gwampitscoffee.com",
    image: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc2NDAxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-[#0f0a05] via-[#1a1410] to-[#0f0a05]">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">Meet Our Team</h1>
          <p className="text-lg text-[#a89379] max-w-3xl mx-auto">
            Our passionate team is dedicated to bringing you the best coffee experience. 
            Each member brings unique skills and expertise to make Gwampit's Coffee special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#d4a574] mb-2 group-hover:text-[#c49060] transition-colors duration-300">{member.name}</h3>
                <p className="text-[#c49060] mb-4">{member.role}</p>
                <p className="text-[#a89379] mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#d4a574] hover:text-[#c49060] transition-all duration-300 hover:scale-125"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-[#d4a574] hover:text-[#c49060] transition-all duration-300 hover:scale-125"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}