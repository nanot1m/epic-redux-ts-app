import { Record } from "immutable";
import { todoReducer, todosInitialState } from "./todos/reducer";
import { IActions } from "./actions";

const State = Record({
  todos: todosInitialState
});

const _state = (false as true) && State();
export type IState = typeof _state;

const initialState: IState = new State();

export const reducer = (
  state: IState = initialState,
  action: IActions
): IState => state
  .update("todos", todos => todoReducer(todos, action))
