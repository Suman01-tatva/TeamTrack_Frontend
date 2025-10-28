import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../../app/store";
import { useEffect } from "react";

export default function Home() {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold">Welcome to My Project</h1>
            <p className="text-2xl mb-4">
                This is a simple project built with React and Redux.
            </p>
            <div>
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
