import { apiClient } from "../libs/axios/apiClient.js";
export const getTodos = async (date) => {
    const res = await apiClient.get("/todos", {
        params: {
            date,
        },
    });
    return res.data;
};
export const createTodo = async (todo) => {
    const res = await apiClient.post("/todos", todo);
    return res.data;
};
