"use client";

import {useState} from "react";
import Link from "next/link";

export default function SignUp(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [registeredUser, setRegisteredUser] = useState<{name: string; email: string; password: string} | null>(null);

    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});

        if(e.target.name === "password"){
            validatePassword(e.target.value);
        }
    };

    const validatePassword = (password: string) => {
        const minLength = /.{8,}/; // almenos 8 caracteres
        const hassUpperCase = /[A-Z]/; // Al menos una letra mayuscula
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // al menos un caracter especial

        if (!minLength.test(password)){
            setPasswordError("La contraseña debe tener al menos 8 caracteres.");
        } else if (!hassUpperCase.test(password)){
            setPasswordError("La contraseña debe contener al menos una letra mayuscula.");
        } else if(!hasSpecialChar.test(password)){
            setPasswordError("La contraseña debe contener al menos un caracter especial.");
        } else {
            setPasswordError(""); // si es valida, limpiar el error
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(passwordError){
            alert("Corrige los errores antes de registrarte");
            return;
        }

        // guardar el usuario registrado en el estado
        setRegisteredUser(formData);

        //limpiear el formulario
        setFormData({name: "", email: "", password: ""});

        alert("Registro exitoso"); 
    };

    return(
        <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            {registeredUser && (
                <div className="absolute top-4 right-4 bg-white p-4 shadow-lg rounded-md">
                    <p className="text-sm font-semibold">Usuario registrado:</p>
                    <p className="text-gray-800"><strong>Nombre:</strong>{registeredUser.name}</p>
                    <p className="text-gray-800"><strong>Email:</strong>{registeredUser.email}</p>
                    <p className="text-gray-800"><strong>Contraseña:</strong>{registeredUser.password}</p>
                </div>
            )}
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2x1 font-semibold text-center mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={`w-full p-2 border ${passwordError ? "border-red-500" : "border-gray-300"} rounded-md focus:ring focus:ring-blue-300`}
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}
                    </div>
                    <div className="flex justify-between mt-4">
                        <Link href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                            Regresar
                        </Link>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                            disabled={!!passwordError} // Deshabilitar si hay error en la contra
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}