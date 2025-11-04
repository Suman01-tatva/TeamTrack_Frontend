import { useDispatch, useSelector } from "react-redux";
import { OrganizationRegisterForm } from "../components/OrganizationRegisterForm";
import type { RegisterOrganizationPayload } from "../types/RegisterTypes";
import type { AppDispatch, RootState } from "../../../app/store";
import { registerOrganizationThunk } from "../authThunk";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";

const RegisterOrganization = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const handleSubmit = async (values: RegisterOrganizationPayload) => {
    console.log("Organization Register Submitted:", values);
    const result = await dispatch(registerOrganizationThunk(values));
    if (registerOrganizationThunk.fulfilled.match(result)) {
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
      <OrganizationRegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterOrganization;
