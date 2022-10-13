import './App.css';
import { Header } from './Components/Header';
import { Balance_component } from './Components/BalanceComponent';
import { Expense_income } from './Components/ExpenseIncome';
import { List_trans } from './Components/ListTrans';
import { Trans_add } from './Components/AddTrans';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance_component />
        <Expense_income /> 
        <List_trans />
        <Trans_add />
      </div>
    </GlobalProvider>
  );
}

export default App;
