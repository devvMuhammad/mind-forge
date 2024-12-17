import { createContext } from "react";

export const subjectAndQuestionContext = createContext({
  subjectNumber: 0,
  setSubjectNumber: () => {},
  questionNumber: 0,
  setQuestionNumber: () => {},
  otherQuestionNumber: 0,
  setOtherQuestionNumber: () => {},
});

export const mcqContext = createContext({
  mcqArray: [],
  setMcqArray: () => {},
});

export const saveContext = createContext({
  saveEnabled: false,
  setSaveEnabled: () => {},
});

export const dropdownContext = createContext({
  dropdownValue: 0,
  setDropdownValue: () => {},
});
