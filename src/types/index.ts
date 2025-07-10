declare global {
  export interface Todo {
    id: string;
    title: string;
    date: string;
    completed: boolean;
    categories: string[];
  }
}

export {};
