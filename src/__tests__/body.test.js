import { act } from "react";
import MOCK_DATA from "../mocks/recipesListData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../components/Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
describe("Testing the body component is loaded", () => {
  it("Should check the search is loaded", async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      );
    });
    const resCardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(resCardsBeforeSearch.length).toBe(30)
    const input = screen.getByTestId("searchInput")
    fireEvent.change(input,{target:{value:"chicken"}})
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton)
    const resCardsAfterSearch = await screen.getAllByTestId("resCard")
    expect(resCardsAfterSearch.length).toBe(5)

  });
});
