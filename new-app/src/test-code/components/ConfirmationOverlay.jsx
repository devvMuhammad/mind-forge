/*eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import "./ConfirmationOverlay.css";

const ConfirmationOverlay = ({ onFinish, onCancel, loading }) => {
  const overlayRef = useRef(null);

  // const handleKeydown = (event) => {
  //   if (event.keyCode === 27) {
  //     onCancel();
  //   }
  // };
  // const overlayClick = (event) => {
  //   event.target.className === "confirmation-overlay" && onCancel();
  // };
  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeydown, false);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeydown, false);
  //   };
  // }, []);

  return (
    <div
      className="confirmation-overlay"
      ref={overlayRef}
      // onClick={overlayClick}
    >
      <div className="confirmation-box">
        <h3 className="confirmation-text">
          Are you sure you want to submit the test?
        </h3>
        <div className="confirmation-buttons">
          <button onClick={onFinish}>{loading ? "Loading ..." : "Yes"}</button>
          <button onClick={onCancel} disabled={loading}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationOverlay;
