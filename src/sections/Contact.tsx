export default function Contact() {
    return (
        <section className="py-20 px-4 bg-white">
            <h2 className="text-4xl font-bold text-center mb-8">Contacto</h2>
            <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">
                    Si deseas contactarme
                </p>
                <p className="text-gray-600"> Puedes escribirme a:</p>
                <p className="font-semibold text-blue-600">diegoalex.zuniga.m@gmail.com</p>
                <p className="mt-4">O visita mis redes:</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a 
                        href="https://github.com/DiegoA2508"
                        target="_blank"
                        className="hover:underline text-blue-500">GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/diego-alexander-zu%C3%B1iga-aa7a5917b/"
                        target="_blank"
                        className="hover:underline text-blue-500">LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

  