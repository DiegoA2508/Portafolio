import{
    FileCode,
    ServerCog,
    Code2,
    Atom,
    PaintBucket,
}from 'lucide-react';

const skills =[
    { name: "HTML 5", icon: FileCode },
    { name: "JavaScript", icon: FileCode },
    { name: "PHP", icon: ServerCog },
    { name: "Node.js", icon: Code2 },
    { name: "React", icon: Atom },
    { name: "CSS", icon: PaintBucket },
];

export default function Skills() {
    return (
        <section 
            id="Skills" 
            className=" w-screen bg-white py-20 text-center text-gray-800"
        >
            <h2 className="text-4xl font-bold mb-12">Habilidades</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
                {skills.map(({name, icon: Icon},index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <Icon size={32} className="text-blue-600 mb-2" />
                        <p className="text-sm font-medium">{name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}