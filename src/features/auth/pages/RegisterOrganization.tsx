import { useDispatch } from "react-redux";
import { OrganizationRegisterForm } from "../components/OrganizationRegisterForm";
import type { RegisterOrganizationPayload } from "../types/RegisterTypes";
import type { AppDispatch } from "../../../app/store";
import { registerOrganizationThunk } from "../authThunk";
import { useNavigate } from "react-router";

const RegisterOrganization = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterOrganizationPayload) => {
    console.log("Organization Register Submitted:", values);
    const result = await dispatch(registerOrganizationThunk(values));
    if (registerOrganizationThunk.fulfilled.match(result)) {
      navigate("/login");
    }
  };
  
  return (
    <div className="h-full shadow-xl rounded-2xl">
      <OrganizationRegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterOrganization;
