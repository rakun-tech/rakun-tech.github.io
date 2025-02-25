"use client";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="hover:text-blue-600 transition-all duration-300"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="hover:text-blue-600 transition-all duration-300"
              >
                How it Works
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 transition-all duration-300"
              >
                Previous Projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button and menu */}
            <div className="md:hidden">
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile menu dropdown */}
              {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="#services"
                      className="hover:text-blue-600 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#how-it-works"
                      className="hover:text-blue-600 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      How it Works
                    </a>
                    <a
                      href="#projects"
                      className="hover:text-blue-600 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Previous Projects
                    </a>
                    <a
                      href="#contact"
                      className="hover:text-blue-600 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex items-center justify-between px-8 py-24 max-w-7xl mx-auto mt-16 scroll-mt-16"
      >
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Do you have a business idea?</h1>
          <p className="text-lg text-gray-700">
            Turn your vision into reality with our MVP development service. We
            help entrepreneurs and innovators transform their business ideas
            into functional, market-ready products.
          </p>
        </div>
        <div className="w-1/2 hidden md:flex justify-center">
          <svg
            className="w-96 h-96"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <p className="text-lg text-gray-700">Services content goes here</p>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">How it Works</h2>
          <div className="relative">
            <div className="absolute left-[2rem] top-8 h-[calc(100%-4rem)] w-0.5 bg-gray-200"></div>

            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">
                    Initial Consultation & Planning
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Schedule a meeting with our CTO to define what you need
                    based on your goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">
                    Planning the First Version of Your App
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We create a list of features you need based on our initial
                    discussion.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Development</h3>
                  <p className="mt-2 text-gray-600">
                    We develop the next chunk of features within 2-3 weeks.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Demo</h3>
                  <p className="mt-2 text-gray-600">
                    Demonstration of what we built & getting your feedback to
                    make it more accurate.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Repeat</h3>
                  <p className="mt-2 text-gray-600">
                    Repeat 3. and 4. steps for 2 months.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Launch MVP</h3>
                  <p className="mt-2 text-gray-600">
                    Congrats! You have your idea on the market now! You can
                    validate your business idea with this version now.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                  <span className="text-blue-600 font-bold">7</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Enhance the App</h3>
                  <p className="mt-2 text-gray-600">
                    Enhancing the launched app with feedback from end-users on
                    the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Previous Projects</h2>
          <p className="text-lg text-gray-700">Project showcases go here</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg text-gray-700">Contact form goes here</p>
        </div>
      </section>
    </div>
  );
}
