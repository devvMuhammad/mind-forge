import {
  mcqContext,
  subjectAndQuestionContext,
} from "@/test-code/utils/context";
import React, { useContext } from "react";
// import "../App.css";
// import { mcqContext, subjectAndQuestionContext } from "../context";

const Header = () => {
  const { subjectNumber } = useContext(subjectAndQuestionContext);
  const { mcqArray } = useContext(mcqContext);

  return (
    <header>
      <p className="subject">{mcqArray[subjectNumber].subject}</p>
      <p className="test-type">Demo Test by Mind Forge</p>
      <p className="net-demo">
        <span className="studentID">STUDENTID</span>
        <span className="studentName">(NAME)</span>
      </p>
    </header>
  );
};

export default Header;
