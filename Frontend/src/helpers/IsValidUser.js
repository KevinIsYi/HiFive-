import { data } from '../data/data';

export const isValidUser = (user) => {
    const { users } = data;
    const { userName, userPassword } = user;

    let result = false;

    users.forEach(({ name, password, level }) => {
        if (name === userName && password === userPassword) {
            result = level;
        }
    });

    return result;
}