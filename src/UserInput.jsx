function inputLabel(str, text, fn, value) {
  return (
    <p>
      <label>{text}</label>
      <input
        id={str}
        type="number"
        required
        min="0"
        value={value}
        onChange={(event) => fn(str, event.target.value)}
      />
    </p>
  );
}

export default function UserInput({ values, onSelect }) {
  return (
    <section id="user-input">
      <div className="input-group">
        {inputLabel(
          "initialInvestment",
          "INITIAL INVESTMENT",
          onSelect,
          values.initialInvestment
        )}
        {inputLabel(
          "annualInvestment",
          "ANNUAL INVESTMENT",
          onSelect,
          values.annualInvestment
        )}
      </div>
      <div className="input-group">
        {inputLabel(
          "expectedReturn",
          "EXPECTED RETURN",
          onSelect,
          values.expectedReturn
        )}
        {inputLabel("duration", "DURATION", onSelect, values.duration)}
      </div>
    </section>
  );
}
