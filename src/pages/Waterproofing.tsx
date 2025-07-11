import React from "react";
import { Shield, Droplets, Building, CheckCircle, Award, Users, Clock, ArrowRight } from "lucide-react";
import terracewaterproofing from "../assets/works/terracewaterproofing.jpg"
import basementwaterproofing from "../assets/works/waterproofing.jpg";
import drfixit from "../assets/certifications/DrFixit.jpg";
import fosroc from "../assets/certifications/forroc.jpg";
import mykarment from "../assets/certifications/mykArment.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Waterproofing = () => {
  const certifications = [
    { name: "Dr. Fixit", desc: "Premium waterproofing solutions", img: drfixit },
    { name: "Fosroc", desc: "Industrial-grade protection", img: fosroc },
    { name: "MYK Arment", desc: "Advanced membrane systems", img: mykarment }
  ];

  const services = [
    {
      title: "Liquid Membrane",
      description: "Seamless coating for terraces, slabs, and wet areas with superior adhesion",
      features: ["UV Resistant", "Crack Bridging", "Easy Application"]
    },
    {
      title: "Cementitious Systems",
      description: "Cost-effective solutions for water tanks, bathrooms, and basements",
      features: ["High Durability", "Breathable", "Chemical Resistant"]
    },
    {
      title: "Bituminous Coating",
      description: "Flexible weather-resistant protection for roofing systems",
      features: ["Weather Proof", "Flexible", "Long Lasting"]
    },
    {
      title: "Polyurethane Membrane",
      description: "High-performance waterproofing for exposed and flat roof areas",
      features: ["Premium Grade", "Extreme Weather", "10+ Year Life"]
    }
  ];

  const benefits = [
    { icon: Building, title: "Structural Integrity", desc: "Prevents water damage and foundation issues" },
    { icon: Shield, title: "Mold Prevention", desc: "Eliminates moisture for healthier environments" },
    { icon: Clock, title: "Cost Efficiency", desc: "Reduces long-term maintenance expenses" },
    { icon: Award, title: "Compliance Ready", desc: "Meets all safety and building standards" }
  ];

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' }
  ];

  return (
    <>
          <Navbar links={navLinks} />

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Certified Waterproofing Solutions
            </div>
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Water<span className="font-normal">proofing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional waterproofing systems that protect your investment 
              with precision-engineered solutions and certified materials.
            </p>
          </div>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={terracewaterproofing}
                  alt="Terrace Waterproofing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h3 className="text-lg font-medium text-gray-900 mb-1">Terrace Waterproofing</h3>
              <p className="text-gray-600 text-sm">Ramky One Krystal Project</p> */}
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={basementwaterproofing}
                  alt="Basement Protection"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h3 className="text-lg font-medium text-gray-900 mb-1">Basement Protection</h3>
              <p className="text-gray-600 text-sm">Medical College Complex</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* What is Waterproofing */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-8">Understanding Waterproofing</h2>
            <div className="w-24 h-px bg-blue-600 mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Waterproofing is a specialized process that creates impermeable barriers against water infiltration. 
              Using advanced materials and proven techniques, we protect foundations, roofs, walls, and basements 
              from moisture damage, structural weakening, and environmental degradation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional waterproofing delivers measurable benefits that protect 
              your investment and ensure long-term structural integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive waterproofing solutions tailored to your specific 
              requirements and environmental conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4">Certified Excellence</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We partner with industry-leading manufacturers to deliver 
                premium waterproofing systems with guaranteed performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="w-14 h-14 object-contain rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                <Users className="w-5 h-5" />
                <span className="font-medium">KK Building Solutions & Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get expert waterproofing solutions tailored to your project requirements. 
            Professional consultation and certified materials guaranteed.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=917416759126&text&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Waterproofing;