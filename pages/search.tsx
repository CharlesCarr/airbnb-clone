import { useRouter } from "next/router";
import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { FirebaseContext } from "../context/FirebaseContext";
import InfoCard from "../components/InfoCard";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, guestNumber }: any = router.query;

  const allListings = useContext(FirebaseContext);

  const formattedStartDate = format(new Date(startDate), "MMMM dd yyyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestNumber} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {guestNumber} number of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {/* map over array of listings (limited in backend/db so prob just map all listing I have?) */}
            {allListings.map(
              ({
                id,
                img,
                location,
                title,
                rating,
                cost,
                distance,
                latitude,
                longitude,
                category,
              }: any) => (
                <InfoCard
                  key={id}
                  img={img}
                  location={location}
                  title={title}
                  rating={rating}
                  cost={cost}
                  distance={distance}
                  latitude={latitude}
                  longitude={longitude}
                  category={category}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
