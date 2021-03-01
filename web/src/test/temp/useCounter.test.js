import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

test("by 1 ", () => {
  const { result } = renderHook(useCounter);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

describe("decrement", () => {
  it("de by 1 ", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
