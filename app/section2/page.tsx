export default function HowItWorksSection2() {
    return (
        <section id="how-it-works" className="py-16 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold mb-8">How it Works</h2>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
                    <div className="space-y-12">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-semibold">Initial Consultation</h3>
                                <p className="mt-2 text-gray-600">
                                    Schedule a meeting with our CTO to define what you need based on your goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                                <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-semibold">Planning</h3>
                                <p className="mt-2 text-gray-600">
                                    We create a list of features you need based on our initial discussion.
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
                                    Demonstration of what we built & getting your feedback to make it more accurate.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full relative z-10">
                                <span className="text-blue-600 font-bold">5</span>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-semibold">Launch</h3>
                                <p className="mt-2 text-gray-600">
                                    Congrats! You have your idea on the market now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}