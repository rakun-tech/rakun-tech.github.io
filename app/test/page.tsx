import HowItWorksCard from "@/components/how-it-works";

const steps = [
    {
        title: "Initial Meeting",
        description: "Schedule a meeting with our tech lead to define what you need based on your goals.",
        image: "/images/how-it-works/calendar.svg",
    },
    {
        title: "Planning",
        description: "We create a list of features you need based on our initial discussion.",
        image: "/images/how-it-works/plan.svg",
    },
    {
        title: "Development",
        description: "We develop the next chunk of features within 2-3 weeks.",
        image: "/images/how-it-works/code.svg",
    },
    {
        title: "Demo",
        description: "Demonstration of what we built & getting your feedback to make it more accurate.",
        image: "/images/how-it-works/demo.svg",
    },
    {
        title: "Launch",
        description: "Congrats! You have your idea on the market now!",
        image: "/images/how-it-works/launch.svg",
    },
]

export default function HowItWorksSection1() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                steps.map((step, index) => (
                    <HowItWorksCard key={index} title={step.title} description={step.description} image={step.image} />
                ))
            }
        </div>
    );
}