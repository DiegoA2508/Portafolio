"use client";

import { Github, ExternalLink } from "lucide-react";

type Project = {
    title: string;
    description: string;
    image: string;
    repo: string;
    demo?: string;
    reverse?: boolean;
};

const ProjectCard: React.FC<Project> = ({ 
    title, description,image, repo, demo, reverse= false 
}) => {
    return (
        <div className={`flex flex-col md:items-center md:justify-between md:gap-12 ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
        >
            <img
                src={image}
                alt={title}
                className="w-full md:w-1/2 rounded-xl shadow-md"
            />
            <div className="md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>

                <div className="flex gap-4">
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                        <Github size={20} className="text-white" />
                        Repositorio
                        </a>

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-200 text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                            >
                            <ExternalLink size={20} />
                            Ver Proyecto
                            </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;