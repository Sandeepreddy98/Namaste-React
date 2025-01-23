import { render, screen } from "@testing-library/react";
import ReceipeCard from "../components/RecipeCard";
import MOCK_DATA from "../mocks/recipeMock.json";
import "@testing-library/jest-dom";

describe("Recipe card component is loaded with props", () => {
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
  render(<ReceipeCard recipeData={MOCK_DATA} />);
  it("should load the recipe card with name", () => {
    const recipeName = screen.getByText("Classic Margherita Pizza");
    expect(recipeName).toBeInTheDocument();
  });
});
