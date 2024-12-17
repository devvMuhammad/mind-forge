/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
// import {
//   dropdownContext,
//   mcqContext,
//   saveContext,
//   subjectAndQuestionContext,
// } from "../context";
import { toast } from "react-hot-toast";
import saveButton from "../images/Save.png";
import saveButtonDisabled from "../images/DisabledSave.png";
import nextButton from "../images/next.png";
import nextButtonDisabled from "../images/nextDisabled.png";
import previousButton from "../images/previousButton.png";
import previousButtonDisabled from "../images/previousDisabled.png";
import lastButton from "../images/last.png";
import firstButton from "../images/First.png";
import nextSectionButton from "../images/NextSection.png";
import nextSectionButtonDisabled from "../images/NextSectionDisabled.png";
import previousSectionButton from "../images/PreviousSection.png";
import previousSectionDisabled from "../images/PreviousSectionDisabled.png";
import reviewButton from "../images/Review.png";
import reviewButtonDisabled from "../images/DisabledReview.png";
import ConfirmationOverlay from "./ConfirmationOverlay";
import Countdown from "./Timer";
// import { useNavigate } from "react-router-dom";
// import { submitResult } from "../services/helpers";
import {
  dropdownContext,
  mcqContext,
  saveContext,
  subjectAndQuestionContext,
} from "@/test-code/utils/context";
import Image from "next/image";
import LoadingOverlay from "./LoadingOverlay";
import { submitResult } from "@/test-code/utils/submitResult";
import { useRouter } from "next/navigation";
import testContext from "@/test-code/utils/testContext";
import { useUserContext } from "@/test-code/utils/userContext";
// import { useAuthContext } from "../auth/userContext";

