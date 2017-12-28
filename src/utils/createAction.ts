export interface ReduxAction {
  readonly type: string;
  payload: any;
}

export function createAction<Action extends ReduxAction>(Klass: {
  new (payload: any): Action;
}) {
  return (payload: ReduxAction["payload"]) => new Klass(payload);
}
