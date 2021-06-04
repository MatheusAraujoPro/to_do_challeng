import { createContext, useContext } from 'react';

export enum Theme {
    Dark = 'Dark',
    Default = 'Default'
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Default, setTheme: theme => console.warn('no theme provider')});
export const useTheme = () => useContext(ThemeContext);