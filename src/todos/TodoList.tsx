import * as React from "react";
import { connect } from "react-redux";
import { getAllTodos } from "./selectors";
import { IState } from "../store/reducer";
import { TodoListItem } from "./TodoListItem";
import List from "material-ui/List/List";

const enhancer = connect((state: IState) => ({
  todos: getAllTodos(state)
}));

export const TodoList = enhancer(props => (
  <List dense>{props.todos.map(id => <TodoListItem key={id} id={id} />)}</List>
));
