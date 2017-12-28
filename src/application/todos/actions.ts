import { ReduxAction, createAction } from "../../utils/createAction";

class AddTodoAction implements ReduxAction {
  public readonly type = "todos/ADD"
  constructor(public payload: { id: string; text: string }) {}
}
export const addTodo = (payload: AddTodoAction["payload"]) => new AddTodoAction(payload);

class RemoveTodoAction implements ReduxAction {
  public readonly type = "todos/REMOVE"
  constructor(public payload: { id: string }) {}
}
export const removeTodo = (payload: RemoveTodoAction["payload"]) => new RemoveTodoAction(payload)

class CompleteTodoAction implements ReduxAction {
  public readonly type = "todos/TOGGLE"
  constructor(public payload: { id: string }) {}
}
export const toggleTodo = (payload: CompleteTodoAction["payload"]) => new CompleteTodoAction(payload)

class UpdateTodoAction implements ReduxAction {
  public readonly type = "todos/UPDATE"
  constructor(public payload: { id: string; text: string }) {}
}
export const udpateTodo = (payload: UpdateTodoAction["payload"]) => new UpdateTodoAction(payload);

export type TodoActions =
  | AddTodoAction
  | RemoveTodoAction
  | CompleteTodoAction
  | UpdateTodoAction;
