import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import StayGridItem from "./StayGridItem";

function StayGrid() {
  const listings = useContext(FirebaseContext);
  // console.log(listings);

  return (
    <div className="flex justify-between">
      {listings.length > 0 ? (
        listings.map((listing: any) => (
          <StayGridItem key={listing.id} listing={listing} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StayGrid;
