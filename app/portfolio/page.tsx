"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Filter, Search, Globe, ShoppingCart } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Glovo Store",
      category: "website",
      type: "Web Development",
      description: "Multi-category delivery platform for food, groceries, pharmacy items, and more.",
      image: "/delivery01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://glovoapp.com/en",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "True Food Kitchen",
      category: "website",
      type: "Web Development",
      description: "Restaurant website for dining concept, offering seasonal menus and online reservations.",
      image: "/food02.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://www.truefoodkitchen.com/",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Manchester Music Hall",
      category: "website",
      type: "Web Development",
      description: "website for music and event venue, featuring a calendar for concerts and corporate functions.",
      image: "/music01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://www.manchestermusichall.com/",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "Web Tickets",
      category: "website",
      type: "Web Development",
      description: "Online ticketing platform for events and tours, allowing users to browse and purchase tickets.",
      image: "/music02.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://www.webtickets.co.za/v2/default.aspx",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Paris Event Tickets",
      category: "website",
      type: "Web Development",
      description: "Online booking portal for experiences in Paris, including museums and cabarets.",
      image: "/music03.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://pariseventicket.com/",
      codeUrl: "#",
    },
    {
      id: 7,
      title: "Amer Adnan",
      category: "website",
      type: "Web Development",
      description: "Portfolio and service website for an award-winning architectural and interior design firm.",
      image: "/interior01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://www.ameradnan.com/",
      codeUrl: "#",
    },
    {
      id: 9,
      title: "Launching Page",
      category: "website",
      type: "Web Development",
      description: "A 'Coming Soon' landing page for an upcoming website launch to capture early interests.",
      image: "/launch01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://launching-soon-omega.vercel.app/",
      codeUrl: "#",
    },
    {
      id: 10,
      title: "Savills Abu Dhabi",
      category: "website",
      type: "Web Development",
      description: "Real estate consultancy website for property sales and advisory services in Abu Dhabi.",
      image: "/state01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://abudhabi.savills.ae/",
      codeUrl: "#",
    },
    {
      id: 11,
      title: "Nigeria Property Centre",
      category: "website",
      type: "Web Development",
      description: "Leading real estate portal in Nigeria for searching properties for sale, rent, and lease.",
      image: "/state02.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://nigeriapropertycentre.com/",
      codeUrl: "#",
    },
    {
      id: 12,
      title: "Pakistan Property",
      category: "website",
      type: "Web Development",
      description: "Real estate platform connecting buyers and sellers for property listings across Pakistan.",
      image: "/state03.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://www.pakistanproperty.com/",
      codeUrl: "#",
    },
    {
      id: 13,
      title: "The Indian School",
      category: "website",
      type: "Web Development",
      description: "website for an indian school, providing information on admissions, curriculum, and campuses.",
      image: "/school01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://theindianschool.in/",
      codeUrl: "#",
    },
    {
      id: 14,
      title: "Samiad College",
      category: "website",
      type: "Web Development",
      description: "School website offering English language programs and activities for juniors and teenagers.",
      image: "/school02.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://www.samiad.com/",
      codeUrl: "#",
    },
    {
      id: 15,
      title: "Animation Login Page",
      category: "website",
      type: "Web Development",
      description: "Animated login form, designed to enhance user experience with dynamic visual feedback.",
      image: "/login01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "https://sad-wozniak-afae67.netlify.app/",
      codeUrl: "#",
    },
    {
      id: 16,
      title: "Selfridges Store",
      category: "shopify",
      type: "Shopify Store",
      description: "A comprehensive Shopify store for the iconic luxury department brand, Selfridges.",
      image: "/shop1.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://www.selfridges.com/GB/en/",
      codeUrl: "#",
    },
    {
      id: 17,
      title: "Aroma Concepts",
      category: "shopify",
      type: "Shopify Store",
      description: "E-commerce store for Aroma Concepts, specializing in fragrances and perfumes.",
      image: "/shop2.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://aromaconcepts.pk/",
      codeUrl: "#",
    },
    {
      id: 18,
      title: "Kapoor Watch",
      category: "shopify",
      type: "Shopify Store",
      description: "A premium Shopify store for Kapoor Watch, offering a wide range of luxury timepieces.",
      image: "/shop3.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://www.kapoorwatch.com/",
      codeUrl: "#",
    },
    {
      id: 19,
      title: "Makeup Store",
      category: "shopify",
      type: "Shopify Store",
      description: "Dedicated e-commerce platform for Makeup Store, featuring cosmetics and beauty products.",
      image: "/shop4.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://makeupstore.com/",
      codeUrl: "#",
    },
    {
      id: 20,
      title: "Luxury Desires",
      category: "shopify",
      type: "Shopify Store",
      description: "Shopify store for Luxury Desires, showcasing high-end makeup and beauty collections.",
      image: "/shop5.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://luxurydesires.pk/collections/makeup",
      codeUrl: "#",
    },
    {
      id: 21,
      title: "Cosmetics Diary",
      category: "shopify",
      type: "Shopify Store",
      description: "E-commerce store for Cosmetics Diary, offering a curated selection of beauty and skincare.",
      image: "/shop6.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://www.cosmeticsdiary.pk/",
      codeUrl: "#",
    },
    {
      id: 22,
      title: "Zay Beauty",
      category: "shopify",
      type: "Shopify Store",
      description: "Shopify e-commerce site for Zay Beauty, featuring their unique cosmetics range.",
      image: "/shop7.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://pk.zaybeauty.com/",
      codeUrl: "#",
    },
    {
      id: 23,
      title: "Allure Beauty",
      category: "shopify",
      type: "Shopify Store",
      description: "E-commerce platform for Allure Beauty, selling a variety of beauty products and accessories.",
      image: "/shop8.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://allurebeauty.pk/",
      codeUrl: "#",
    },
    {
      id: 24,
      title: "The Buy Spot",
      category: "shopify",
      type: "Shopify Store",
      description: "Versatile Shopify store for The Buy Spot, offering a diverse range of Luxury Watches.",
      image: "/shop9.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://thebuyspot.com/",
      codeUrl: "#",
    },
    {
      id: 25,
      title: "Sezane Store",
      category: "shopify",
      type: "Shopify Store",
      description: "Elegant Shopify store for Sezane, featuring their latest fashion collections and accessories.",
      image: "/shop10.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://www.sezane.com/us-en/collection/the-accessories",
      codeUrl: "#",
    },
    {
      id: 26,
      title: "Jewellery Bazaar",
      category: "shopify",
      type: "Shopify Store",
      description: "Shopify e-commerce platform for Jewellery Bazaar, offering a wide array of jewelry.",
      image: "/shop11.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://jewellerybazaar.pk/",
      codeUrl: "#",
    },
    {
      id: 27,
      title: "Alex Monroe",
      category: "shopify",
      type: "Shopify Store",
      description: "Official Shopify store for Alex Monroe, showcasing their distinctive handcrafted jewelry designs.",
      image: "/shop12.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://www.alexmonroe.com/",
      codeUrl: "#",
    },
    {
      id: 28,
      title: "My Home Decor",
      category: "shopify",
      type: "Shopify Store",
      description: "A Shopify store for My Home Decor, specializing in stylish home furnishings and accents.",
      image: "/shop13.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://www.myhomedecor.pk/",
      codeUrl: "#",
    },
    {
      id: 29,
      title: "Woods Store",
      category: "shopify",
      type: "Shopify Store",
      description: "Shopify e-commerce platform for Woods Store, offering a curated selection of home goods.",
      image: "/shop14.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "https://woods.pk/",
      codeUrl: "#",
    },
    {
      id: 30,
      title: "Luxury Perfume AI Photography", // Adjusted title to be more specific
      category: "photo",
      type: "Photo Editing",
      description: "Showcasing real perfume products seamlessly integrated into AI-generated, bespoke marketing scenes for captivating visuals.",
      image: "/perfume01.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Lightroom", "AI Tools", "AI generated", "Generative AI", "Product Photography"],
      features: ["Retouch", "Color Grading", "Manipulation"],
      liveUrl: "#", // These will now be hidden for 'photo' category
      codeUrl: "#", // These will now be hidden for 'photo' category
    },
    {
      id: 31,
      title: "Ladies Perfume AI Photography", // Adjusted title
      category: "photo",
      type: "Photo Editing",
      description: "Transforming actual luxury scents into stunning marketing imagery by integrating them into unique AI-crafted environments.",
      image: "/perfume02.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Lightroom", "AI Tools", "AI generated", "Generative AI", "Product Photography"],
      features: ["Retouch", "Color Grading", "Manipulation"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 32,
      title: "Juice Brand AI Photography", // Adjusted title
      category: "photo",
      type: "Photo Editing",
      description: "Creating engaging marketing visuals for real Juice products, placed within imaginative AI-generated scenes and contexts.",
      image: "/juice.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Lightroom", "AI Tools", "AI generated", "Generative AI", "Product Photography"],
      features: ["Retouch", "Color Grading", "Manipulation"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 33,
      title: "Watch AI Photography", // Adjusted title
      category: "photo",
      type: "Photo Editing",
      description: "Highlighting real watches with exquisite detail by setting them in custom, AI-generated environments designed for maximum appeal.",
      image: "/watch.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Lightroom", "AI Tools", "AI generated", "Generative AI", "Product Photography"],
      features: ["Retouch", "Color Grading", "Manipulation"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 34,
      title: "Jewellery AI Photography", // Adjusted title
      category: "photo",
      type: "Photo Editing",
      description: "Presenting genuine jewelry pieces within bespoke AI-created, offering captivating visuals for e-commerce and marketing.",
      image: "/earing.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Lightroom", "AI Tools", "AI generated", "Generative AI", "Product Photography"],
      features: ["Retouch", "Color Grading", "Manipulation"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "website", label: "Web Development" },
    { value: "shopify", label: "Shopify Store" },
    { value: "photo", label: "Photo Lab" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 text-center">
        <h1 className="text-5xl font-bold">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Explore Our Some Categories: Websites, Shopify Stores, Creative AI Powered Product Photography.
        </p>
      </section>

      {/* Highlighted Categories Section */}
      <section className="py-12 bg-slate-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {categories
            .filter((cat) => cat.value !== "all")
            .map((cat) => (
              <div
                key={cat.value}
                className="p-6 rounded-xl border border-slate-700 bg-slate-800/50 text-center hover:border-cyan-500 transition cursor-pointer"
                onClick={() => setFilter(cat.value)}
              >
                <h3 className="text-xl font-semibold text-white">{cat.label}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {projects.filter((p) => p.category === cat.value).length} Projects
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Filter + Search */}
      <section className="py-8 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                className={`${filter === category.value
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                  }`}
                onClick={() => setFilter(category.value)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-400 col-span-3">No projects found.</p>
          ) : (
            filteredProjects.map((project) => ( // <-- HERE: 'project' is defined in this map callback
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="cursor-move w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">{project.type}</Badge>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                  <div className="flex space-x-3 mt-4">
                    {/* Wrap the Button with a Link or <a> tag */}
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Link href={project.liveUrl} passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                            <ExternalLink className="h-3 w-3 mr-1" /> Live
                          </Button>
                        </a>
                      </Link>
                    ) : (
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white" disabled>
                        <ExternalLink className="h-3 w-3 mr-1" /> Live (N/A)
                      </Button>
                    )}

                    {project.codeUrl && project.codeUrl !== "#" ? (
                      <Link href={project.codeUrl} passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            <Code className="h-3 w-3 mr-1" /> Code
                          </Button>
                        </a>
                      </Link>
                    ) : (
                      <Button size="sm" variant="outline" className="flex-1 text-xs" disabled>
                        <Code className="h-3 w-3 mr-1" /> Code (N/A)
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
