import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';

export const ListTrans = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
        <strong>
          <h3>Transaction History</h3>
        </strong>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}
