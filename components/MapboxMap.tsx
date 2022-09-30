import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect, useState } from "react";
import getCenter from "geolib/es/getCenter";
import { FirebaseContext } from "../context/FirebaseContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

function MapboxMap() {
  const [selectedLocation, setSelectedLocation] = useState<any>({});
  console.log(selectedLocation);

  // center of map - (initializing to NYC for testing purposes)
  const [center, setCenter] = useState<any>({
    latitude: 40.7128,
    longitude: -74.006,
  });
  // get array of objects from Firestore
  const listings = useContext(FirebaseContext);

  const longLatArr = listings.map((listing: any) => {
    return {
      latitude: listing.latitude,
      longitude: listing.longitude,
    };
  });

  useEffect(() => {
    // find center of all location coordinates
    setCenter(getCenter(longLatArr));
  }, []);

  return listings.length > 0 ? (
    <section className="cursor-pointer w-screen h-full">
      <Map
        initialViewState={{
          ...center,
          zoom: 3.5,
        }}
        // style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/charliecarr4/cl8kujpf1001l14qitfyqlv48"
        mapboxAccessToken={process.env.mapbox_key}
      >
        {listings.map((result: any) => {
          return (
            <>
              <Marker
                key={result.id}
                longitude={result.longitude}
                latitude={result.latitude}
              >
                <FontAwesomeIcon
                  icon={faMapPin}
                  className="w-5 h-5 text-red-600 cursor-pointer text-2xl animate-bounce"
                  onClick={() => setSelectedLocation(result)}
                />
              </Marker>
              {selectedLocation.longitude === result.longitude ? (
                <Popup
                  onClose={() => setSelectedLocation({})}
                  closeOnClick={false}
                  latitude={result.latitude}
                  longitude={result.longitude}
                >
                  {result.location}
                </Popup>
              ) : (
                false
              )}
            </>
          );
        })}
      </Map>
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default MapboxMap;
