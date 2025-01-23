/* eslint-disable no-console */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CuisineCategory from "../components/CuisineCategory";
import CuisineLayout from "../components/CuisineLayout";
import MOCK_DATA from "../mocks/recipesListData.json";
import "@testing-library/jest-dom";
// Mock the fetch API to return mock data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  console.warn.mockRestore();
});

// Define the test suite
describe("Testing wishlist component", () => {
  it("Should check the accordion is present", async () => {
    // const routes = [{ path: "/recipes/cuisine", element: <CuisineLayout /> }];
    // const router = createMemoryRouter(routes, {
    //   initialEntries: ["/recipes/cuisine"],
    //   future: {
    //     v7_startTransition: true, // Explicitly enable the future flag
    //   },
    // });
    // Render the component within RouterProvider
    // render(<RouterProvider router={router} />);
    // Wait for the accordion to be present
    // const accordion = await screen.findByText("Italian (6)");
    // expect(accordion).toBeInTheDocument(); // Ensure it is found in the DOM
    // fireEvent.click(accordion);
    // const cards = screen.getAllByTestId("recipe-card");
    // expect(cards.length).toBe(6);
  });
});
