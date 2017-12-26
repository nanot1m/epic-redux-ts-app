import * as React from "react";
import { IState } from "../reducer";
import { connect } from "react-redux";
import * as todoActions from "./actions";
import { getTodo } from "./selectors";
import Checkbox from "material-ui/Checkbox/Checkbox";
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import Icon from "material-ui/Icon/Icon";
import ListItemSecondaryAction from "material-ui/List/ListItemSecondaryAction";
import IconButton from "material-ui/IconButton/IconButton";

type OwnProps = {
  id: string;
};

const enhancer = connect(
  (state: IState, { id }: OwnProps) => ({
    todo: getTodo(state, id)
  }),
  todoActions
);

export const TodoListItem = enhancer(
  ({ todo, toggleTodo, removeTodo }) =>
    todo ? (
      <ListItem button onClick={() => toggleTodo({ id: todo.id })}>
        <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
        <ListItemText primary={todo.text} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => removeTodo({ id: todo.id })}>
            <Icon>delete</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ) : null
);
