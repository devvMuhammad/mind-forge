import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./intro.css"; // Import the CSS file
import { useAuthContext } from "../../client/src/auth/userContext";

function Intro() {
  const {
    userData: { name },
  } = useAuthContext();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  return (
    <div className="intro-container">
      <div>
        <h1 className="instructions-heading" style={{ textAlign: "left" }}>
          Welcome, {name}!
        </h1>
        <div className="instructions-container">
          <h2 className="instructions-heading">
            Please read the following instructions carefully
          </h2>
          <p>
            Test Format: <strong>80</strong> Maths, <strong>60</strong> Physics,{" "}
            <strong>10 </strong>Intelligence
          </p>
          <p>
            - Kindly attempt this test on <strong>PC / LAPTOP</strong> only to
            get maximum benefit. This app has no responsiveness for
            mobile/tablet.
          </p>
          <p>
            - You will have only <strong>120</strong> minutes to finish it,
            otherwise it'll be submitted automatically
          </p>
          <p>
            - Attempt all the <strong>150</strong> questions as there isn't any
            negative marking.
          </p>
          <p>
            - Once you attempt the test, your login id will be{" "}
            <strong>expired.</strong>
          </p>
          <p>
            - You can submit the test only <strong>ONCE.</strong>
          </p>

          <p>
            - Please do not <strong>cheat</strong>, by doing so you are taking
            away someone's right.
          </p>
          <div className="checkbox-container">
            <input
              onChange={() => setChecked((prev) => !prev)}
              type="checkbox"
              name=""
              id="check"
              className="checkbox-input"
            />
            <label htmlFor="check" className="checkbox-label">
              I agree to the terms and conditions mentioned above
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/test", { replace: true });
        }}
        disabled={!checked}
        className="start-button"
      >
        Click to Attempt
      </button>
    </div>
  );
}

export default Intro;
