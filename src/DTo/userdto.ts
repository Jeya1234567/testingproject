export interface UserDTO {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface UserLoginDTO {
    email: string;
    password: string;
}