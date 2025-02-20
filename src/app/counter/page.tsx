'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Counter(){

    const [counter, setCounter] = useState(0)

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        setCounter(counter + 1)
    }

    const handleSubmitMinus = (e: React.FormEvent)=>{
        e.preventDefault();
        setCounter(counter - 1)
    }

    return(
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
        <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>
            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-col">
                        Incrementar Numero
                </button>
            </form>
            <hr className="p-1"></hr>
            <form onSubmit={handleSubmitMinus}>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition-col">
                        Decrementar Numero
                </button>
            </form>
        </main>
    </div>
    
    )

}