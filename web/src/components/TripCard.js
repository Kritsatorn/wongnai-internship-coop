import TagsTripCard from "./TagsTripCard";
import ContentTripCard from "./ContentTripCard ";
import SmallThreePhotos from "./SmallThreePhotos";

const TripCard = ({ trip }) => {
  return (
    <div className="w-full md:w-8/12 max-w-screen-sm mx-auto py-4 px-3 md:px-0 md:grid md:grid-cols-3 md:pace-x-6">
      {/* Big Photo Section */}
      <div className="px-3 pt-3">
        <img
          className="h-full w-full object-cover rounded-3xl "
          src={trip.photos[0]}
          alt="main-tripImage"
        />
      </div>
      {/* Contents Section */}
      <div className="md:col-span-2 pt-4 px-3">
        <ContentTripCard
          title={trip.title}
          description={trip.description}
          url={trip.url}
        />

        {/* tags */}
        <p className="mt-2 text-xs text-center md:text-left text-gray-400 tracking-tighter">
          หมวด{"  -  "}
          {trip.tags.map((tag, i, arr) => (
            <TagsTripCard
              key={i + "_" + tag}
              tag={tag}
              isLast={arr.length - 1 === i}
            />
          ))}
        </p>

        {/* small imgs */}
        <SmallThreePhotos photos={trip.photos} eid={trip.eid} />
      </div>
    </div>
  );
};
export default TripCard;
