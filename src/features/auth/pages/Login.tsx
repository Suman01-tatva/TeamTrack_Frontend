import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import type { RootState, AppDispatch } from "../../../app/store";
import type { LoginPayload } from "../types/LoginTypes";
import { login } from "../authSlice";
import type { User } from "../types/AuthTypes";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    
        useEffect(() => {
            if (isAuthenticated) {
                navigate("/dashboard");
            }
        }, [isAuthenticated, navigate]);
    
    const handleLogin = async (values: LoginPayload): Promise<void> => {
        const user :User = {
            ...values,
            id: "",
        };
        dispatch(login(user));
        navigate("/dashboard");
    };

    return (
        <div className="h-full">
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}