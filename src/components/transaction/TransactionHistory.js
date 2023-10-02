import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={styles['transaction-history']}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles.type}>{type}</td>
          <td className={styles.amount}>{amount}</td>
          <td className={styles.currency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
