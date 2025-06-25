"use client";

import {
    Gamepad2,
    Music,
    Dumbbell,
    Film,
    Dribbble,
} from "lucide-react";
import React from "react";
import Image from "next/image";

const hobbies = [
    { name: "Videojuegos", icon: Gamepad2 },
    { name: "Fútbol", image: "/Football.png" },
    { name: "Música", icon: Music },
    { name: "Ejercicio", icon: Dumbbell },
    { name: "Películas", icon: Film },
    { name: "Street football", icon: Dribbble },
];

export default function Hobbies() {
    return (
        <section
            id="Hobbies"
            className="w-screen bg-gray-100 py-20 text-center text-gray-800"
        >
            <h2 className="text-4xl font-bold mb-12">Hobbies</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
               {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
                    >
                        {"icon" in hobby && hobby.icon ? (
                            // Render icon component
                            React.createElement(hobby.icon, { className: "w-8 h-8 mb-2" })
                        ) : hobby.image ? (
                            // Render image
                            <Image
                                width={32}
                                height={32}
                                src={hobby.image}
                                alt={hobby.name}
                                className="w-8 h-8 mb-2"
                            />
                        ) : null}
                        <p className="text-sm font-medium mt-1">{hobby.name}</p>
                    </div>
                ))}
            </div>
        </section>
);
} 
