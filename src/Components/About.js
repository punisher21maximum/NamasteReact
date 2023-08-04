import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h1>Namaste JS</h1>
            <Outlet/>
        </div>
    )
}

export default About;