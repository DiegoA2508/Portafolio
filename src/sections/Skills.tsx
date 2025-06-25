'use client';

import{
    FileCode,
    ServerCog,
    Code2,
    Atom,
    PaintBucket,
    Database,
    GitMerge,
    TerminalSquare,
    Bug,
    Braces,
}from 'lucide-react';

import { DiPython } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';

import { motion } from 'framer-motion';

const skills =[
    { name: "HTML 5", icon: FileCode },
    { name: "JavaScript", icon: FileCode },
    { name: "PHP", icon: ServerCog },
    { name: "Node.js", icon: Code2 },
    { name: "React", icon: Atom },
    { name: "CSS", icon: PaintBucket },
    { name: "SQL", icon: Database },
    { name: "Git", icon: GitMerge },
    { name: "Bash", icon: TerminalSquare },
    { name: "Java", icon: Braces },
    { name: "Python", icon: DiPython },
    { name: "Docker", icon: FaDocker },
    { name: "Testing", icon: Bug },
];

export default function Skills() {
    return (
        <section 
            id="Skills" 
            className=" w-screen bg-gray-100 py-20 text-center text-gray-800"
        >
            <h2 className="text-4xl font-bold mb-12">Habilidades</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
                {skills.map(({name, icon: Icon},index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1}}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <Icon size={32} className="text-blue-600 mb-2" />
                        <p className="text-sm font-medium">{name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}