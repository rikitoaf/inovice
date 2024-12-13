import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correctly import useNavigate

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy authentication logic
        if (username === "lifestories" && password === "password") {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/home"); // Use navigate instead of history.push
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
            <h2 className="text-2xl mb-4 text-center">Login</h2>
            <div className="mb-4">
                <label className="block mb-2">
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block mb-2">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full"
                    />
                </label>
            </div>
            <button type="submit" className="w-full bg-[#A53573] text-white p-2 rounded">
                Login
            </button>
            <footer className="mt-4 text-center">
                <p>©2024 Agventure Consultancy</p>
            </footer>
        </form>
    );
};

export default LoginPage;
