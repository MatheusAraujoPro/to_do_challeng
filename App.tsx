import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext, Theme } from './src/configurations/Context';
import { Home } from './src/pages/Home';

export default function App() {
  const [theme, setTheme] = useState(Theme.Default);
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Home />
      </ThemeContext.Provider>
    </>
  );
}
