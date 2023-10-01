import './TransactionHistory.css';

export const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
      <thead className="thead">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className="type">{type}</td>
              <td className="amount">{amount}</td>
              <td className="currency">{currency}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
