import { blogData } from "../data/blogData";

export const getDataById = (idPost) => {

    return blogData.find(({ id }) => id === idPost);
}