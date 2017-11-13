import React, { Component } from 'react';


export default class DeveloperDetails extends Component{
    render(){

        return(
            <div className="container-devDetails">
                <p className={"coming"}>{this.props.name}</p>
            </div>
        )
    }
}