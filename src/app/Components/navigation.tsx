'use client';

import Link from "next/link";
import Image from "next/image"
import { useUser } from "../Context/UserContext";

export default function Navigation(){
    const { user } = useUser();
    return(
        <div>
            <header>
                <nav className="w-full px-8 py-1 flex items-center justify-between bg-blue-600 shadow-sm">
                    <div className="flex items-center gap-8">
                        <Link href="/">
                            <Image
                                src="/logo1.png"
                                alt="Logo"
                                width={25}
                                height={6}
                            />
                        </Link>

                        <div className="flex gap-6">
                            <Link href="/" className="text-white hover:text-gray-200">
                                HOME
                            </Link>
                            <Link href="/Counter" className="text-white hover:text-gray-200">
                                COUNTER
                            </Link>
                            <Link href="/Colors" className="text-white hover:text-gray-200">
                                COLORS
                            </Link>
                        </div>
                    </div>
                    <div>
                        {user ? (
                            <span>Welcome, {user.name}</span>
                        ):(
                           <Link href="/SignUp" className="text-white hover:text-gray-200">
                            SignUp
                            </Link> 
                        )}
                    </div>
                    
                </nav>
            </header>
        </div>
    )
}