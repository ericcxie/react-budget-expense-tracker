import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Balance_component = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4>Current Balanace</h4>
        <h1>${total}</h1>
    </>
  )
}
