import { createStore } from "redux";
import { reducer, IState } from "./reducer";
import { Store } from "react-redux";

export const store = createStore(
  // FIXME wrong reducer definition
  reducer as any,
  // tslint:disable-next-line
  window["__REDUX_DEVTOOLS_EXTENSION__"] &&
    // tslint:disable-next-line
    window["__REDUX_DEVTOOLS_EXTENSION__"]()
) as Store<IState>;
