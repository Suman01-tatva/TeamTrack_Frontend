import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../authThunk";
import { UserRegisterForm } from "../components/UserRegisterForm";
import type { RegisterUserPayload } from "../types/RegisterTypes";
import type { AppDispatch, RootState } from "../../../app/store";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";

const RegisterUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const handleSubmit = async (values: RegisterUserPayload): Promise<void> => {
    const result = await dispatch(registerUserThunk(values));
    if (registerUserThunk.fulfilled.match(result)) {
      navigate("/login");
    }
  };
  return (
    <div className="h-full shadow-xl rounded-2xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs z-1">
          <CircularProgress />
        </div>
      )}
      <UserRegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterUser;
