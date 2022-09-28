import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "./firebase";

const getListings = async () => {
  const querySnapshot = await getDocs(collection(db, "listings"));

  const result: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnapshot.forEach((snap: any) => {
    // console.log(`${doc.id} => ${doc.data().img}`);
    result.push(snap.data());
  });

  // console.log(result);

  return result;
};

export { getListings };
