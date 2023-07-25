import { IUser } from 'domain/interfaces/IUser';
export declare class User implements IUser {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    whatsapp: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
    refreshToken: string;
}