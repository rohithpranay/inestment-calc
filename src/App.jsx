import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newVal) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newVal,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">
          Please enter valid duration value greater than zero{" "}
        </p>
      )}
    </>
  );
}

export default App;
