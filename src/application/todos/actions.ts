import { ReduxAction, createAction } from "../../utils/createAction";

type AddTodoAction = ReduxAction<"todos/ADD", { id: string; text: string }>;
export const addTodo = createAction<AddTodoAction>("todos/ADD");

type RemoveTodoAction = ReduxAction<"todos/REMOVE", { id: string }>;
export const removeTodo = createAction<RemoveTodoAction>("todos/REMOVE")

type CompleteTodoAction = ReduxAction<"todos/TOGGLE", {id: string}>
export const toggleTodo = createAction<CompleteTodoAction>("todos/TOGGLE")

type UpdateTodoAction = ReduxAction<"todos/UPDATE", { id: string; text: string }>;
export const udpateTodo = createAction<UpdateTodoAction>("todos/UPDATE");

export type TodoActions =
  | AddTodoAction
  | RemoveTodoAction
  | CompleteTodoAction
  | UpdateTodoAction;
