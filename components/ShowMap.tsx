import { MapIcon, ListBulletIcon } from "@heroicons/react/24/solid";

function ShowMap({ showMap, setShowMap }: any) {
  return (
    <div
      className="fixed flex bottom-28 bg-stone-900 text-white rounded-3xl px-5 py-3 space-x-2 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={() => setShowMap(!showMap)}
    >
      {showMap ? <p>Show list</p> : <p>Show map</p>}
      {showMap ? (
        <ListBulletIcon className="w-5" />
      ) : (
        <MapIcon className="w-5" />
      )}
    </div>
  );
}

export default ShowMap;
