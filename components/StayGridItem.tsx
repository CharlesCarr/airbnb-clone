import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import ImageCarousel from "./ImageCarousel";
// import useRouter from "next/router";
import Link from "next/link";

function StayGridItem({ listing }: any) {
  return (
    <Link href={"/listings/" + listing.id.toString()}>
      <div className="text-black text-xs">
        <div className="relative">
          <ImageCarousel src={listing.img} />
          <HeartIcon className="absolute top-3 right-3 text-white w-6" />
        </div>

        <div className="mt-2">
          <div className="flex">
            <p className="flex-1 font-semibold">{listing.location}</p>
            <div className="flex">
              <StarIcon className="text-black w-4" />
              <p className="ml-1">{listing.rating}</p>
            </div>
          </div>
          <div>
            <p className="text-slate-600">{`${listing.distance} miles`}</p>
            <p className="text-slate-600">{listing.availability}</p>
            <p className="mt-1">
              <span className="font-semibold">{`$${listing.cost}`}</span> night
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default StayGridItem;
