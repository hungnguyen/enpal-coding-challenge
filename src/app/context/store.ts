import { createContext, useContext } from 'react';

export interface IAppState {
  dachform: string;
  dachfenster: string;
}

export const AppContext = createContext<IAppState | null>(null);

export const AppDispatchContext = createContext<any>(null);

export function useAppContext() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}

export const initState: IAppState = {
  dachform: '',
  dachfenster: '',
};
