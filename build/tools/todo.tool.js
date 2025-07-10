import dayjs from "dayjs";
import { server } from "../libs/mcp/mcp.server.js";
import { createTodoSchema, getTodosSchema } from "../schemas/todo.schema.js";
import { createTodo, getTodos } from "../services/todo.service.js";
import { randomUUID } from "crypto";
server.tool("get-todos-with-option-date", "Get toos with option date", getTodosSchema, async ({ date }) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const todos = await getTodos(formattedDate);
    if (todos.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: `No todos found for ${formattedDate}`,
                },
            ],
        };
    }
    const mappedTodos = todos
        .map((todo) => [
        `ID: ${todo.id}`,
        `Title: ${todo.title}`,
        `Date: ${todo.date}`,
        `Completed: ${todo.completed}`,
        `Categories: ${todo.categories.join(", ")}`,
    ])
        .join("\n");
    return {
        content: [
            {
                type: "text",
                text: "Here is the result: \n " + mappedTodos,
            },
        ],
    };
});
server.tool("create-new-todo", "Create a new todo", createTodoSchema, async ({ title, categories, completed, date }) => {
    try {
        const targetDate = date || dayjs().format("YYYY-MM-DD");
        const id = randomUUID().slice(0, 8).toUpperCase();
        const newTodo = {
            title,
            categories: categories || ["Default"],
            completed: completed || false,
            date: targetDate,
            id: randomUUID().slice(0, 8).toUpperCase(),
        };
        await createTodo(newTodo);
        return {
            content: [
                {
                    type: "text",
                    text: `Todo created successfully with ID: ${id}`,
                },
            ],
        };
    }
    catch (e) {
        return {
            content: [
                {
                    type: "text",
                    text: `Error: ${e?.message || "Failed to save todo"}`,
                },
            ],
        };
    }
});
