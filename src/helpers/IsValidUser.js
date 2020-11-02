import { data } from '../data/data';

export const isValidUser = (user) => {
    const { users } = data;
    const { userName, userPassword } = user;

    return users.some(({ name, password }) => name === userName && password === userPassword);
}