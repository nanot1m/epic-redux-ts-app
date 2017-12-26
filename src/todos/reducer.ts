import { Map } from "immutable";
import { ITodo, Todo, TodoUtils } from "./Todo";
import { IActions } from "../store/actions";

export type ITodoState = Map<string, ITodo>;

export const todosInitialState = Map<string, ITodo>()
  .set("0", Todo({ id: "0", text: "Say hello" }))
  .set("1", Todo({ id: "1", text: "Delete this" }));

export const todoReducer = (
  state: ITodoState = todosInitialState,
  action: IActions
): ITodoState => {
  switch (action.type) {
    case "todos/ADD":
      return state.set(
        action.payload.id,
        Todo({ id: action.payload.id, text: action.payload.text })
      );

    case "todos/UPDATE_TODO":
      return state.update(action.payload.id, todo =>
        TodoUtils.update(todo, action.payload.text)
      );

    case "todos/REMOVE":
      return state.delete(action.payload.id);

    case "todos/TOGGLE":
      return state.update(action.payload.id, TodoUtils.toggle);

    default:
      return state;
  }
};
