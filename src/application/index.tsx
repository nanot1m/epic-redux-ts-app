import * as React from "react";
import "./App.css";
import { TodoModule } from "./todos/TodoModule";

import { Provider } from "react-redux";
import { store } from "./store";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoModule />
        </div>
      </Provider>
    );
  }
}
