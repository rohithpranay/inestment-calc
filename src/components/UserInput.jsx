export default function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", Number(event.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", Number(event.target.value))
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", Number(event.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              onChangeInput("duration", Number(event.target.value))
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
