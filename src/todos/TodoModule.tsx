import * as React from "react";
import { addTodo } from "./actions";
import { connect } from "react-redux";
import { TodoList } from "./TodoList";
import * as uuidv1 from "uuid/v1";
import TextField from "material-ui/TextField/TextField";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import Card from "material-ui/Card/Card";
import CardContent from "material-ui/Card/CardContent";
import ListSubheader from "material-ui/List/ListSubheader";
import Button from "material-ui/Button/Button";

type Props = {
  onAddTodo: typeof addTodo;
};

type State = {
  text: string;
};

const enhancer = connect(null, { onAddTodo: addTodo });

class InternalTodoModule extends React.Component<Props, State> {
  state = {
    text: ""
  };

  render() {
    return (
      <Card style={{ maxWidth: 400, margin: 20 }}>
        <CardContent>
          <List dense subheader={<ListSubheader>ToDo list</ListSubheader>}>
            <ListItem>
              <form onSubmit={this._handleSubmit} style={{ width: "100%" }}>
                <TextField
                  autoFocus
                  placeholder="What do you want to do?"
                  type="text"
                  value={this.state.text}
                  onChange={ev => this.setState({ text: ev.target.value })}
                  margin="normal"
                  fullWidth
                />
                <Button
                  type="submit"
                  raised
                  color="primary"
                  disabled={!this.state.text}
                >
                  Add todo
                </Button>
              </form>
            </ListItem>
            <TodoList />
          </List>
        </CardContent>
      </Card>
    );
  }

  private _handleSubmit = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (this.state.text) {
      this.props.onAddTodo(uuidv1(), this.state.text);
      this.setState({ text: "" });
    }
  };
}

export const TodoModule = enhancer(InternalTodoModule);
