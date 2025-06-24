export default function Contact() {
    return (
        <section 
            id="Contact" 
            className=" w-screen bg-blue-100 py-20 text-center text-gray-800"
            >
            <h2 className="text-4xl font-bold mb-8">Contacto</h2>
            <p className="text-lg mb-4">
                Si deseas contactarme, puedes escribirme a mi correo electrónico o visitar mis redes sociales.
            </p>
            <p className="text-blue-600 font-semibold text-xl">
                diegoalex.zuniga.m@gmail.com
            </p>

            <div className="mt-6 space-x-4">
                <a href="https://www.linkedin.com/in/diego-alexander-zu%C3%B1iga-aa7a5917b/" target="_blank" className="text-blue-500 hover:underline">
                    LinkedIn 
                </a>
                
                <a 
                    href="https://github.com/DiegoA2508"
                    target="_blank"
                    className="hover:underline text-blue-500">GitHub
                </a>
            </div>
        </section>
    );
}

  