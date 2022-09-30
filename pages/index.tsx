import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import TopFilter from "../components/TopFilter";
import StayGrid from "../components/StayGrid";
import Footer from "../components/Footer";
import ShowMap from "../components/ShowMap";
import MapboxMap from "../components/MapboxMap";
import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

const Home: NextPage = () => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const [filterSet, setFilterSet] = useState<string>("");
  const [activeListings, setActiveListings] = useState<any>([]);
  const allListings = useContext(FirebaseContext);
  const filteredListings = allListings.filter(
    (list: any) => list.category.toLowerCase() === filterSet.toLowerCase()
  );

  useEffect(() => {
    if (filterSet) {
      setActiveListings(filteredListings);
    } else {
      setActiveListings(allListings);
    }
  }, [filterSet, allListings]);

  return (
    <div className="h-screen">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="px-24 h-screen">
        <TopFilter filterSet={filterSet} setFilterSet={setFilterSet} />
        {showMap ? (
          <MapboxMap activeListings={activeListings} />
        ) : (
          <StayGrid
          activeListings={activeListings}
          />
        )}
        <ShowMap showMap={showMap} setShowMap={setShowMap} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
