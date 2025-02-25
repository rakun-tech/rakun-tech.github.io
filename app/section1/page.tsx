export default function HowItWorksSection1() {
    return (
        <section id="how-it-works" className="py-16 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold mb-8">How it Works</h2>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold">Initial Consultation</h3>
                        <p className="mt-2 text-gray-600 text-center">
                            Schedule a meeting with our CTO to define what you need based on your goals.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold">Planning</h3>
                        <p className="mt-2 text-gray-600 text-center">
                            We create a list of features you need based on our initial discussion.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold">Development</h3>
                        <p className="mt-2 text-gray-600 text-center">
                            We develop the next chunk of features within 2-3 weeks.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold">Demo</h3>
                        <p className="mt-2 text-gray-600 text-center">
                            Demonstration of what we built & getting your feedback to make it more accurate.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 font-bold">5</span>
                        </div>
                        <h3 className="text-xl font-semibold">Launch</h3>
                        <p className="mt-2 text-gray-600 text-center">
                            Congrats! You have your idea on the market now!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}