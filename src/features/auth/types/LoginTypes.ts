export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit: (values: LoginPayload) => void;
}
