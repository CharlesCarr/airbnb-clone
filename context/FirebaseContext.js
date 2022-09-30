import React, { useEffect, useState } from "react";
import { db } from "../utilities/firebase";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

export const FirebaseContext = React.createContext();

export const FirebaseProvider = ({ children }) => {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    const querySnapshot = await getDocs(collection(db, "listings"));

    const result = [];
    querySnapshot.forEach((snap) => {
      result.push(snap.data());
    });

    setAllListings(result);
  };

  return (
    <FirebaseContext.Provider value={allListings}>
      {children}
    </FirebaseContext.Provider>
  );
};
