import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USERNAME_1,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    }
}

export const USERINFORMATION = {
    USER: {
        FIRSNAME: 'Enrique',
        LASTNAME: 'Tavares',
        ZIPCODE: '45450'
    }
}

export const ITEMNAME = {
    ITEM: {
        NAME: ''
    }
}