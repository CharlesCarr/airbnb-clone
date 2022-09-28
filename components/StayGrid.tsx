import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../utilities/firebase";
// import { getListings } from "../utilities/getListings";
import StayGridItem from './StayGridItem';

function StayGrid() {
  const [allListings, setAllListings] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  // console.log(allListings);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    const querySnapshot = await getDocs(collection(db, "listings"));
  
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snap: any) => {
      // console.log(`${doc.id} => ${doc.data().img}`);
      result.push(snap.data());
    });

    setAllListings(result);
  };

  return (
    <div className="flex justify-between">
      {allListings.length < 1 && <p>Loading...</p>}
      {allListings.length > 0 && allListings.map((listing: any) => <StayGridItem key={listing.id} listing={listing}/>)}
    </div>
  );
}

export default StayGrid;
