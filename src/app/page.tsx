import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="p-4">
      <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
            <div className="flex items-center gap-8">
                <Link href="/">
                    <Image
                        src="/logo1.png"
                        alt="Logo"
                        width={100}
                        height={24}
                    />
                </Link>

                <div className="flex gap-6">
                    <Link href="/" className="text-white hover:text-gray-200">
                        Home
                    </Link>
                    <Link href="/counter" className="text-white hover:text-gray-200">
                        COUNTER
                    </Link>
                    <Link href="/colors" className="text-white hover:text-gray-200">
                        COLORS
                    </Link>

                </div>
            </div>
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4x1 font-bold text-gray-800">Bienvenidos a FCKNZS</h1>

        <p className="text-lg text-gray-600 mt-2">Descubre mas sobre FCKNZS</p>

        <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
          Ver Mas
        </button>
      </div>
    </div>
  );
}
