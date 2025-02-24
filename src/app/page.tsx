import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4x1 font-bold text-gray-800">Bienvenidos a ContaAI</h1>

        <p className="text-lg text-gray-600 mt-2">Descubre mas sobre ContaAI</p>

        <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
          Ver Mas
        </button>
      </div>
    </div>
  );
}
