import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoCard({
  img,
  location,
  title,
  rating,
  cost,
  distance,
  latitude,
  longitude,
  category,
}: any) {

    console.log(img);

  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img[0]} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          (Brief description coming soon!) Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae veniam sed assumenda pariatur voluptatibus ipsam. enim reprehenderit sint laboriosam maiores optio eaque, possimus velit rerum, cupiditate placeat eius amet!
        </p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {rating}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{`$${cost} / night`}</p>
            {/* May grab actual date range and pass into this to get real total for number of days */}
            <p className="text-right font-extralight">{`$${cost * 3} total`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
