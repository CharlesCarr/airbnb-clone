import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 h-20">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-7c0b2.appspot.com/o/airbnb_logo.png?alt=media&token=52074dd8-0f78-4642-a31d-aaab73aa6edc" height="100px" width="150px"/>
      </div>

      <div className="flex items-center rounded-full py-2 border-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
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
    </header>
  );
}

export default Header;
