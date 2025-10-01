import React, { ReactNode } from "react";

type ThemeContextData = {
  theme: string;
}

export const ThemeContext = React.createContext<ThemeContextData>({
  theme: "light"
})

type ThemeContextProviderProps = {
  children: ReactNode
}

export default function ThemeContextProvider(props: ThemeContextProviderProps) {
  //
  const theme = "dark";

  return <ThemeContext.Provider value={{theme}}>
    {props.children}
  </ThemeContext.Provider>
}

