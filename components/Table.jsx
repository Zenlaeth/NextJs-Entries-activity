const Table = (props) => {
  const { entry } = props
  const entries = Object.entries(entry)
  let result = 0
  let positiveTotal = 0
  let negativeTotal = 0
  for (let [itemId, { amount }] of entries) {
    if (amount > 0) {
      positiveTotal = positiveTotal + amount
    } else {
      negativeTotal = negativeTotal + amount
    }
    result += amount
  }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Incoming</th>
            <th>Outgoing</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([itemId, { amount, description }]) => {
            let positiveAmount = 0
            let negativeAmount = 0
            if (amount > 0) {
              positiveAmount = positiveAmount + amount + ", " + description
            } else {
              negativeAmount = negativeAmount + amount + ", " + description
            }
            return (
              <tr key={itemId}>
                <td className="text-success">
                  {positiveAmount == 0 ? null : positiveAmount}
                </td>
                <td className="text-danger">
                  {negativeAmount == 0 ? null : negativeAmount}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-success">Total : {positiveTotal}</th>
            <th className="text-danger">Total : {negativeTotal}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Result : {result}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
