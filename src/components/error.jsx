import { Component } from "react";


class Error extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className=" offset-2 col-8 alert alert-danger shadow-lg p-3 mb-5  rounded" role="alert">
                <h4 className="alert-heading">Error</h4>
                <p> this error is trigged becouse either you did not enter a city or the city is unknown </p>
                <hr />
            </div>
        )
    }
}

export {Error}