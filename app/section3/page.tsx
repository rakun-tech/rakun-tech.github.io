export default function HowItWorksSection3() {
    return (
        <section id="how-it-works" className="py-16 scroll-mt-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold mb-12 text-center">How it Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Initial Consultation</h3>
                        <p className="text-gray-700">
                            Schedule a meeting with our CTO to define what you need based on your goals.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                            <span className="text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Planning</h3>
                        <p className="text-gray-700">
                            We create a list of features you need based on our initial discussion.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Development</h3>
                        <p className="text-gray-700">
                            We develop the next chunk of features within 2-3 weeks.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                            <span className="text-2xl font-bold">4</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Demo</h3>
                        <p className="text-gray-700">
                            Demonstration of what we built & getting your feedback to make it more accurate.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                            <span className="text-2xl font-bold">5</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Launch</h3>
                        <p className="text-gray-700">
                            Congrats! You have your idea on the market now!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}