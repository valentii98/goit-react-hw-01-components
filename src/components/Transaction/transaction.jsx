import { Table, Head, Body, Row, Data } from './transaction.styled.js';

export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
      <Head>
        <tr>
          <td>Type</td>
          <td>Amount</td>
          <td>Currency</td>
        </tr>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </Body>
    </Table>
  );
};
