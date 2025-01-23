import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Testing the contact component", () => {
  // Suppress the specific React Router future flag warning
  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation((message) => {
      if (message.includes("React Router Future Flag Warning")) return;
      console.warn(message);
    });
  });

  afterAll(() => {
    console.warn.mockRestore();
  });
  it("should find the contact component is rendered", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
