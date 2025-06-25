import Image from "next/image";

export default function Education() {
    const education = [
        {
            logo: "/UQ.jpg",
            title: "Ingeniería de Sistemas y Computación",
            institution: "Universidad del Qindío",
            year: "2018 - 2024",
        },
        {
            logo: "/Alura.jpg",
            title: "Curso Desarrollo Frontend",
            institution: "Alura Latam",
            year: "2024 - 2025"
        }
    ];

    return (
        <section
            id="Education"
            className="w-screen bg-blue-100 py-20 text-gray-800  text-center"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Formación Académica</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <Image 
                                src={item.logo}
                                alt={item.institution}
                                width={100}
                                height={100}
                                className="w-80 h-80 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-xl text-gray-700 mt-1">{item.institution}</p>
                            <p className="text-sm text-gray-600">{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}