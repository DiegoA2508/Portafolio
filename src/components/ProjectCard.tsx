type Props = {
    title: string;
    description: string;
    link: string;
};

export default function ProjectCard({ title, description, link }: Props) {
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </a>
    );
}