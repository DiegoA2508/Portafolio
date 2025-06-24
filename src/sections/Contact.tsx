import { RiWhatsappLine } from 'react-icons/ri';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section 
            id="Contact" 
            className=" w-screen bg-blue-100 py-20"
            >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                <p className="text-gray-700 mb-8">
                    ¿Te gustaría colaborar conmigo o simplemente saludar? ¡Estoy disponible!
                </p>

                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="mailto:diegoalex.zuniga.m@gmail.com"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
                    >
                        <Mail size={20} />
                        Enviar un correo
                    </a>
                    <a 
                        href="www.linkedin.com/in/diegoa25"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900 transition"
                    >
                        <Linkedin size={20} />
                        Conectar en LinkedIn
                    </a>
                    <a 
                        href="https://wa.me/573154178166?text=Hola%20Diego%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900 transition"
                        >
                        <RiWhatsappLine size={20} />
                        Enviar un mensaje por WhatsApp
                    </a>
                </div> 
                
            </div>
        </section>
    );
}

export default Contact;

  