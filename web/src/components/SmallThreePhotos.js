const SmallThreePhotos = ({ photos, eid }) => {
  return (
    <div className="flex mt-6 md:pr-4 justify-between">
      {photos.map((photo, i) => {
        if (i === 0) return null;
        else {
          return (
            <div
              key={eid + "_" + i}
              className="w-24 h-24 lg:w-28 lg:h-28 overflow-hidden"
            >
              <img
                className="h-full w-full object-cover rounded-3xl "
                src={photo}
                alt={i}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
export default SmallThreePhotos;
