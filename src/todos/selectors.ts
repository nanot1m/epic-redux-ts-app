import { ITodo } from "./Todo";
import { Seq } from "immutable";
import { IState } from "../store/reducer";
import { getTodosState } from "../store/selectors";

export const getAllTodos = (state: IState): Seq.Indexed<string> =>
  getTodosState(state).keySeq();

export const getUncompletedTodos = (state: IState): Seq.Indexed<ITodo> =>
  getTodosState(state).toIndexedSeq().filterNot(x => x.completed);

export const getCompleteTodos = (state: IState): Seq.Indexed<ITodo> =>
  getTodosState(state).toIndexedSeq().filter(x => x.completed);

export const getTodo = (state: IState, id: string): ITodo | undefined =>
  getTodosState(state).get(id);
