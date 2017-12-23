import React, { Component } from 'react';


export default class DeveloperDetails extends Component{
    render(){

        return(
            <div className="container-devDetails">
                <p className={"coming"}>{this.props.name}</p>


                <div className={"mainDetails"}>
                    <div className={"statusArea"}>

                        <div className={"activities"}>
                            <span>Activities : </span> <span>Working</span>
                        </div>

                        <div className={"status"}>
                            <span>Status : </span> <span>present</span>
                       </div>
                    </div>

                    <div className={"contactArea"}>
                        <button>VISIT</button>
                        <button>CONTACT</button>
                    </div>

                </div>


            </div>
        )
    }
}