import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
const TagsTripCard = ({ tag, isLast }) => {
  const { addText } = useContext(SearchContext);
  return (
    <span>
      {isLast ? "และ   " : null}
      <span
        className="underline break-words whitespace-nowrap cursor-pointer"
        onClick={() => addText(tag)}
      >
        {tag}
      </span>
      {isLast ? null : "   "}
    </span>
  );
};

export default TagsTripCard;
