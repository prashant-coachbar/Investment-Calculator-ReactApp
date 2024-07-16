function headerCells() {
  return (
    <tr>
      <th>Year</th>
      <th>Investment Value</th>
      <th>Interest(Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
  );
}

function bodyCells({
  year,
  valueEndOfYear,
  interest,
  totalInterest,
  totalInvested,
}) {
  return (
    <tr id={year} key={year}>
      <td>{year}</td>
      <td>{valueEndOfYear}</td>
      <td>{interest}</td>
      <td>{totalInterest}</td>
      <td>{totalInvested}</td>
    </tr>
  );
}

export default function Results({ result }) {
  //   console.log(result);
  const array = result.map((obj) => bodyCells(obj));
  return (
    <table id="result">
      <thead>{headerCells()}</thead>
      <tbody>{array}</tbody>
    </table>
  );
}
