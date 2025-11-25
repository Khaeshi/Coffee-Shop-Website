import { React, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import emailjs from '@emailjs/browser'; // Import EmailJS
import { useRef } from "react";

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

const emailJSConfig: EmailJSConfig = {
  serviceId: import.meta.env.VITE_YOUR_SERVICE_ID || '',
  templateId: import.meta.env.VITE_YOUR_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY || '',
};

export function ContactUs() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { serviceId, templateId, publicKey } = emailJSConfig;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is incomplete. Check your environment variables.");
      alert("Failed to send message. Please configure EmailJS.");
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
          setShowSuccessModal(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.'); // Basic error handling
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#0f0a05] via-[#1a1410] to-[#0f0a05]">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">Contact Us</h1>
          <p className="text-lg text-[#a89379] max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
            feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-[#d4a574]">Get In Touch</h2>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_20px_rgba(212,165,116,0.3)] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] p-3 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.4)]">
                      <MapPin className="text-[#0f0a05]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#d4a574] mb-2">Visit Us</h3>
                      <p className="text-[#a89379]">
                        1849, Brgy. Dita,<br /> City of Sta. Rosa, Laguna, Philippines
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_20px_rgba(212,165,116,0.3)] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] p-3 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.4)]">
                      <Phone className="text-[#0f0a05]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#d4a574] mb-2">Call Us</h3>
                      <p className="text-[#a89379]">(+63) 926-036-5020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_20px_rgba(212,165,116,0.3)] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] p-3 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.4)]">
                      <Mail className="text-[#0f0a05]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#d4a574] mb-2">Email Us</h3>
                      <p className="text-[#a89379]">gwampitsco@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] hover:shadow-[0_0_20px_rgba(212,165,116,0.3)] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#d4a574] to-[#c49060] p-3 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.4)]">
                      <Clock className="text-[#0f0a05]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#d4a574] mb-2">Opening Hours</h3>
                      <div className="text-[#a89379] space-y-1">
                        <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                        <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/30 hover:border-[#d4a574] shadow-lg hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="mb-6 text-[#d4a574]">Send Us a Message</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-[#d4a574]">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-[#d4a574]/30 focus:border-[#d4a574] bg-[#0f0a05] text-[#f5e6d3] transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,165,116,0.2)]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#d4a574]">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-[#d4a574]/30 focus:border-[#d4a574] bg-[#0f0a05] text-[#f5e6d3] transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,165,116,0.2)]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#d4a574]">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-[#d4a574]/30 focus:border-[#d4a574] bg-[#0f0a05] text-[#f5e6d3] transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,165,116,0.2)]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#d4a574]">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-[#d4a574]/30 focus:border-[#d4a574] bg-[#0f0a05] text-[#f5e6d3] transition-all duration-300 focus:shadow-[0_0_15px_rgba(212,165,116,0.2)]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#d4a574] to-[#c49060] hover:from-[#c49060] hover:to-[#d4a574] text-[#0f0a05] shadow-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-gradient-to-br from-[#1a1410] to-[#2d2419] border-[#d4a574]/50 shadow-[0_0_40px_rgba(212,165,116,0.3)]">
          <DialogHeader>
            <DialogTitle className="text-[#d4a574]">Message Sent Successfully!</DialogTitle>
            <DialogDescription className="text-[#a89379]">
              Thank you for contacting Gwampit's Coffee. We've received your message and
              will get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowSuccessModal(false)}
            className="bg-gradient-to-r from-[#d4a574] to-[#c49060] hover:from-[#c49060] hover:to-[#d4a574] text-[#0f0a05] shadow-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] transition-all duration-300 hover:scale-105"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}