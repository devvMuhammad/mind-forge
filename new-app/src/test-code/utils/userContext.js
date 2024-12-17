"use client";

const { createContext, useContext, useState, useEffect } = require("react");

const userContext = createContext({
  user: { name: "", email: "", test: "" },
  setUser: () => {},
  // subjectMarks:[],
  checkIfUserExists: () => {},
});

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const localUser = JSON.parse(window.localStorage.getItem("user"));
    if (localUser?.name && localUser?.email && localUser?.test) {
      return localUser;
    } else return null;
  }
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(getInitialState);
  console.log(user);
  const checkIfUserExists = (user) => {
    if (!user || !user?.name || !user?.email || !user?.test) {
      return false;
    }
    return true;
  };

  // when user changes, update the local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("oaksdokasodk");
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user, setUser]);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        checkIfUserExists,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
