/* eslint-disable no-console */
import { act } from "react";
import MOCK_DATA from "../mocks/recipesListData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../components/Body";
import "@testing-library/jest-dom";
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
describe("Testing the body component is loaded", () => {
  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation((message) => {
      if (message.includes("React Router Future Flag Warning")) return;
      console.warn(message);
    });
  });

  afterAll(() => {
    console.warn.mockRestore();
  });
  it("Should check the search is loaded", async () => {
    // Define routes and configure the router with the future flag
    const routes = [{ path: "/", element: <BodyComponent /> }];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      future: {
        v7_startTransition: true, // Enable the future flag
      },
    });

    // Use act to render the component with the router
    await act(async () => {
      render(<RouterProvider router={router} />);
    });
    const input = screen.getByTestId("searchInput");
    fireEvent.change(input, { target: { value: "chicken" } });
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);
    const resCardsAfterSearch = await screen.getAllByTestId("resCard");
    expect(resCardsAfterSearch.length).toBe(5);
  });
});
