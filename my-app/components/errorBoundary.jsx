import React from "react"

export default class ErrorBoundary extends React.Component{
    
    constructor(props){
        super(props)
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
            return {hasError:true}
        }
        
    componentDidCatch(error,errorInfo){
        console.log(error, errorInfo)
    }

    

    render(){
        if(this.state.hasError){
            return <p className="p-2 bg-red-300"> There was a problem computing this </p>
        }
        return this.props.children
    }
}