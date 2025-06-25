import ProjectCard from "@/components/ProjectCard";
import { FC } from "react";

const projects = [
    {
        title: "CRUD de productos",
        description: "CRUD hecho en Node.js, Python y PHP sin frameworks como una prueba técnica",
        image: "/crud-productos.png",
        repo:"https://github.com/tuusuario/crud-productos",
        demo: "https://crud-productos-demo.vercel.app",
    },
    {
        title: "Juego en Java",
        description: "Mini-juego hecho con Java y Swing como proyecto académico.",
        image: "/juego-java.png",
        repo: "https://github.com/tuusuario/juego-java",
    },
];



const Projects: FC = () => {
    return (
        <section id="Projects" className="w-full py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-6">
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
    