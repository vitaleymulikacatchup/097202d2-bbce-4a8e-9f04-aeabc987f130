"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star, Heart } from "lucide-react";

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Spacious swimming pool surrounded by tropical villas under a bright blue sky, perfect for relaxation." },
  { "id": "room-image-1", "url": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Cozy and modern hotel bedroom interior with elegant decor and soft lighting." },
  { "id": "room-image-2", "url": "https://images.pexels.com/photos/5371570/pexels-photo-5371570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A hotel staff member in uniform delivering room service in an elegant hallway." },
  { "id": "room-image-3", "url": "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort." }
];

export default function Page() {
  const resolvedHeroImage = assetMap.find(a => a.id === "hero-image") ?? {};
  const resolvedContactImage = assetMap.find(a => a.id === "contact-image") ?? {};
  const resolvedRoom1Image = assetMap.find(a => a.id === "room-image-1") ?? {};
  const resolvedRoom2Image = assetMap.find(a => a.id === "room-image-2") ?? {};
  const resolvedRoom3Image = assetMap.find(a => a.id === "room-image-3") ?? {};

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { label: "Home", href: "#home" },
            { label: "About Us", href: "#about" },
            { label: "Rooms", href: "#rooms" },
            { label: "Contact", href: "#contact" }
          ]}
          brandName="HotelSite"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Experience Luxury"
            description="Discover the ultimate comfort in our exquisite hotel."
            imageSrc={resolvedHeroImage.url || "/public/images/placeholder.webp"}
            imageAlt={resolvedHeroImage.alt || "Decorative image"}
            buttons={[
              { text: "Explore Rooms", href: "rooms" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Our hotel offers a sanctuary of elegance and hospitality.",
              "Experience unparalleled service and comfort."
            ]}
            buttons={[
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Our Rooms"
            products={[
              { id: "1", brand: "Hotel Grand", name: "Luxury Suite", price: "$250/night", rating: 5, reviewCount: "1.5k", imageSrc: resolvedRoom1Image.url || "/public/images/placeholder.webp", imageAlt: resolvedRoom1Image.alt || "Decorative image" },
              { id: "2", brand: "Hotel Grand", name: "Deluxe Room", price: "$180/night", rating: 4, reviewCount: "1.2k", imageSrc: resolvedRoom2Image.url || "/public/images/placeholder.webp", imageAlt: resolvedRoom2Image.alt || "Decorative image" },
              { id: "3", brand: "Hotel Grand", name: "Standard Room", price: "$120/night", rating: 4, reviewCount: "900", imageSrc: resolvedRoom3Image.url || "/public/images/placeholder.webp", imageAlt: resolvedRoom3Image.alt || "Decorative image" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardThree
            title="What People Are Saying"
            testimonials={[
              { id: "1", name: "Jack", handle: "@jack", testimonial: "I've never experienced such luxury before. Amazing stay!", icon: Star },
              { id: "2", name: "Emma", handle: "@emma", testimonial: "The service was impeccable and the rooms were beautiful.", icon: Heart }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Get in Touch"
            description="We'd love to hear from you. Send us a message."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            imageSrc={resolvedContactImage.url || "/public/images/placeholder.webp"}
            imageAlt={resolvedContactImage.alt || "Decorative image"}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }] },
              { items: [{ label: "About", href: "about" }] },
              { items: [{ label: "Contact", href: "contact" }] }
            ]}
            logoText="HotelSite"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
