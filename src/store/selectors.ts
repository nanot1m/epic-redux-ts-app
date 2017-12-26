import { IState } from "./reducer";
import { ITodoState } from "../todos/reducer";

export const getTodosState = (state: IState): ITodoState => state.todos;
