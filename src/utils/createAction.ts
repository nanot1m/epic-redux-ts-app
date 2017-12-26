export type ReduxAction<Type, Payload> = {
  type: Type;
  payload: Payload;
};

function createAction<Action extends ReduxAction<any, any>>(
  type: Action["type"]
): ((
  payload: Action["payload"]
) => ReduxAction<Action["type"], Action["payload"]>) {
  return (payload: Action["payload"]) => {
    return { type, payload };
  };
}

export { createAction };
