import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("Testing Header component", () => {
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

  it("Should find login button", () => {
    // Define routes and enable the future flag
    const routes = [{ path: "/", element: <HeaderComponent /> }];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      future: {
        v7_startTransition: true, // Explicitly enable the future flag
      },
    });

    // Render the component with the router and Redux provider
    render(
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    );

    // Test the login button functionality
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
