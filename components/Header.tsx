import Image from "next/image";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header({ placeholder }: any) {
  const [searchInput, setSearchInput] = useState<string>("");
  console.log(searchInput);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [guestNumber, setGuestNumber] = useState<any>(1);

  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchHandler = () => {
    // not only navigating to the search page but passing data through the query params (from input fields state)
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-7c0b2.appspot.com/o/airbnb_logo.png?alt=media&token=52074dd8-0f78-4642-a31d-aaab73aa6edc"
          height="100px"
          width="150px"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex items-center rounded-full py-2 border-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" onClick={searchHandler} />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <div>
            <UserCircleIcon className="h-6" />
            {/* This was hacky - figure out new approach */}
            <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-red-400 color-white"></div>
          </div>
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={searchHandler}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
