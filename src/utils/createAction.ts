interface ReduxAction<Type, Payload> {
  readonly type: Type;
  payload: Payload;
}

export function actionCreator<T extends ReduxAction<string, {}>>(Ctor: {
  new (payload: T["payload"]): T;
}) {
  return (payload: T["payload"]): T => new Ctor(payload);
}

export function actionType<Payload, Type>(type: Type) {
  return class implements ReduxAction<Type, Payload> {
    static readonly Type = type;
    public readonly type = type;
    constructor(public payload: Payload) {}
  };
}
