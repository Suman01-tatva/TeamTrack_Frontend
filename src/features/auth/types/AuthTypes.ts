export interface User {
    id: number;
    email: string;
    name: string;
    role: number;
    dbName: string;
    databaseId: number;
}

export interface AuthState {
    isAuthenticated: boolean;
    isLoading?: boolean;
    user: User | null;
    error: string | null;
    isOrganization: boolean;
}
