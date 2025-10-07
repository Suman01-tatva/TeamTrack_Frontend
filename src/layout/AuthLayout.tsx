import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden"
        >
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
