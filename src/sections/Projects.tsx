type Project = {
    title: string;
    description: string;
    link: string;
};

const projects: Project[] = [
    {
        title: "CRUD de productos",
        description: "CRUD hecho en Node.js, Python y PHP sin frameworks como una prueba técnica",
        link:"https://github.com/tuusuario/crud-productos",
    },
    {
        title: "Juego en Java",
        description: "Mini-juego hecho con Java y Swing como proyecto académico.",
        link: "https://github.com/tuusuario/juego-java",
    },
];

export default function Projects() {
    return (
        <section className="py-20 px-4 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border p-6 rounded-x1 shadow hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}
    