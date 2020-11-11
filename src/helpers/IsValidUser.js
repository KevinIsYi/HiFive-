import { data } from '../data/data';

export const isValidUser = (user) => {
    const { users } = data;
    const { userName, userPassword } = user;

    let result = false;

    users.forEach(({ name, password, level }) => {
        console.log(name === userName, password === userPassword);
        if (name === userName && password === userPassword) {
            result = level;
        }
    });

    return result;
}