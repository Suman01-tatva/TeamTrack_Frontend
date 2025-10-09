export interface User {
    email: string;
    name: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    loading?: boolean;
    user: User | null;
    error: string | null;
}
