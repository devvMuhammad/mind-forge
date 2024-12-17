import { createContext } from "react";

const testContext = createContext({
  testFinished: 0,
  setTestFinished: () => {},
  result: 0,
  setResult: () => {},
  subjectScores: [],
  setSubjectScores: () => {},
});

export default testContext;
