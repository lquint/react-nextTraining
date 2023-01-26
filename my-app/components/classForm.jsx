import React from "react";

class ClassForm extends React.Component{

    constructor(props){
        super(props)
        this.state = { firstName : '', lastName: '', newsletter:false}
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(e.target.firstName.value)
        const firstName= e.target.firstName.value
        const lastName = e.target.lastName.value 
        const newsletter = e.target.newsletter.checked 
        this.setState({firstName,lastName,newsletter})
    }


    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div className="m-4">
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" type="text" className="border"  defaultValue={this.state.firstName}/>
                </div>
                <div className="m-4">
                    <label htmlFor="lastName" >Last Name</label>
                    <input name="lastName" type="text" className="border"  defaultValue={this.state.lastName}/>
                </div>
                <div className="m-4">
                    <input name="newsletter" type="checkbox" className="m-2 border" defaultValue={this.state.newsletter} />
                    <label htmlFor="newsletter" >Accept suscribing to newsletters</label>
                </div>
                <button className="mb-4 ml-4 bg-blue-500 border rounded-lg">SUBMIT</button>
            </form>
            <p>{ JSON.stringify(this.state) }</p>
            </>
        )
    }

}

export default ClassForm