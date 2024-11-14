import { useEffect, useState } from "react"

const useRecipeInfo = (recipeID) => {
    const [recipeInfo,setRecipeInfo] = useState(null)
    useEffect(() => {
        fetchRecipeData()
    },[])
    const fetchRecipeData = async () => {
        const recipeData = await fetch(`https://dummyjson.com/recipes/${recipeID}`).then(res => res.json())
        setRecipeInfo(recipeData)
    }
    return recipeInfo
}

export default useRecipeInfo