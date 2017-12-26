import * as React from "react";
import "./App.css";
import { TodoModule } from "./todos/TodoModule";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoModule />
      </div>
    );
  }
}

export default App;
