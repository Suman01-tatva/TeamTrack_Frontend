import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import type { RootState, AppDispatch } from "../../../app/store";
import type { LoginPayload } from "../types/LoginTypes";
import { LoginForm } from "../components/LoginForm";
import { loginThunk } from "../authThunk";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (values: LoginPayload): Promise<void> => {
    const result = await dispatch(loginThunk(values));
    if (loginThunk.fulfilled.match(result)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-full shadow-xl rounded-2xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs z-1">
          <CircularProgress />
        </div>
      )}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
