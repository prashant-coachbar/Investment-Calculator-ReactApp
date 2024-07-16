import Header from "./Header";
import UserInput from "./UserInput";
import Results from "./Results";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const values = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 10,
};

function App() {
  const [results, setResults] = useState([]);
  const inputIsValid = values.duration >= 1;

  function getValues(identifier, newValue) {
    values[identifier] = parseFloat(newValue);
  }

  function handleChange(identifier, newValue) {
    getValues(identifier, newValue);
    const res = calculateInvestmentResults(values);
    setResults(res);
  }

  return (
    <>
      <Header />
      <UserInput values={values} onSelect={handleChange} />
      {!inputIsValid && <p className="center">Please Enter a Valid Duration</p>}
      {inputIsValid && <Results result={results} />}
    </>
  );
}

export default App;
