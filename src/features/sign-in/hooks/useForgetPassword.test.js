import { useForgotPassword } from "./useForgotPassword";
import { renderHook } from "@testing-library/react";

describe("useForgotPassword", () => {
  describe("email", () => {
    test("it should default to empty string", () => {
      //   const { result } = renderHook(() => useForgotPassword());
      //   expect(result.current.email).toBe("");
    });
  });

  describe("handleChange", () => {
    test("the input value should reflect the current state", () => {
      //   const { result } = renderHook(() => useForgotPassword());
    });
  });
});
