'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ColorKey = 'gray' | 'red' | 'blue' | 'green' | 'orange';

export default function Colors(){

    const [color, setColor] = useState<ColorKey>("gray");
    const colors = {
        gray: "bg-gray-500",
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        orange: "bg-orange-500"
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
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className={`w-[600px] h-32 ${colors[color]}`}></div>
                <hr></hr>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setColor("red")}
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Red
                    </button>
                    <button 
                        onClick={() => setColor("blue")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                        Blue
                    </button>
                    <button 
                        onClick={() => setColor("green")}
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                        Green
                    </button>
                    <button 
                        onClick={() => setColor("green")}
                        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Orange
                    </button>
                </div>
            </div>
        </div>
        

    
    )

}