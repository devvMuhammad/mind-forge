"use client";
import React, { createContext, useState } from "react";

// Create the user context object
interface UserType {
  name: string;
  email: string;
}

interface UserContextType {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

// Create the user context
export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

// Create the user context provider
export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>({ name: "", email: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return React.useContext(UserContext);
}