const Functionalities = ({ outOf }) => {
  //Navigate
  // const navigate = useNavigate();
  //States
  const [loading, setLoading] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(true);
  const [nextSectionEnabled, setNextSectionEnabled] = useState(true);
  const [previousEnabled, setPreviousEnabled] = useState(false);
  const [previousSectionEnabled, setPreviousSectionEnabled] = useState(false);
  const [reviewEnabled, setReviewEnabled] = useState(false);
  const [allDropdownValue, setAllDropdownValue] = useState();
  const [showOverlay, setShowOverlay] = useState(false);
  //Context
  const {
    questionNumber,
    setQuestionNumber,
    subjectNumber,
    setSubjectNumber,
    otherQuestionNumber,
    setOtherQuestionNumber,
  } = useContext(subjectAndQuestionContext);
  const { dropdownValue, setDropdownValue } = useContext(dropdownContext);
  const { mcqArray, setMcqArray } = useContext(mcqContext);
  const { saveEnabled, setSaveEnabled } = useContext(saveContext); // saveState enabled in optionsSection
  // const {
  //   userData: { name, testType, email },
  //   resetData,
  // } = useAuthContext();
  // const { setTestFinished } = useContext(testContext);
  //Important constants.
  let currentSubjectMCQsLength = mcqArray[subjectNumber].questions.length;
  let numberOfSubjects = mcqArray.length;
  const subjectMCQs = mcqArray.map((elm) => elm.questions.length);
  //UseEffect
  useEffect(() => {
    setPreviousEnabled(
      subjectNumber === 0 && questionNumber === 0 ? false : true
    );

    setNextSectionEnabled(() => {
      if (dropdownValue !== "All") {
        return false;
      } else {
        return subjectNumber === numberOfSubjects - 1 ? false : true;
      }
    });
    setPreviousSectionEnabled(() => {
      if (dropdownValue !== "All") {
        return false;
      } else {
        return subjectNumber === 0 ? false : true;
      }
    });
  }, [subjectNumber, questionNumber, dropdownValue]);

  useEffect(() => {
    // console.log("bbb");
    // console.log(subjectNumber, questionNumber);
    setNextEnabled(() => {
      if (dropdownValue !== "All") {
        //Next button should never be disabled for 'unattem','reviewable' and 'attemepted'
        return true;
      } else {
        return subjectNumber === numberOfSubjects - 1 &&
          questionNumber === currentSubjectMCQsLength - 1
          ? false
          : true;
      }
    });
  }, [subjectNumber, questionNumber, dropdownValue, mcqArray]);
  // Handler functions.
  const nextHandler = () => {
    setReviewEnabled(false);
    if (dropdownValue !== "All") {
      if (otherQuestionNumber >= outOf) {
        //Hitting next at last question should send you to 'all'.
        setDropdownValue("All");
        setNextEnabled(true);
        return;
      }
      setOtherQuestionNumber((num) => num + 1);
    }
    if (questionNumber === currentSubjectMCQsLength - 1) {
      setSubjectNumber((num) => (num >= numberOfSubjects ? 0 : num + 1)); //Reset for last subject, otherwise increment normally
      setQuestionNumber(0);
      return;
    }
    setQuestionNumber((num) => num + 1);
  };
  const prevHandler = () => {
    setReviewEnabled(false);
    if (dropdownValue !== "All") {
      setOtherQuestionNumber((num) => num - 1); // it has to decrement, no matter what.
    }
    if (questionNumber === 0 && subjectNumber > 0) {
      const previousSubjectMCQsLength =
        mcqArray[subjectNumber - 1].questions.length;
      //At first question, the prev button should send you to the previous secion.
      setSubjectNumber((num) => (num <= 0 ? 0 : num - 1));
      setQuestionNumber(previousSubjectMCQsLength - 1);
      return;
    }
    setQuestionNumber((num) => num - 1);
  };

  const saveHandler = () => {
    attemptMCQ();
    if (dropdownValue === "Reviewable") {
      // setSaveEnabled(true);
      setReviewEnabled(false);
      nextHandler();
      return;
    }
    setReviewEnabled(dropdownValue === "Reviewable" ? false : true);
    setSaveEnabled(false);
  };

  const reviewHandler = () => {
    reviewMCQ();
    setReviewEnabled(false);
  };

  const nextSectionHandler = () => {
    setReviewEnabled(false);
    if (subjectNumber === numberOfSubjects - 1) {
      setSubjectNumber(0); //return to first section.
      return;
    }
    setSubjectNumber((num) => num + 1);
    setQuestionNumber(0);
  };

  const previousSectionHandler = () => {
    setReviewEnabled(false);
    if (subjectNumber === 0) {
      //Disable the button.
      return;
    }
    setSubjectNumber((num) => num - 1);
    setQuestionNumber(0);
  };

  const firstHandler = () => {
    setReviewEnabled(false);
    if (dropdownValue !== "All") {
      setOtherQuestionNumber(1);
    }
    setSubjectNumber(0);
    setQuestionNumber(0);
  };

  const lastHandler = () => {
    setReviewEnabled(false);
    if (dropdownValue !== "All") {
      setOtherQuestionNumber(outOf);
    }
    setSubjectNumber(numberOfSubjects - 1);
    setQuestionNumber(mcqArray[numberOfSubjects - 1].questions.length - 1);
    // setAllDropdownValue(outOf);
  };

  const updateQuestionCategory = (category) => {
    return () => {
      setMcqArray((prevState) => {
        const copyOfMcqArray = [...prevState];
        copyOfMcqArray[subjectNumber].questions[questionNumber].category =
          category;
        return copyOfMcqArray;
      });
    };
  };
  const attemptMCQ = updateQuestionCategory("attempted");
  const reviewMCQ = updateQuestionCategory("reviewable");

  const dropdownChangeHandler = (event) => {
    setDropdownValue(event.target.value);
  };

  function convertDropdownToQuestionNumber(value, subjectMCQs) {
    let cumulativeSum = 0;
    const breakpointsArray = subjectMCQs.reduce((acc, curr, i) => {
      cumulativeSum += curr;
      acc.push(cumulativeSum);
      return acc;
    }, []);
    if (value <= breakpointsArray[0]) {
      return [value, 0];
    }
    let result;
    if (
      value > breakpointsArray[breakpointsArray.length - 2] &&
      value <= breakpointsArray[breakpointsArray.length - 1]
    ) {
      result = value - breakpointsArray[breakpointsArray.length - 2];
      return [result, breakpointsArray.length - 1];
    }
    let iteration;
    breakpointsArray.forEach((elm, i) => {
      if (value > breakpointsArray[i] && value <= breakpointsArray[i + 1]) {
        iteration = i + 1;
        result = value - breakpointsArray[i];
      }
    });
    return [result, iteration];
  }

  //! must edit this function afterwards

  //   // setTestFinished(true);
  // };

  useEffect(() => {
    setAllDropdownValue(1);
  }, [dropdownValue]);

  useEffect(() => {
    const [properQuestionNumber, iteration] = convertDropdownToQuestionNumber(
      allDropdownValue,
      subjectMCQs
    );
    if (dropdownValue !== "All") setOtherQuestionNumber(allDropdownValue);
    setQuestionNumber(properQuestionNumber - 1);
    setSubjectNumber(iteration);
  }, [allDropdownValue, dropdownValue]);

  const allDropdownChangeHandler = (event) => {
    setAllDropdownValue(event.target.value);
  };

  const { setTestFinished } = useContext(testContext);
  // const { setUser } = useUserContext();
  const router = useRouter();
  async function finishTest() {
    setLoading(true);
    try {
      const response = await submitResult(mcqArray);
      if (!response.success) throw new Error(response.message);
      // setTest
      setTestFinished(false);
      // setUser(null);
      router.replace("/end");
      toast.success("Your result has been submitted!");
      console.log(response);
    } catch (err) {
      console.log("error while submiting on client", err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="final-section">
      <div className="functionalities">
        <div className="dropdown-container">
          <Countdown finishTest={finishTest} />
          <select
            name="status"
            className="dropdown allDropdown"
            onChange={allDropdownChangeHandler}
            value={allDropdownValue}
          >
            {[...Array(outOf)].map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
          <select
            name="status"
            className="dropdown"
            onChange={dropdownChangeHandler}
            value={dropdownValue}
          >
            <option value="All">All</option>
            <option value="Attempted">Attempted</option>
            <option value="Reviewable">Reviewable</option>
            <option value="Unattempted">Unattempted</option>
          </select>
        </div>
        <div className="buttons-container">
          <div className="buttons-list">
            <button
              className="func-button"
              // className="functionality-image"
              onClick={saveHandler}
              disabled={!saveEnabled}
            >
              <Image
                // width={60}
                // type="image"
                width={60}
                className="cursor-pointer disabled:cursor-not-allowed"
                src={saveEnabled ? saveButton : saveButtonDisabled}
                alt="save"
              />
            </button>
            <button
              className="func-button"
              // className="p-0 border-none"
              onClick={nextHandler}
              disabled={!nextEnabled}
            >
              <Image
                width={60}
                // type="image"
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={nextEnabled ? nextButton : nextButtonDisabled}
                alt="save"
              />
            </button>
            <button
              className="func-button"
              // className="p-0 border-none"
              onClick={prevHandler}
              disabled={!previousEnabled}
            >
              <Image
                width={60}
                // type="image"
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={previousEnabled ? previousButton : previousButtonDisabled}
                alt="save"
              />
            </button>
            <button
              className="func-button"
              onClick={reviewHandler}
              disabled={!reviewEnabled}
            >
              <Image
                width={60}
                // type="image"
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={reviewEnabled ? reviewButton : reviewButtonDisabled}
                alt="save"
              />
            </button>
            <button
              className="func-button"
              onClick={nextSectionHandler}
              disabled={!nextSectionEnabled}
            >
              <Image
                width={60}
                // type="image"
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={
                  nextSectionEnabled
                    ? nextSectionButton
                    : nextSectionButtonDisabled
                }
                alt="save"
              />
            </button>
            <button
              className="func-button"
              onClick={previousSectionHandler}
              disabled={!previousSectionEnabled}
            >
              <Image
                width={60}
                // type="image"
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={
                  previousSectionEnabled
                    ? previousSectionButton
                    : previousSectionDisabled
                }
                alt="save"
              />
            </button>
            <button onClick={firstHandler}>
              <Image
                width={60}
                // type="image"
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={firstButton}
                alt="save"
              />
            </button>
            <button className="func-button" onClick={lastHandler}>
              <Image
                width={60}
                // type="image
                className="functionality-image cursor-pointer disabled:cursor-not-allowed"
                src={lastButton}
                alt="save"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="finish-test">
        <p
          className="finishing-paragraph"
          onClick={() => {
            setShowOverlay(true);
          }}
        >
          Click here to <span>FINISH</span> your test!
        </p>
        {loading && <LoadingOverlay />}
        {showOverlay && (
          <ConfirmationOverlay
            loading={loading}
            onCancel={() => {
              setShowOverlay(false);
            }}
            onFinish={finishTest}
          />
        )}
      </div>
    </section>
  );
};

export default Functionalities;
