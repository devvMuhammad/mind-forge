/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
// import {
//   subjectAndQuestionContext,
//   mcqContext,
//   saveContext,
//   dropdownContext,
// } from "../context";
import Option from "./Option";
import {
  dropdownContext,
  mcqContext,
  saveContext,
  subjectAndQuestionContext,
} from "@/test-code/utils/context";

const OptionsSection = () => {
  const { dropdownValue } = useContext(dropdownContext);
  const { subjectNumber, questionNumber } = useContext(
    subjectAndQuestionContext
  );
  const { setSaveEnabled } = useContext(saveContext);
  const { mcqArray, setMcqArray } = useContext(mcqContext);
  const selectedOption =
    mcqArray[subjectNumber].questions[questionNumber].selectedOption;

  useEffect(() => {
    const currentQuesionCategory =
      mcqArray[subjectNumber].questions[questionNumber].category;
    // console.log(currentQuesionCategory);
    setSaveEnabled(() => {
      if (currentQuesionCategory === "unattempted" && selectedOption !== "") {
        return true;
      } else if (dropdownValue === "Reviewable") {
        return true;
      } else {
        return false;
      }
    });
  }, [subjectNumber, questionNumber, dropdownValue]);

  const updateSelectedOption = (option) => {
    setMcqArray((prevState) => {
      const copyOfMcqArray = [...prevState];
      copyOfMcqArray[subjectNumber].questions[questionNumber].selectedOption =
        option;
      return copyOfMcqArray;
    });
  };
  const updateKaro = (newSelectedOption) => {
    updateSelectedOption(newSelectedOption);
  };

  return (
    <section id="options-section">
      {mcqArray[subjectNumber].questions[questionNumber].options.map((elm) => (
        <Option
          option={elm}
          key={elm}
          checked={elm === selectedOption}
          onUpdate={updateKaro}
        />
      ))}
    </section>
  );
};

export default OptionsSection;
