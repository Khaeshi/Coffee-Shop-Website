import { Card, CardContent } from "../components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  JulianaGarcia  from "../assets/Juliana_Garcia.jpeg";
import ReydenDelaCruz from "../assets/Reyden_Dela_Cruz.jpeg";
import TristanVibal from "../assets/Tristan_Vibal.jpeg";
import JamesCustodio from "../assets/James_Custodio.jpeg";
import VincentYu from "../assets/Vincent_Yu.jpeg";
import React from "react";

const teamMembers = [
  {
    name: "JulianaGarcia",
    role: "Founder & Head Barista",
    bio: "May spontaneously quote balance sheets while steaming milk. She started with a dream, a tiny shop, and an espresso machine, and now she runs the whole damn roast.",
    email: "sarah@gwampitscoffee.com",
    image: JulianaGarcia,
  },
  {
    name: "Tristan Vibal",
    role: "Tech specialist",
    bio: "Sensible, straightforward and easy to work with. Loves basketball and gets things done like cooper flag.",
    email: "michael@gwampitscoffee.com",
    image: TristanVibal,
  },
  {
    name: "Vincent Yu",
    role: "Barista & Marketing Specialist",
    bio: "A poging 19 year old with charismatic personality who can cook and clean and makes you the best matcha every night.",
    email: "emily@gwampitscoffee.com",
    image: VincentYu,
  },
  {
    name: "Reyden Dela Cruz",
    role: "Marketing Specialist",
    bio: "Calm on the outside, overthinking on the inside, yet still getting things done beautifully.",
    email: "james@gwampitscoffee.com",
    image: ReydenDelaCruz,
  },
  {
    name: "James Custodio",
    role: "Content Strategist & Social Media Manager",
    bio: "The one you call when you need things done the right way.",
    email: "aisha@gwampitscoffee.com",
    image: JamesCustodio,
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
                <div className="mb-4 h-[40vh] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[40vh] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
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