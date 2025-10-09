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