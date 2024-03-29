export interface SignInType {
    email: string;
    password: string;
}
export interface SignUpType {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export enum responseStatus {
    SUCCESS = 'success',
    ERROR = 'error'
}