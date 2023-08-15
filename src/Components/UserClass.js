import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count:100,
            userData:null,
        };

        console.log("UserClass constructor");
    };
    
    async componentDidMount(){
        console.log("UserClass componentDidMount start");
        const data = await fetch("https://api.github.com/users/punisher21maximum");
        const json = await data.json();
        console.log(json);
        this.setState({userData:json});
        console.log("UserClass componentDidMount end");
    }

    componentDidUpdate(prevProps) {
        console.log("UserClass componentDidUpdate");
    }

    render() {
        return (
            <div className="user-card">
                {console.log("UserClass render")}
                <h1>Name: {this.state.userData === null ? "Name loading" : this.state.userData.name}</h1>
                <img src={this.state.userData === null ? "Avatar loading" : this.state.userData.avatar_url}></img>
                <h2>EMail: Vishal7x7</h2>
                <h2>Role: Software Engg</h2>
                
            </div>
        )
    }
}

export default UserClass;