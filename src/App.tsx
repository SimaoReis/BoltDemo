import React from 'react';
import { Brain, Heart, Microscope, Phone, Mail, ArrowRight, Armchair as Wheelchair, Syringe, Stethoscope, CheckCircle2, Clock, DollarSign } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Redefining the Healthcare Industry
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We develop cutting-edge medical technology solutions that enhance patient outcomes and revolutionize healthcare delivery.
            </p>
            <div className="flex gap-6 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                Schedule an appointment <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-gray-600">Patient Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <p className="text-gray-600">Healthcare Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25K+</div>
              <p className="text-gray-600">Lives Improved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 curved-pattern"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Innovative Healthcare Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive suite of medical technology solutions is designed to enhance patient care and improve healthcare outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Brain className="w-16 h-16 text-blue-600" />,
                title: "Neural Implants",
                description: "State-of-the-art brain-computer interfaces designed for enhanced neural function and recovery.",
                features: ["Advanced neural mapping", "Real-time monitoring", "Customizable parameters"],
                price: "Starting from $25,000"
              },
              {
                icon: <Wheelchair className="w-16 h-16 text-blue-600" />,
                title: "Adaptive Technologies",
                description: "Personalized mobility solutions that provide independence and improved quality of life.",
                features: ["Custom-fit design", "Smart adaptation", "Remote assistance"],
                price: "Starting from $12,000"
              },
              {
                icon: <Stethoscope className="w-16 h-16 text-blue-600" />,
                title: "Medical Instruments",
                description: "Precision-engineered diagnostic and surgical tools for optimal clinical outcomes.",
                features: ["High precision", "Digital integration", "Advanced analytics"],
                price: "Starting from $8,000"
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative">
                <div className="absolute top-0 right-0 bg-blue-50 px-4 py-2 rounded-bl-2xl text-sm text-blue-600 font-medium">
                  {solution.price}
                </div>
                <div className="mb-8">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-8">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our streamlined process ensures you receive the perfect solution for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Clock className="w-12 h-12 text-blue-600" />,
                title: "1. Consultation",
                description: "Schedule a detailed consultation with our medical technology experts to discuss your specific requirements."
              },
              {
                icon: <Microscope className="w-12 h-12 text-blue-600" />,
                title: "2. Assessment",
                description: "Our team conducts a thorough assessment to determine the optimal solution for your needs."
              },
              {
                icon: <DollarSign className="w-12 h-12 text-blue-600" />,
                title: "3. Implementation",
                description: "We handle everything from customization to installation and provide comprehensive training."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 curved-pattern"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join leading healthcare institutions in providing cutting-edge care with our innovative solutions.
            </p>
            <div className="flex gap-6 justify-center">
              <a href="tel:+1234567890" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
                (123) 456-7890
              </a>
              <a href="mailto:contact@medtech.com" className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                With over two decades of pioneering research and development in medical technology, we've established ourselves as the industry leader by consistently delivering breakthrough innovations that combine artificial intelligence with precision engineering. Our proprietary neural mapping technology, developed in collaboration with leading research institutions and validated through extensive clinical trials, has achieved unprecedented success rates in improving patient outcomes across diverse medical conditions. As the only medical technology provider with an integrated ecosystem of adaptive solutions and real-time monitoring capabilities, we're not just creating products – we're setting new standards in healthcare technology that others aspire to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-xl mb-6">MedTech Solutions</h3>
              <p className="text-gray-400">
                Advancing healthcare through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Solutions</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Neural Implants</li>
                <li>Adaptive Technologies</li>
                <li>Medical Instruments</li>
                <li>Custom Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Research</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (123) 456-7890
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  contact@medtech.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-12 text-center text-gray-400">
            <p>&copy; 2024 MedTech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;