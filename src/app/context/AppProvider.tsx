import React, { ReactNode, useReducer } from 'react';
import { appReducer } from './reducer';
import { AppContext, AppDispatchContext, IAppState } from './store';

interface AppProviderProps {
  children: ReactNode;
  initialState: IAppState;
}

export const AppProvider: React.FunctionComponent<AppProviderProps> = ({
  children,
  initialState,
}: AppProviderProps) => {
  const [appContext, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={appContext}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};
