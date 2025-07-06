import { useState, useEffect } from 'react';
import { Wrench, Droplets, Settings, Zap, CheckCircle, Star, ArrowRight, Menu, X, Shield, AlertCircle, Target, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import crackInjectoinImage from '../assets/works/crackInjection.png'; // Assuming you have an image for the hero sectio
const CrackInjectionPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const injectionTypes = [
    {
      title: "Epoxy Injection",
      description: "For dormant cracks in structural members—restores strength and rigidity",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      features: ["High strength restoration", "Permanent bond", "Structural repair", "Load-bearing recovery"]
    },
    {
      title: "PU (Polyurethane) Foam Injection",
      description: "For active, leaking cracks—expands to stop water and seal voids",
      icon: <Droplets className="w-8 h-8" />,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      features: ["Water-reactive expansion", "Flexible seal", "Active leak control", "Void filling"]
    },
    {
      title: "Low-Pressure Injection",
      description: "Ideal for fine cracks and internal leak sealing",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      features: ["Precision control", "Fine crack penetration", "Minimal disruption", "Internal sealing"]
    },
    {
      title: "High-Pressure Injection",
      description: "For deep penetration into wider or active cracks in foundations or walls",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      features: ["Deep penetration", "Wide crack repair", "Foundation treatment", "Structural walls"]
    }
  ];

  const benefits = [
    {
      title: "Stops Water Seepage",
      description: "Prevents water infiltration in walls, roofs, and basements",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Restores Structural Integrity",
      description: "Rebuilds load-bearing capacity of damaged concrete",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Prevents Steel Corrosion",
      description: "Protects reinforcement from moisture and chemical damage",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Handles All Crack Types",
      description: "Effective for both active/leaking and dormant cracks",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Cost-Effective Solution",
      description: "Affordable alternative to major reconstruction work",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const whyChooseUs = [
    "Certified applicators using Fosroc, MYK Arment, Dr. Fixit crack injection systems",
    "Detailed crack assessment using non-destructive methods",
    "Precision injection with controlled pressure equipment",
    "Long-lasting results with high-performance materials",
    "Trusted by clients for structural restoration and waterproofing"
  ];

  const applications = [
    { area: "Slabs", description: "Residential and commercial floor slabs" },
    { area: "Beams", description: "Structural support beams and lintels" },
    { area: "Columns", description: "Load-bearing columns and pillars" },
    { area: "Foundations", description: "Foundation walls and footings" },
    { area: "Basements", description: "Basement walls and retaining structures" },
    { area: "Walls", description: "Exterior and interior wall cracks" }
  ];

  return (
    <div className="min-h-screen bg-white">
 <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
              <Wrench className="w-4 h-4" />
              Crack Injection Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Sealing Cracks.
              <br />
              <span className="text-gray-600">Restoring Strength.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized structural repair technique to seal, stabilize, and restore cracked concrete using 
              advanced epoxy and polyurethane injection methods for lasting solutions.
            </p>
            <div className="flex justify-center mt-10">
              <img
                src={crackInjectoinImage}
                alt="Crack Injection in Action"
                className="rounded-3xl shadow-lg w-full max-w-2xl object-cover"
                style={{ maxHeight: 340 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Crack Injection */}
      <section id="overview" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What is Crack Injection?
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Crack Injection</strong> is a specialized structural repair technique used to 
                  <strong> seal, stabilize, and restore cracked concrete</strong>. It involves injecting materials 
                  such as <strong>epoxy</strong> or <strong>polyurethane (PU)</strong> into cracks to 
                  <strong> prevent water ingress</strong>, <strong>stop further deterioration</strong>, and 
                  <strong> restore load-bearing capacity</strong>.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This technique is essential for both <strong>structural</strong> (load-bearing) and 
                  <strong> non-structural</strong> (leakage-related) cracks in slabs, beams, columns, 
                  foundations, and basements.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Process</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                  <span className="text-gray-700">Crack Assessment & Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                  <span className="text-gray-700">Surface Preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                  <span className="text-gray-700">Injection Port Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">4</div>
                  <span className="text-gray-700">Material Injection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">5</div>
                  <span className="text-gray-700">Curing & Quality Check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Crack Injection */}
      <section id="types" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Crack Injection We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized injection methods tailored to different crack types and structural requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {injectionTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {type.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why It's Important
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Critical advantages of professional crack injection for structural integrity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where We Apply Crack Injection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive crack repair solutions for all structural elements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {app.area}
                </h3>
                <p className="text-gray-600 text-sm">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose KK Building Solutions & Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional expertise backed by certified products and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Professional Crack Injection Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Get expert crack assessment and repair solutions with guaranteed results and industry-leading warranties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917416759126&text=I%20want%20a%20free%20crack%20injection%20assessment&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

   <Footer/>
    </div>
  );
};

export default CrackInjectionPage;