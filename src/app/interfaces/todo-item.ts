import { SubTodoItem } from "./sub-todo-item";

export interface TodoItem {
    title: string;
    completed?: boolean;
    subItems?: SubTodoItem[];
}