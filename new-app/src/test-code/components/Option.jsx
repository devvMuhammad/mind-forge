/* eslint-disable react-hooks/exhaustive-deps */
import { saveContext } from "@/test-code/utils/context";
import React, { useContext } from "react";
// import { saveContext } from "../context";

const Option = ({ option, checked, onUpdate }) => {
  const { setSaveEnabled } = useContext(saveContext);

  const optionChangeHandler = (event) => {
    setSaveEnabled(true);
    onUpdate(option);
  };

  return (
    <div className="option">
      <input
        type="radio"
        name={"options"}
        value={option}
        onChange={optionChangeHandler}
        checked={checked}
      />
      <textarea
        className="option-text-area"
        rows="3"
        spellCheck="false"
        readOnly={true}
        value={option}
      />
    </div>
  );
};

export default Option;
