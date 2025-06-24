export default function Footer(){
    return (
        <footer className="w-screen bg-white py-6 text-center text-sm text-gray-500 border-t">
            <p>
                © {new Date().getFullYear()} Diego Alexander Zúñiga. Todos los derechos reservados.
            </p>
            <p className="mt-2">
                Creado con <span className="text-red-500">♥</span> por Diego
            </p>

        </footer>
    )
}