export interface ProfileForm {
    id: string
    name: string
    email: string
}

export interface ProfileResponse {
    data: {
        id: number;
        name: string;
        email: string;
}
}