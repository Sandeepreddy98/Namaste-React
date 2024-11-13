// const About = () => {
//     return (
//         <h1>This is Namaste Food</h1>
//         <User userData = {{name : "Sandeep Reddy",location : "Chittoor",contact : "+91 9384572420"}}/>
//         <UserClass userData = {{name : "Sandeep Reddy",location : "Chittoor",contact : "+91 9384572420"}}/>
//     )
// }

import React from "react";
import UserClass from './UserClass'
class AboutClass extends React.Component{
    constructor(props){
        super(props)
        this.userData = null
    }

    render(){
            return (
                <div>
        <h1>This is Namaste Food</h1>
        {/* <User userData = {{name : "Sandeep Reddy",location : "Chittoor",contact : "+91 9384572420"}}/> */}
        <UserClass userData = {this.userData}/>
        </div>
    )
    }

    async componentDidMount(){
        const gitHubData = await fetch("https://api.github.com/users/Sandeepreddy98").then(res => res.json())
        this.setState(this.userData = gitHubData)
    }
}

export default AboutClass