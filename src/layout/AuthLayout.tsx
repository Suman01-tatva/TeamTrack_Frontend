import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden"
        >
            {/* <div className="w-full max-w-md bg-gray-900 "> */}
                <Outlet />
            {/* </div> */}
        </div>
    );
};

export default AuthLayout;
