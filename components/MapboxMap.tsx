import Map from "react-map-gl";
import Marker from "react-map-gl";
import Popup from "react-map-gl";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../utilities/firebase";
import getCenter from "geolib/es/getCenter";

function MapboxMap() {
  // center of map - (initializing to NYC for testing purposes)
  const [center, setCenter] = useState<any>({
    latitude: 40.7128,
    longitude: -74.006,
  });
  // get array of objects from Firestore
  const [allListings, setAllListings] = useState<any>([]);
  console.log(allListings);

  useEffect(() => {
    getListings();

    if (allListings.length > 0) {
      const longLatArr = allListings.map((listing: any) => {
        return {
          latitude: listing.latitude,
          longitude: listing.longitude,
        };
      });
      console.log(longLatArr);
      // find center of all location coordinates
      const center = getCenter(longLatArr);
      console.log(center);
      setCenter(center);
    }
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

  // transform into a new array of objs
  /*


  Example HERE: 

    newObj = [
      { latitude: 52.516272, longitude: 13.377722 },
      { latitude: 51.515, longitude: 7.453619 },
      { latitude: 51.503333, longitude: -0.119722 },
    ];

  */

  return allListings.length > 0 ? (
    <section className="cursor-pointer w-screen h-full">
      <Map
        initialViewState={{
          ...center,
          zoom: 5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/charliecarr4/cl8kujpf1001l14qitfyqlv48"
        mapboxAccessToken={process.env.mapbox_key}
      >
        {allListings.map((result: any) => {
          return (
            <div key={result.id}>
              <Marker
              longitude={result.longitude}
              latitude={result.latitude}
              // offsetLeft={-20}
              // offsetRight={-10}
              >
                <p>XX</p>
              </Marker>
            </div>
          );
        })}
      </Map>
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default MapboxMap;
