import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import TopFilter from "../components/TopFilter";
import StayGrid from "../components/StayGrid";
import Footer from "../components/Footer";
import ShowMap from "../components/ShowMap";
import MapboxMap from "../components/MapboxMap";

const Home: NextPage = () => {
  const [ showMap, setShowMap ] = useState<boolean>(false);

  return (
    <div className="h-screen">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="px-24 h-screen">
        <TopFilter />
        {showMap ? (<MapboxMap />) : (<StayGrid />)}
        <ShowMap showMap={showMap} setShowMap={setShowMap}/>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
