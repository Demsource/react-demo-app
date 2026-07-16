import { render, screen } from "@testing-library/react";

describe("Sanity Check", () => {
  it("should pass and prove the testing setup works", () => {
    render(<h1>Hello, Vitest!</h1>);

    // Check if the heading is correctly rendered in the virtual DOM
    const heading = screen.getByText("Hello, Vitest!");
    expect(heading).toBeInTheDocument();
  });
});
