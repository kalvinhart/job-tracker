import UserInfo from "./UserInfo";
import { render, screen, fireEvent } from "@testing-library/react";

describe("UserInfo", () => {
  const mockSignOut = jest.fn();

  test("calls sign out function on button click", () => {
    render(<UserInfo signOut={mockSignOut} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});
