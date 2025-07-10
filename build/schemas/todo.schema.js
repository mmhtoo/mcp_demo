import z from "zod";
export const getTodosSchema = {
    date: z
        .string({
        invalid_type_error: "Invalid date format! Please provide a valid date in the format YYYY-MM-DD",
    })
        .describe("Date in YYYY-MM-DD format!")
        .optional(),
};
export const createTodoSchema = {
    date: z
        .string({
        invalid_type_error: "Invalid date format! Please provide a valid date in the format YYYY-MM-DD",
    })
        .describe("Date in YYYY-MM-DD format!")
        .optional(),
    title: z.string().describe("Title of the todo"),
    categories: z.array(z.string()).describe("Categories of the todo").optional(),
    completed: z
        .boolean()
        .describe("Whether the todo is completed or not")
        .optional(),
};
