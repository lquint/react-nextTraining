import React from "react";

class ClassClock extends React.Component{
    constructor(props){
        super(props)
        this.state={date: new Date()}
        this.timer= null
    }

    componentDidMount(){
        this.timer = window.setInterval(()=>{
            this.tick()
        },1000)
    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    tick(){
        this.setState({date:new Date()})
    }

    render(){
        return(
            <button>Time : {this.state.date.toLocaleTimeString()}</button>
        )
    }
}

export default ClassClock;