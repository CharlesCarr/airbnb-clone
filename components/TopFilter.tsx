import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrellaBeach,
  faHouseChimney,
  faCaravan,
  faIgloo,
  faPersonSkiing,
  faWaterLadder,
  faMountainSun,
  faPersonHiking,
  faChessRook,
  faTractor,
  faAngleRight,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function TopFilter({ filterSet, setFilterSet }: any) {
  const categoryIcons = [
    {
      id: 0,
      category: "Mountains",
      icon: faMountainSun,
    },
    {
      id: 1,
      category: "Beach",
      icon: faUmbrellaBeach,
    },
    {
      id: 2,
      category: "Lake",
      icon: faHouseChimney,
    },
    {
      id: 3,
      category: "Amazing pools",
      icon: faWaterLadder,
    },
    {
      id: 4,
      category: "Ski-in/out",
      icon: faPersonSkiing,
    },
    {
      id: 5,
      category: "Castles",
      icon: faChessRook,
    },
    {
      id: 6,
      category: "Campers",
      icon: faCaravan,
    },
    {
      id: 7,
      category: "Farms",
      icon: faTractor,
    },
    {
      id: 8,
      category: "Hiking",
      icon: faPersonHiking,
    },
    {
      id: 9,
      category: "Arctic",
      icon: faIgloo,
    },
  ];

  const filterSelectHandler = (category: any) => {
    if (filterSet.toLowerCase() === category.toLowerCase()) {
      setFilterSet("");
    } else {
      setFilterSet(category);
    }
  };

  return (
    // <div className="flex pt-5 w-full bg-red-200">
      <div className="flex pt-5 justify-around w-full">
        {categoryIcons.map((cat: any) => {
          return (
            <div
              key={cat.id}
              className="mr-10 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => filterSelectHandler(cat.category)}
            >
              <FontAwesomeIcon icon={cat.icon} className="w-5 h-5" />
              <p className="text-xs mt-2">{cat.category}</p>
              {/* for testing - will need to restyle later */}
              {filterSet.toLowerCase() === cat.category.toLowerCase() && (
                <div className="h-1 w-16 bg-black"></div>
              )}
            </div>
          );
        })}
      {/* </div> */}

      {/* Commenting out for now - will wait on this functionality */}
      {/* <div className="flex justify-center items-center w-6 h-6 rounded-full border-slate-200 border p-2 ml-6 mt-4 mr-3">
        <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3" />
      </div>

      <div className="flex justify-center items-center border-slate-200 border rounded-lg p-3 mt-4">
        <FontAwesomeIcon icon={faSliders} className="w-3 h-3 mr-2" />
        <p className="text-xs">Filters</p> */}
      {/* </div> */}
    </div>
  );
}

export default TopFilter;
