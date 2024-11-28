
const ReceipeCard = (props) => {
    const { image,name, cuisine, rating, mealType, difficulty} = props?.recipeData || {};
   return  (<div className="res-card" data-testid = "resCard">
        <img className="res-logo" src={image}/>
        <h4>{name}</h4>
        <h5>{cuisine}</h5>
        <h5>{rating}</h5>
        <h5>{mealType?.join(', ')}</h5>
        <h5>{difficulty}</h5>
    </div>)
}

export default ReceipeCard