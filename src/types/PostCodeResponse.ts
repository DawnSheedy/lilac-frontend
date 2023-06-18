import { User } from "./User";

interface TokenResponse {
    token: string;
}

export type PostCodeResponse = TokenResponse & User