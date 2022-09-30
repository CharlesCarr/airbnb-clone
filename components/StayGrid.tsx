import StayGridItem from "./StayGridItem";

function StayGrid({ activeListings }: any) {
  console.log(activeListings);

  return (
    <>
      {activeListings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-6 z-10">
          {activeListings.map((listing: any) => (
            <StayGridItem key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default StayGrid;
