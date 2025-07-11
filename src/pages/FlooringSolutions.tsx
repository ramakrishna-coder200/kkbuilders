import React from "react";
import { Layers, Zap, Factory, Shield, CheckCircle, Award, Thermometer, ArrowRight, Droplets, Sun } from "lucide-react";
import drfixit from "../assets/certifications/DrFixit.jpg";
import fosroc from "../assets/certifications/forroc.jpg";
import mykarment from "../assets/certifications/mykArment.jpg";
import expoxy from "../assets/works/epoxyflooring.jpg";
import puflooring from "../assets/works/puflooring.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const FlooringSolutions = () => {
  const certifications = [
    { name: "Dr. Fixit", desc: "Premium resin flooring systems" },
    { name: "Fosroc", desc: "Industrial-grade solutions" },
    { name: "MYK Arment", desc: "Advanced polymer technology" }
  ];

  const epoxyFeatures = [
    { icon: Shield, title: "Chemical Resistant", desc: "Withstands oils, acids, and industrial chemicals" },
    { icon: Zap, title: "Impact Resistant", desc: "Handles heavy machinery and high-traffic loads" },
    { icon: CheckCircle, title: "Easy Maintenance", desc: "Seamless surface for effortless cleaning" },
    { icon: Factory, title: "Dust-Free", desc: "Hygienic solution for sterile environments" }
  ];

  const puFeatures = [
    { icon: Thermometer, title: "Thermal Shock Resistant", desc: "Performs in temperature-variable environments" },
    { icon: Droplets, title: "Wet Zone Ready", desc: "Perfect for food processing and wet areas" },
    { icon: Sun, title: "UV Stable", desc: "Won't yellow or degrade under sunlight" },
    { icon: Shield, title: "Flexible Coating", desc: "Superior flexibility compared to epoxy" }
  ];

  const applications = [
    {
      category: "Epoxy Flooring",
      uses: ["Manufacturing Facilities", "Warehouses", "Commercial Kitchens", "Parking Areas", "Hospitals", "Pharmaceutical Units"]
    },
    {
      category: "PU Flooring",
      uses: ["Food & Beverage Plants", "Dairy Processing", "Clean Rooms", "Cold Storage", "Outdoor Decks", "Wet Processing Zones"]
    }
  ];

  const services = [
    {
      title: "New Installations",
      description: "Complete flooring systems for new construction projects",
      features: ["Site Assessment", "Substrate Preparation", "Professional Application"]
    },
    {
      title: "Refurbishments",
      description: "Upgrade existing floors with modern coating systems",
      features: ["Damage Assessment", "Surface Restoration", "Seamless Integration"]
    },
    {
      title: "Maintenance Programs",
      description: "Ongoing care to maximize flooring system lifespan",
      features: ["Regular Inspections", "Preventive Maintenance", "Repair Services"]
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Layers className="w-4 h-4" />
              Industrial-Grade Flooring Systems
            </div>
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Epoxy & <span className="font-normal">PU Flooring</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Durable, seamless flooring solutions engineered for industrial 
              and commercial environments requiring superior protection.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <span>• Durable</span>
              <span>• Seamless</span>
              <span>• Industrial-Grade</span>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={expoxy}
                  alt="Epoxy Flooring Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Epoxy Flooring Installation</h3>
              <p className="text-gray-600 text-sm">Pharmacity Manufacturing Facility</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={puflooring}
                  alt="PU Flooring System"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">PU Flooring System</h3>
              <p className="text-gray-600 text-sm">Brandix Industrial Complex</p>
            </div>
          </div>
        </div>
      </section>

      {/* Epoxy vs PU Comparison */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Flooring Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the unique properties and applications of epoxy 
              and polyurethane flooring systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Epoxy Section */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-2 rounded-xl">
                  <Factory className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900">Epoxy Flooring</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                High-performance resin-based flooring that creates seamless, 
                chemical-resistant surfaces ideal for demanding industrial environments.
              </p>

              <div className="space-y-6 mb-8">
                {epoxyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg mt-1">
                      <feature.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm font-medium text-blue-900 mb-2">Ideal Applications:</p>
                <div className="flex flex-wrap gap-2">
                  {applications[0].uses.map((use, idx) => (
                    <span key={idx} className="bg-white text-blue-700 px-2 py-1 rounded text-xs">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PU Section */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-slate-50 p-2 rounded-xl">
                  <Thermometer className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900">PU Flooring</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Flexible polyurethane coating system offering superior thermal 
                resistance and UV stability for specialized environments.
              </p>

              <div className="space-y-6 mb-8">
                {puFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-slate-50 p-2 rounded-lg mt-1">
                      <feature.icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-sm font-medium text-slate-900 mb-2">Ideal Applications:</p>
                <div className="flex flex-wrap gap-2">
                  {applications[1].uses.map((use, idx) => (
                    <span key={idx} className="bg-white text-slate-700 px-2 py-1 rounded text-xs">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive flooring solutions from initial assessment 
              to long-term maintenance programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Why Choose KK Building Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Certified expertise with industry-leading materials and 
                comprehensive quality assurance processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Certified applicators of premium flooring systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Experienced in new installations and refurbishments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Site-specific solutions for load, traffic, and chemical exposure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Comprehensive quality assurance and testing protocols</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Certified Partners</h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Add images for certifications */}
                  <div className="text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center overflow-hidden">
                      <img src={drfixit} alt="Dr. Fixit" className="w-12 h-12 object-contain" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Dr. Fixit</h4>
                    <p className="text-xs text-gray-600">Premium resin flooring systems</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center overflow-hidden">
                      <img src={fosroc} alt="Fosroc" className="w-12 h-12 object-contain" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Fosroc</h4>
                    <p className="text-xs text-gray-600">Industrial-grade solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center overflow-hidden">
                      <img src={mykarment} alt="MYK Arment" className="w-12 h-12 object-contain" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">MYK Arment</h4>
                    <p className="text-xs text-gray-600">Advanced polymer technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready for Your Flooring Project?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get professional consultation and customized flooring solutions 
            engineered for your specific requirements.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-colors"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=917416759126&text=I%20want%20a%20project%20quote%20for%20flooring%20solutions&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            Get Project Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default FlooringSolutions;