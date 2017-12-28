import { actionCreator, actionType } from "../../utils/createAction";

export class AddTodoAction extends actionType<{id: string, text: string}, "todos/ADD">("todos/ADD") {}
export class RemoveTodoAction extends actionType<{ id: string }, "todos/REMOVE">("todos/REMOVE") {}
export class CompleteTodoAction extends actionType<{ id: string }, "todos/TOGGLE">("todos/TOGGLE") {}
export class UpdateTodoAction extends actionType<{ id: string; text: string }, "todos/UPDATE">("todos/UPDATE") {}

export type TodoActions =
  | AddTodoAction
  | RemoveTodoAction
  | CompleteTodoAction
  | UpdateTodoAction;

export const addTodo = actionCreator(AddTodoAction)
export const removeTodo = actionCreator(RemoveTodoAction)
export const toggleTodo = actionCreator(CompleteTodoAction)
export const udpateTodo = actionCreator(UpdateTodoAction)
