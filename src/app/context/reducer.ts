import { IAppState, useAppDispatch } from './store';

enum ActionType {
  SetDachForm = 'SET_DACHFORM',
  SetDachFenster = 'SET_DACHFENSTER',
}

interface IAction {
  type: ActionType;
  payload: string;
}

export function appReducer(app: IAppState, action: IAction) {
  switch (action.type) {
    case ActionType.SetDachForm: {
      return {
        ...app,
        dachform: action.payload,
      } as IAppState;
    }
    case ActionType.SetDachFenster: {
      return {
        ...app,
        dachfenster: action.payload,
      } as IAppState;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function setDachform(value: string, dispatch: any) {
  dispatch({
    type: ActionType.SetDachForm,
    payload: value,
  } as IAction);
}

export function setDachfenster(value: string, dispatch: any) {
  dispatch({
    type: ActionType.SetDachFenster,
    payload: value,
  } as IAction);
}
