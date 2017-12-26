import { Record } from "immutable";

interface TodoProps {
  id: string;
  text: string;
  completed: boolean;
}
export const Todo = Record<TodoProps>({
  id: "",
  text: "",
  completed: false
});

const _todo = (false as true) && Todo();
export type ITodo = typeof _todo;

export const TodoUtils = {
  toggle: (todo: ITodo) => todo.set("completed", !todo.completed),
  update: (todo: ITodo, text: string) => todo.set("text", text)
};
