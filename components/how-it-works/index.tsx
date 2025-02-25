import Image from "next/image";

interface HowItWorksCardProps {
    title: string;
    description: string;
    image: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ title,
    description,
    image
}) => {

    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image className="object-cover w-full rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-s-lg" src={image} alt={title} width={8} height={8} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default HowItWorksCard;