import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);

  console.log(resultsData);

  return <div className="center">Results</div>;
}
