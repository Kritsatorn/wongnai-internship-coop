import React from "react";
import App from "../App";
import HomePage from "../pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { SearchContextProvider } from "../context/SearchContext";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/",
  }),
}));

describe("App initial", () => {
  test("App is not crash", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test("App is return first trips when keyword is empty", async () => {
    const wrapper = (props) => (
      <SearchContextProvider>{props.children}</SearchContextProvider>
    );

    render(<HomePage />, { wrapper });

    expect(
      await screen.findByText(
        "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"
      ).textContent
    ).toBeInTheDOM;
  });
});

describe("SearchBar initial", () => {
  test("search bar have correct placeholder text", () => {
    const wrapper = (props) => (
      <SearchContextProvider>{props.children}</SearchContextProvider>
    );

    render(<HomePage />, { wrapper });

    expect(screen.getAllByPlaceholderText("หาที่เที่ยวแล้วไปกัน...."))
      .toBeInTheDOM;
  });
});
