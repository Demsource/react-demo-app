import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "../src/pages/NotFound";

describe("NotFound Component", () => {
  it("renders the not found header", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    const heading = screen.getByRole("heading", {
      name: /page was not found/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a link pointing back to the home page", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link", { name: /go back/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
