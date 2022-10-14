import './App.css';
import { Header } from './Components/Header';
import { BalanceComponent } from './Components/BalanceComponent';
import { ExpenseIncome } from './Components/ExpenseIncome';
import { ListTrans } from './Components/ListTrans';
import { AddTrans } from './Components/AddTrans';

import { GlobalProvider } from './Context/GlobalState';
import { createContext, useState } from 'react';

// Toggle between dark and light mode (incomplete)
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <GlobalProvider>
          <Header/>
            <div className='container'>
              <BalanceComponent />
              <ExpenseIncome /> 
              <ListTrans />
              <AddTrans />
            </div>
        </GlobalProvider>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
