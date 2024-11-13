import React from "react";
import Shimmer from'./Shimmer'

class User extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() { 
    if(!this.props.userData){
        return <Shimmer/>
    }else{
        const { login,avatar_url,html_url,name,location,email,bio,created_at} = this.props.userData;   
        return (
          <div className="user-card">
            <img src={avatar_url} />
            <h1>Github user Id : {login}</h1>
            <h3>Github Name : {name}</h3>
            <h3>Github link : {html_url}</h3>
            <h4>Email : {email}</h4>
            <h4>Location : {location}</h4>
            <p>{bio}</p>
            <h5>Account created : {created_at}</h5>
          </div>
        );
    }
}

  componentDidMount(){
    // this.
  }
}


export default User;
