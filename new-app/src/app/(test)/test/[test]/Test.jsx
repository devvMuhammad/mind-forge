"use client";
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect, useMemo, useContext } from "react";
import testContext from "@/test-code/utils/testContext";
import {
  mcqContext,
  subjectAndQuestionContext,
  saveContext,
  dropdownContext,
} from "@/test-code/utils/context";
import Header from "@/test-code/components/Header";
import FirstSection from "@/test-code/components/FirstSection";
import SecondSection from "@/test-code/components/SecondSection";
import OptionsSection from "@/test-code/components/OptionsSection";
import Functionalities from "@/test-code/components/Functionalities";
import Ending from "@/test-code/components/Ending";
// import { useUserContext } from "@/utils/userContext";
// import { useRouter } from "next/navigation";

function Test({ mcqBank }) {
  // const router = useRouter();
  // const { user, checkIfUserExists } = useUserContext();
  // console.log("cecks if the user is present", user);
  // const router = useRouter();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!checkIfUserExists()) {
  //     router.replace("/");
  //   } else {
  //     setLoading(false); // Set loading to false once user is authenticated
  //   }
  // }, [user, checkIfUserExists, router]);

  // if (loading) {
  //   return; // Display a loading indicator until authentication is done
  // }

  const [subjectNumber, setSubjectNumber] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [otherQuestionNumber, setOtherQuestionNumber] = useState(1);
  const [outOf, setOutOf] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("All");
  const [allMCQs, setAllMCQs] = useState(mcqBank);
  const [mcqArray, setMcqArray] = useState(mcqBank);
  const allMCQsNumber = useMemo(() => {
    return mcqBank.reduce((acc, elm) => acc + elm.questions.length, 0);
  }, [mcqBank]);

  const { testFinished } = useContext(testContext);

  // useEffect(() => {

  // }, []);

  const subjectAndQuestionContextObject = {
    subjectNumber,
    setSubjectNumber,
    questionNumber,
    setQuestionNumber,
    otherQuestionNumber,
    setOtherQuestionNumber,
  };
  const mcqContextObject = {
    mcqArray,
    setMcqArray,
  };
  const saveContextObject = {
    saveEnabled,
    setSaveEnabled,
  };

  const dropdownContextObject = {
    dropdownValue,
    setDropdownValue,
  };

  useEffect(() => {
    setMcqArray((prevState) => {
      return prevState.map((subject) => {
        subject.questions.forEach((mcq) => {
          mcq.selectedOption = "";
          mcq.category = "unattempted";
        });
      });
    });
    setQuestionNumber(0);
    setOtherQuestionNumber(1);
    setSubjectNumber(0);
    // setUser
  }, [testFinished]);

  function filterMcqArray(category) {
    let filteredMCQs = mcqArray.reduce((acc, elm) => {
      const filteredQuestions = elm.questions.filter(
        (question) => question.category === category
      );
      if (filteredQuestions.length !== 0) {
        acc.push({ ...elm, questions: filteredQuestions });
      }
      return acc;
    }, []);

    let totalQuestions = 0;
    filteredMCQs.map((elm) => (totalQuestions += elm.questions.length));
    if (totalQuestions === 0) {
      setDropdownValue("All");
      return;
    }
    setMcqArray(filteredMCQs);
    setOutOf(totalQuestions);
    setSubjectNumber(0);
    setQuestionNumber(0);
    setOtherQuestionNumber(1);
  }

  useEffect(() => {
    if (dropdownValue === "Attempted") filterMcqArray("attempted");
    if (dropdownValue === "Reviewable") filterMcqArray("reviewable");
    if (dropdownValue === "Unattempted") filterMcqArray("unattempted");
    if (dropdownValue === "All") {
      setSubjectNumber(0);
      setQuestionNumber(0);
      setOutOf(allMCQsNumber);
      setMcqArray(allMCQs);
    }
  }, [dropdownValue]);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  // if (!checkIfUserExists(user)) {
  //   router.replace("/");
  //   return;
  // }

  return (
    <>
      <mcqContext.Provider value={mcqContextObject}>
        <subjectAndQuestionContext.Provider
          value={subjectAndQuestionContextObject}
        >
          <dropdownContext.Provider value={dropdownContextObject}>
            <Header />
            <FirstSection outOf={outOf} />
            <SecondSection />
            <saveContext.Provider value={saveContextObject}>
              <OptionsSection />
              <Functionalities outOf={outOf} />
            </saveContext.Provider>
          </dropdownContext.Provider>
          <Ending />
        </subjectAndQuestionContext.Provider>
      </mcqContext.Provider>
    </>
  );
}

export default Test;
