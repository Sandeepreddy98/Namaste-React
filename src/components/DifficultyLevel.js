
const DifficultyLevel = (ReceipeCard) => {
    return (props) => {
        const {difficulty} = props.recipeData
        return (
            <div>
            <div className={difficulty} style= {{backgroundColor : difficulty === 'Easy'? 'green' : difficulty === 'Medium' ? 'yellow' : 'red'}}> {difficulty}</div>
            <ReceipeCard {...props}/>
            </div>
        )
    }
}

export default DifficultyLevel