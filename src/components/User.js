import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
  const { name, location, contact } = props.userData;
  return (
    <div className="user-card">
        <h2>count : {count}
            <button onClick={() => {
                setCount(count+1)
            }}>Increment</button>
        </h2>
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>Contact : {contact}</h3>
    </div>
  );
};

export default User;
