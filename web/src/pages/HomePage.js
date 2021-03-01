import { useContext } from "react";
import TripCard from "../components/TripCard";
import SearchBar from "../components/SearchBar";
import { SearchContext } from "../context/SearchContext";

const Loading = () => {
  return (
    <div className="mx-auto mt-8 w-1/3 text-center text-6xl text-gray-500">
      Loading....
    </div>
  );
};

export default function HomePage() {
  const { tripData } = useContext(SearchContext);
  return (
    <div className="w-full font-prompt ">
      <header className=" w-full ">
        <h1 className="pt-12 py-3 text-6xl text-blue-400 text-center leading-relaxed ">
          เที่ยวไหนดี
        </h1>
        <SearchBar />
      </header>
      <div className="mt-3">
        {tripData ? (
          tripData.map((trip) => <TripCard key={trip.eid} trip={trip} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
