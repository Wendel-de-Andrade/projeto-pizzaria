export class AuthTokenError extends Error{
    constructor(){
        super('Error eith authentication token.')
    }
}