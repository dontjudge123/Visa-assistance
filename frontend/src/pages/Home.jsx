import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}

        {/* Hero Section */}
        <section className="flex-grow container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Empowering your journey with seamless visa support.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Helping you navigate the visa process with confidence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg font-medium"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg font-medium"
                >
                  Get Started
                </Link>
              )}
              <Link
                to="/visa-process"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-blue-100 rounded-xl p-8 w-full max-w-md h-64 flex items-center justify-center">
              <img
      src="/images/logo.png"
      alt="App Preview"
      className="max-h-full max-w-full object-contain"
    />

            </div>
          </div>
        </section>

        {/* Features Section */}

        <section id="features" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              How We Help You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Visa Process",
                  subtitle: "Students & Job Seekers",
                  description:
                    "Navigate the German visa process with our step-by-step guidance",
                  path: "/visa-process",
                  icon: "🎓",
                },
                {
                  title: "Getting Married",
                  subtitle: "In Germany",
                  description:
                    "Complete guide to marriage paperwork for foreigners",
                  path: "/getting-married",
                  icon: "💍",
                },
                {
                  title: "Bringing a Pet",
                  subtitle: "To Germany",
                  description:
                    "Everything you need to import your pet to Germany",
                  path: "/bringing-pet",
                  icon: "🐕",
                },
                {
                  title: "Registering",
                  subtitle: "A Business",
                  description:
                    "Start your business or freelance career in Germany",
                  path: "/registering-business",
                  icon: "💼",
                },
              ].map((feature, index) => (
                <Link
                  to={feature.path}
                  key={index}
                  className="block bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:no-underline group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "This app saved me hours of research and confusion!",
                  author: "Sarah K.",
                  role: "Expat from USA",
                },
                {
                  quote: "The form filler alone is worth the download.",
                  author: "Mohammed A.",
                  role: "Student from Syria",
                },
                {
                  quote: "Finally an app that makes German bureaucracy simple.",
                  author: "Lena P.",
                  role: "Freelancer from France",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Simplify Your Anmeldung?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of expats who've successfully registered with our
              help.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 text-lg font-medium">
              Get Started Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                  <span className="text-xl font-bold">Büroease</span>
                </div>
                <p className="text-gray-400">
                  Making German bureaucracy easier since 2023.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-gray-400 hover:text-white"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-400 hover:text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Imprint
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">hello@büroease.com</li>
                  <li className="text-gray-400">Pfarrkirchen, Germany</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
