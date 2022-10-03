import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getListing = async ( id: any ) => {
  const docRef = doc(db, "listings", id);
  console.log(docRef);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
