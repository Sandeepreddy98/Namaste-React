import { BrowserRouter } from "react-router-dom"
import { fireEvent, render ,screen} from "@testing-library/react";
import HeaderComponent from "../components/Header"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom"

describe('Testing Header component',() => {
    it("Should find login button",() => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
        </BrowserRouter>
        )
        const loginButton = screen.getByRole("button",{name : "Login"})
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole("button",{name : "Logout"})
        expect(logoutButton).toBeInTheDocument()
    })
})