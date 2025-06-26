import ProjectCard from "@/components/ProjectCard";
import { FC } from "react";

const projects = [
    {
        title: "Org",
        description: "CRUD de una organizacion con React, TypeScript y Tailwind CSS.",
        image: "/CRUD.png",
        repo:"https://github.com/DiegoA2508/Curso-React-",
        demo: "https://curso-react-pllxwwlhr-diegos-projects-6ae11404.vercel.app/",
    },
    {
        title: "Unilocal",
        description: "Proyecto academico, una app de localizacion de locales con Java, Angular y Bootstrap.",
        image: "/Unilocal.png",
        repo: "https://github.com/Nicolas0730/Proyecto-Programaci-n-Avanzada-2024-1",
    },
    {
        title:"Proxima pelicula de Marvel",
        description: "Pagina web que muestra la proxima pelicula de Marvel, consumiendo una Api, desarrollado con PHP, HTML, CSS y JavaScript.",
        image: "/Marvel.png",
        repo: "https://github.com/DiegoA2508/Curso---PHP",
    }
];



const Projects: FC = () => {
    return (
        <section id="Projects" className="w-screen py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
                
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            reverse={index % 2 !== 0} // Alterna el orden de los proyectos
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
    