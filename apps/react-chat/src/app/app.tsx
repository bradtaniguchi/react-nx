import React from 'react';
import { Header } from './core/Header';
import { HeaderContext } from './core/header-context';

export const App = () => {
  return (
    <HeaderContext.Provider value={undefined}>
      <Header></Header>
    </HeaderContext.Provider>
  );
};

export default App;
