const ContentTripCard = ({ title, description, url }) => {
  return (
    <>
      <a
        className="font-black text-2xl"
        href={url}
        rel="noreferrer"
        target="_blank"
      >
        {title}
      </a>
      <p className="mt-2 text-center md:text-left font-medium text-gray-400 tracking-tighter leading-relaxed">
        {description.substring(0, 101) + "... "}
        <a
          className="inline-block text-blue-300 underline"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          อ่านต่อ
        </a>
      </p>
    </>
  );
};
export default ContentTripCard;
