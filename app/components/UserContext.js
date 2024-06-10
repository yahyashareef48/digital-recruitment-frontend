"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({ loggedIn: false, email: "", image: "", id: "" });

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    loggedIn: false,
    email: null,
    image: null,
    id: null,
  });

  useEffect(() => {
    getUserData(setUserData, userData);
  }, []);

  const updateUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <UserContext.Provider value={{ user: userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;

async function getUserData(setUserData, userData) {
  try {
    const response = await fetch("http://localhost:4598/login", {
      credentials: "include",
    });

    const data = await response.json();

    setUserData({
      loggedIn: data.email ? true : false,
      email: data.email,
      image: data.picture,
      id: data.id,
    });
  } catch (error) {
    console.error("Error white fetching user data:", error);
  }
}

export async function logoutUser(updateUserData) {
  const response = await fetch("http://localhost:4598/logout", {
    credentials: "include",
  });

  const data = await response.text();

  console.log(data);

  updateUserData({ loggedIn: false });
}
