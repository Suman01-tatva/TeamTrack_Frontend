export interface RegisterOrganizationPayload {
    name: string;
    email: string;
    password: string;
    role: number; // Assuming role is represented as a number
}

export interface RegisterUserPayload {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterUserFormProps {
    onSubmit: (values: RegisterUserPayload) => void;
}

export interface RegisterOrgFormProps {
    onSubmit: (values: RegisterOrganizationPayload) => void;
}