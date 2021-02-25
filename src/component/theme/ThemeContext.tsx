import * as React from 'react';

export interface IThemeState {
  theme: string;
}

export interface IThemeAction {
  type: string;
}

/*function themeReducer(state: IThemeState, action: IThemeAction): IThemeState {
  switch (action.type) {
    case 'lighten': {
      return {theme: 'light'}
    }
    case 'darken': {
      return {theme: 'dark'}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}


// @ts-ignore
function ThemeContext({children}) {
  const ThemeStateContext = React.createContext({});
  const ThemeDispatchContext = React.createContext({});
  const [state, dispatch] = React.useReducer(themeReducer, {theme: 'light'});

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );

}*/

const ThemeContext = React.createContext({
  theme: 'light',
  themeToggle: () => {}
});

export default ThemeContext;
