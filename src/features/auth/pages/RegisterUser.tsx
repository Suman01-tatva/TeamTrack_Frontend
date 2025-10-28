import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../authThunk';
import { UserRegisterForm } from '../components/UserRegisterForm'
import type { RegisterUserPayload } from '../types/RegisterTypes';
import type { AppDispatch } from '../../../app/store';
import { useNavigate } from 'react-router';

const RegisterUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const handleSubmit = async (values: RegisterUserPayload): Promise<void> => {
    const result = await dispatch(registerUserThunk(values));
    if(registerUserThunk.fulfilled.match(result)){
        navigate("/login");
    }
  };
  return (
    <div className='h-full shadow-xl rounded-2xl'>
        <UserRegisterForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default RegisterUser;