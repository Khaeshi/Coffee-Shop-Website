import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import greenDrink from "../assets/GreenDrink.png";
import redDrink from "../assets/RedDrink.jpeg"
import blueDrink from "../assets/BlueDrink.jpeg"
import coffeeDrink from "../assets/coffee.jpeg"
import { Coffee, Droplet } from "lucide-react";
import React from "react";

const coffeeProducts = [
  {
    name: "Classic Espresso",
    description: "Rich, bold espresso shot made from premium Arabica beans",
    price: "$3.50",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjM5ODA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true,
  },
  {
    name: "Cappuccino",
    description: "Perfect blend of espresso, steamed milk, and velvety foam with beautiful latte art",
    price: "$4.75",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzYzOTQ4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true,
  },
  {
    name: "Iced Americano",
    description: "Refreshing cold coffee with a smooth, bold flavor perfect for warm days",
    price: "$4.25",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTU0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Caramel Macchiato",
    description: "Espresso with vanilla, steamed milk, and rich caramel drizzle",
    price: "$5.25",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzYzOTQ4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Mocha Latte",
    description: "Chocolate and espresso combined with steamed milk for the ultimate indulgence",
    price: "$5.50",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1619286310410-a95de97b0aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjQwMDkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true,
  },
  {
    name: "Flat White",
    description: "Velvety microfoam poured over a double shot of espresso",
    price: "$4.50",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjM5ODA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Cold Brew",
    description: "Smooth, low-acid coffee steeped for 24 hours, served over ice",
    price: "$4.75",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTU0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Irish Coffee",
    description: "Hot coffee with a touch of Irish cream and topped with whipped cream",
    price: "$6.00",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1619286310410-a95de97b0aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjQwMDkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Vanilla Latte",
    description: "Smooth espresso with vanilla syrup and steamed milk",
    price: "$4.95",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzYzOTQ4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Affogato",
    description: "Vanilla ice cream drowned in a hot shot of espresso",
    price: "$5.75",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjM5ODA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const beverageProducts = [
  {
    name: "Signature Green Refresher",
    description: "Our famous green beverage with a refreshing citrus twist",
    price: "$4.50",
    category: "Beverage",
    image: greenDrink,
    popular: true,
  },
  {
    name: "Signature Blue Lime Refresher",
    description: "Our famous Lime beverage with a refreshing citrus twist",
    price: "$4.50",
    category: "Beverage",
    image: blueDrink,
    popular: true,
  },
  {
    name: "Signature Strawbery Red",
    description: "Our famous Strawbery beverage with a refreshing citrus twist",
    price: "$4.50",
    category: "Beverage",
    image: redDrink,
    popular: true,
  },
  {
    name: "Barista Coffee",
    description: "Our famous green beverage with a refreshing citrus twist",
    price: "$4.50",
    category: "Beverage",
    image: coffeeDrink,
    popular: true,
  },
  {
    name: "Matcha Latte",
    description: "Premium Japanese matcha whisked with steamed milk",
    price: "$5.25",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1708572727896-117b5ea25a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGxhdHRlfGVufDF8fHx8MTc2Mzk3NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true,
  },
  {
    name: "Berry Smoothie",
    description: "Blended fresh berries, banana, and yogurt for a healthy treat",
    price: "$5.95",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1582885225026-fd83adcca406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJlcnJ5JTIwZHJpbmt8ZW58MXx8fHwxNzY0MDQ2MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed oranges, no added sugar",
    price: "$3.95",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1707569517904-92b134ff5f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwYmV2ZXJhZ2V8ZW58MXx8fHwxNzY0MDU1NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Hot Chocolate",
    description: "Rich chocolate with marshmallows and whipped cream",
    price: "$4.25",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1706659858410-f3917475a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBjaG9jb2xhdGUlMjBtYXJzaG1hbGxvd3xlbnwxfHx8fDE3NjQwNTU1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true,
  },
];

export function Products() {
  return (
    <div className="bg-gradient-to-b from-[#0f0a05] via-[#1a1410] to-[#0f0a05]">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">Our Menu</h1>
          <p className="text-lg text-[#a89379] max-w-3xl mx-auto">
            Discover our carefully crafted selection of premium coffees and refreshing beverages. 
            Every drink is made with love and the finest ingredients.
          </p>
        </div>

        {/* Coffee Products */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Coffee className="text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.5)]" size={32} />
            <h2 className="text-[#d4a574]">Coffee Selection</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coffeeProducts.map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.popular && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-[#d4a574] to-[#c49060] text-[#0f0a05] hover:shadow-[0_0_15px_rgba(212,165,116,0.5)] transition-all duration-300">
                        Popular
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#d4a574] group-hover:text-[#c49060] transition-colors duration-300">{product.name}</h3>
                      <span className="text-[#d4a574] font-semibold">{product.price}</span>
                    </div>
                    <p className="text-[#a89379]">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Beverage Products */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Droplet className="text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.5)]" size={32} />
            <h2 className="text-[#d4a574]">Refreshing Beverages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {beverageProducts.map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.popular && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-[#d4a574] to-[#c49060] text-[#0f0a05] hover:shadow-[0_0_15px_rgba(212,165,116,0.5)] transition-all duration-300">
                        Popular
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#d4a574] group-hover:text-[#c49060] transition-colors duration-300">{product.name}</h3>
                      <span className="text-[#d4a574] font-semibold">{product.price}</span>
                    </div>
                    <p className="text-[#a89379]">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}