export default function PlanTable({ coin }) {
  return (
    <div className="bw-table">
      <div className="bw-table__scroll">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>{coin.symbol} Plus</th>
              <th>Monthly Investment Bonus</th>
              <th>Maturity Period</th>
              <th>Maturity Amount</th>
            </tr>
          </thead>
          <tbody>
            {coin.plans.map((p) => (
              <tr key={p.no}>
                <td>{p.no}</td><td>{p.amount}</td><td>{p.bonus}</td><td>{p.months}</td><td>{p.maturity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
