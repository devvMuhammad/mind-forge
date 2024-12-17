import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../client/src/auth/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import Test from "../../client/src/Test";

function TestRoot() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const {
    userData: { token },
    setUserData,
  } = useAuthContext();

  useEffect(() => {
    setLoading(true);
    try {
      //chat-app-100.vercel
      fetch("https://chat-app-100.vercel.app/mcqs", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            setUserData((prev) => ({ ...prev, token: "" }));
            throw new Error();
          }
          return res.json();
        })
        .then((data) => {
          setData(data.data);
          // console.log(data);
        })
        .catch(() => {
          navigate("/", { replace: true });
        })
        .finally(() => setLoading(false));
    } catch (err) {}
  }, []);

  if (loading || !data.length) return <h1>Loading ...</h1>;

  return <Test mcqBank={data} />;
}

export default TestRoot;
