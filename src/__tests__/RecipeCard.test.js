import { render,screen } from "@testing-library/react"
import ReceipeCard from "../components/RecipeCard"
import MOCK_DATA from '../mocks/recipeMock.json'
import "@testing-library/jest-dom"

describe('Recipe card component is loaded with props',() => {
    render(<ReceipeCard recipeData = {MOCK_DATA}/>)   
    it("should load the recipe card with name",() => {
        const recipeName = screen.getByText('Classic Margherita Pizza')
        expect(recipeName).toBeInTheDocument()
    }) 
})