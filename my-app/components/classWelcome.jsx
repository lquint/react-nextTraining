import React from "react";

class ClassWelcome extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            <div className="m-4">
                <h2 className="text-base underline">Welcome to this page</h2>
                <p>Hope you're enjoying your day {this.props.name}</p>
            </div>
        )
    }
}

export default ClassWelcome;