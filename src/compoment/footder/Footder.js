import React from "react";
class Footder extends React.Component{
    render(){
        return(
            <>
            <h1>footder app</h1>
            <h1>{this.props.name}</h1>
            </>
        )
    }
}
export default Footder;