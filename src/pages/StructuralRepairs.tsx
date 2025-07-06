import React from "react";
import { Wrench, Shield, Building2, AlertTriangle, CheckCircle, Award, Hammer, ArrowRight, Zap, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drfixit from "../assets/certifications/drfixit.jpg";
import fosroc from "../assets/certifications/forroc.jpg";
import mykarment from "../assets/certifications/mykarment.jpg";
const StructuralRepairs = () => {
  const certifications = [
    { name: "Dr. Fixit", desc: "Structural repair systems" },
    { name: "Fosroc", desc: "Advanced strengthening solutions" },
    { name: "MYK Arment", desc: "High-performance materials" }
  ];

  const repairTypes = [
    {
      title: "Concrete Crack Injection",
      description: "Stabilizing and sealing structural cracks with precision injection techniques",
      icon: Target,
      techniques: ["Epoxy Injection", "Polyurethane Sealing", "Structural Stitching"]
    },
    {
      title: "Rebar Corrosion Treatment",
      description: "Comprehensive rust removal and protective coating applications",
      icon: Shield,
      techniques: ["Rust Removal", "Re-alkalization", "Protective Coatings"]
    },
    {
      title: "Jacketing & Strengthening",
      description: "Restoring and enhancing load-bearing capacity of structural elements",
      icon: Building2,
      techniques: ["Column Jacketing", "Beam Strengthening", "Load Enhancement"]
    },
    {
      title: "Carbon Fiber Wrapping",
      description: "Advanced FRP strengthening without additional structural weight",
      icon: Zap,
      techniques: ["FRP Application", "Fiber Reinforcement", "Lightweight Solutions"]
    }
  ];

  const benefits = [
    { icon: Wrench, title: "Structural Integrity", desc: "Fixes cracks, corrosion, and settlement issues" },
    { icon: Building2, title: "Load Capacity", desc: "Restores and enhances load-bearing capabilities" },
    { icon: Shield, title: "Safety Compliance", desc: "Ensures occupant safety and regulatory compliance" },
    { icon: CheckCircle, title: "Asset Protection", desc: "Extends building lifespan and prevents costly failures" }
  ];

  const expertise = [
    "Certified by industry-leading material suppliers",
    "Expert team trained in industrial-grade repair techniques",
    "Thorough structural assessments before execution",
    "High-performance materials and non-destructive testing",
    "Guaranteed safety compliance with industry standards"
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Hammer className="w-4 h-4" />
              Professional Structural Repairs
            </div>
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Structural <span className="font-normal text-blue-600">Repairs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Restoring structural integrity with precision engineering and 
              certified repair systems for long-term safety and performance.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <span>• Restoring Strength</span>
              <span>• Ensuring Safety</span>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">Framework Restoration</h3>
              <p className="text-gray-600 text-sm">Columns, beams, slabs, and foundations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">Safety Compliance</h3>
              <p className="text-gray-600 text-sm">Industry standards and regulations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">Long-term Protection</h3>
              <p className="text-gray-600 text-sm">Extended building lifespan</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Structural Repairs */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-8">Understanding Structural Repairs</h2>
            <div className="w-24 h-px bg-orange-600 mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Structural repairs involve the systematic identification and restoration of damaged or 
              weakened components within a building's framework. This critical process addresses 
              issues in columns, beams, slabs, foundations, and load-bearing walls to maintain 
              structural integrity, safety, and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Essential */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Why Structural Repairs Are Essential</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proactive structural maintenance prevents catastrophic failures and 
              ensures the continued safety of building occupants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-orange-100 transition-colors">
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

      {/* Our Expertise */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Repair Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive structural repair services using advanced techniques 
              and high-performance materials.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {repairTypes.map((repair, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-50 p-2 rounded-xl">
                    <repair.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{repair.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{repair.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {repair.techniques.map((technique, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Additional Repair Services</h2>
              <p className="text-gray-600">Comprehensive solutions for all structural challenges</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Structural Grouting</strong> - Void filling and foundation stabilization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Non-Destructive Testing</strong> - Advanced assessment techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Settlement Correction</strong> - Foundation leveling and stabilization</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Seismic Retrofitting</strong> - Earthquake resistance upgrades</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Emergency Repairs</strong> - Critical structural interventions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Structural Monitoring</strong> - Ongoing performance assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">Why Choose KK Building Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Certified expertise with industry-leading materials and 
              comprehensive structural assessment capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Our Expertise</h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-6">Certified Partners</h3>
              <div className="grid grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={
                          cert.name === "Dr. Fixit"
                            ? drfixit
                            : cert.name === "Fosroc"
                            ? fosroc
                            : mykarment
                        }
                        alt={cert.name}
                        className="w-12 h-12 object-contain rounded"
                      />
                    </div>
                    <h4 className="font-medium text-white text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-gray-400">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
              <Users className="w-5 h-5 text-white" />
              <span className="font-medium text-white">KK Building Solutions & Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-light mb-6">Structural Assessment Required?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Get professional structural evaluation and repair recommendations 
            from certified experts with proven track records.
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
            Schedule Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default StructuralRepairs;