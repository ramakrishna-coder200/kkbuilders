import { useState, useEffect } from 'react';
import { Shield, Droplets, Home, Factory, CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Coatings = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Elastomeric Waterproof Coatings",
      description: "For terraces, parapets, and exposed rooftops",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Protective Floor & Wall Coatings",
      description: "Chemical- and abrasion-resistant layers for industrial and cleanroom settings",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Silicone & Polyurethane Sealants",
      description: "Flexible fillers for expansion joints, glass-to-wall joints, and movement cracks",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Anti-Carbonation Coatings",
      description: "To protect RCC structures from carbonation and reinforcement corrosion",
      icon: <Home className="w-6 h-6" />
    }
  ];

  const benefits = [
    "Weatherproofs structures from rain, UV, and extreme temperatures",
    "Seals joints and cracks to prevent water seepage",
    "Prevents fungal growth and surface degradation",
    "Resists chemicals, dust, and pollution in industrial environments",
    "Improves surface lifespan and reduces maintenance needs"
  ];

  const whyChooseUs = [
    "Certified product range from Fosroc, MYK Arment, and Dr. Fixit",
    "Surface preparation and moisture testing before application",
    "Precision application with trained professionals",
    "Suitable for both residential and industrial projects",
    "Long-term warranty-backed solutions"
  ];

  return (
    <div className="min-h-screen bg-white">
   <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
              <Shield className="w-4 h-4" />
              Coatings & Sealants
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Protecting Surfaces.
              <br />
              <span className="text-gray-600">Sealing Longevity.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional coating and sealing solutions that preserve structural integrity, 
              improve aesthetics, and enhance durability for residential and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Coatings & Sealants */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Are Coatings & Sealants?
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Coatings</h3>
                  <p className="text-gray-600">
                    Protective layers applied to surfaces (walls, roofs, floors, steel, or concrete) 
                    to guard against weather, chemicals, corrosion, and wear.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sealants</h3>
                  <p className="text-gray-600">
                    Flexible materials used to fill gaps, joints, and cracks — preventing water 
                    ingress, air leakage, and structural damage.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Protection</h4>
                  <p className="text-sm text-gray-600">Weather & chemical resistance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sealing</h4>
                  <p className="text-sm text-gray-600">Waterproofing & air sealing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aesthetics</h4>
                  <p className="text-sm text-gray-600">Surface enhancement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Durability</h4>
                  <p className="text-sm text-gray-600">Extended lifespan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Use Coatings & Sealants?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential protection for buildings and structures in every environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Solutions Include
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive coating and sealing solutions for every application
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Solutions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Bituminous Sealants & Coatings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Basement Waterproofing Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Foundation Protection Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Wet Area Waterproofing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why KK Building Solutions & Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional expertise backed by certified products and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Get professional coating and sealing solutions backed by industry-leading warranties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917416759126&text=I%20want%20a%20free%20quote%20for%20coatings%20and%20sealants&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              onClick={() => {
                window.location.href = "/#projects";
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </div>
  );
};

export default Coatings;