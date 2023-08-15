import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Name: {props.name}</h1>
            <h2>EMail: Vishal7x7</h2>
            <h2>Role: Software Engg</h2>
            <h3>Counter: {count}</h3>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default User;