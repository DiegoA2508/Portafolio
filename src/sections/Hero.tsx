import Image from 'next/image';
import { Github, Linkedin, Instagram, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="Hero" 
      className="w-screen bg-gray-100 py-20"
      >
        <div className="text-center max-w-3xl mx-auto px-4">       
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-center">
            Hola, mi nombre es <span className="text-blue-600">Diego</span> 
            </h1>
          <p className="text-xl text-gray-700 mb-6 text-justify text-center md:text-left">
              Soy ingeniero de sistemas con enfoque fullstack, apasionado por el desarrollo de videojuegos.
              Actualmente participo en proyectos personales con tecnologías como Java, Node.js y React.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://github.com/DiegoA2508" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
              <Github size={24} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/diego-alexander-zu%C3%B1iga-aa7a5917b/" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
              <Linkedin size={24} />
              LinkedIn 
            </a> 
            <a href="https://www.instagram.com/diego_alexander.m/" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
              <Instagram size={24} />
              Instagram
            </a>
            <a href="/cv.pdf" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
              <FileText size={24} />
              Currículum
            </a>
          </div>

          <div className="flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-200">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
    </section>
  );
}