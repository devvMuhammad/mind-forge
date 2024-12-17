import React, { useContext } from "react";
import testContext from "@/utils/testContext";
import "./Result.css";

const Result = ({ subjectScores }) => {
  const { setTestFinished } = useContext(testContext);
  const [totalScore, totalMCQs] = subjectScores.reduce(
    (acc, elm) => {
      acc[0] += elm.score;
      acc[1] += elm.total;
      return acc;
    },
    [0, 0]
  );
  const percentage = ((totalScore / totalMCQs) * 100).toFixed(2);
  const resetTest = () => {
    setTestFinished(false);
  };
  return (
    <div className="result-page">
      <h1 className="result-heading">Result</h1>
      <table className="result-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Score</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {subjectScores.map((row, index) => (
            <tr key={index}>
              <td>{row.subject}</td>
              <td>{row.score}</td>
              <td>{row.total}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td style={{ fontWeight: "bold" }}>{totalScore}</td>
            <td>{totalMCQs}</td>
          </tr>
          <tr>
            <td colSpan="2" className="percentage-label">
              <strong>Percentage</strong>
            </td>
            <td className="percentage-value">{percentage}%</td>
          </tr>
        </tbody>
      </table>
      <button className="attempt-again" onClick={resetTest}>
        Attempt Again
      </button>
    </div>
  );
};

export default Result;
