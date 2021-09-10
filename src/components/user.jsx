import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
    }

    render()  {
        //logic
        return(
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
            </div>
        );
    }
}

export default User;