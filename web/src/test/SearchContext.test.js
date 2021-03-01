import { useContext } from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { SearchContextProvider, SearchContext } from "../context/SearchContext";

const Sample = () => {
  const { setTextSearch, textSearch } = useContext(SearchContext);
  const text = "Hello world";
  const setT = useCallback(() => setTextSearch(text), [text]);
  return { setT, textSearch };
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/",
  }),
}));

test("SearchContext can be rendered as mock of textsearch", () => {
  // It's complex and take a lot of time to understand & I'm not sure is it right ?.
  const wrapper = ({ children }) => (
    <SearchContextProvider> {children} </SearchContextProvider>
  );
  const { result } = renderHook(() => <Sample />, { wrapper });
  act(() => {
    result.current.setT;
  });
  expect(result.current.textSearch).toBe();
});
