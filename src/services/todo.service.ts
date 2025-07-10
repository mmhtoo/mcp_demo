import { apiClient } from "../libs/axios/apiClient.js";

export const getTodos = async (date?: string) => {
  const res = await apiClient.get<Todo[]>("/todos", {
    params: {
      date,
    },
  });
  return res.data;
};

export const createTodo = async (todo: Todo) => {
  const res = await apiClient.post("/todos", todo);
  return res.data;
};
