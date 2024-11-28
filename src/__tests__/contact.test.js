import { render ,screen} from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe('Testing the contact component',() => {
    it('should find the contact component is rendered',() => {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })
})