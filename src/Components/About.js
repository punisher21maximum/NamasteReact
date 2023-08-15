import User from "./User";
import UserClass from "./UserClass";
import { Outlet } from "react-router-dom";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent mounted")
    }

    render(){
        return (
            <div>
                {console.log("Parent render start")}
                <h1>About</h1>
                <h1>Namaste JS</h1>
                <User name={"Vishal Singh Func"}/>
                <UserClass name={"Vishal Singh Class"}/>
                <Outlet/>
                {console.log("Parent render end")}
            </div>
        )
    }
};

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h1>Namaste JS</h1>
//             <User name={"Vishal Singh Func"}/>
//             <UserClass name={"Vishal Singh Class"}/>
//             <Outlet/>
//         </div>
//     )
// };

export default About;