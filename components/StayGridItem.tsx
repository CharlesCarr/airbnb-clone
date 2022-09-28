import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import ImageCarousel from "./ImageCarousel";

function StayGridItem({ listing }: any) {
  console.log("testing", listing);
  return (
    <div className="w-1/5 text-black h-full text-xs">

      <div className="relative h-1/3">
        <ImageCarousel src={listing.img} />
        <HeartIcon className="absolute top-3 right-3 text-white w-6"/>
      </div>

      <div className="h-1/3 mt-2">
        <div className="flex">
          <p className="flex-1 font-semibold">{listing.location}</p>
          <div className="flex">
            <StarIcon className="text-black w-4"/>
            <p className="ml-1">{listing.rating}</p>
          </div>
        </div>
        <div>
          <p className="text-slate-600">{`${listing.distance} miles`}</p>
          <p className="text-slate-600">{listing.availability}</p>
          <p className="mt-1"><span className="font-semibold">{`$${listing.cost}`}</span> night</p>
        </div>
      </div>
    </div>
  );
}

export default StayGridItem;
