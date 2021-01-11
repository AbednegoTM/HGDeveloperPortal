import React, { Component } from 'react';
import {DevelopersDetailsCol} from "../../imports/api/collections"; 
import { withTracker } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export class DeveloperDetails extends Component{
    constructor(){
        super();
    }
   getName(){
        var name = this.props.name;
        if(name != ""){
            return name+"\'s";
        }  
    }
    getContacts(){
        var devId = this.props.id;        
        var contacts  = DevelopersDetailsCol.find({});
        console.log("details : " + devId);        
        console.log("details : " + contacts);
        return contacts;
    }
    displayContacts(){
        var id =  this.props.id;
        details = DevelopersDetailsCol.find({devId:id}).fetch();
            return details.map(con => (
                 <ul key={con._id} className="socialDetails">
                    <li><i className="fa fa-twitter fa-lg"></i><a href={con.twitter}>twitter</a></li>
                    <li><i className="fa fa-facebook-official fa-lg"></i><a href={con.facebook}>facebook</a></li>
                    <li><i className="fa fa-github fa-lg"></i><a href={con.github}>github</a></li>
                    <li><i className="fa fa-envelope fa-lg"></i><a href={con.email}>email</a></li>
                </ul>
                )
            )
        }
    render(){
        return(
            <div className="container-devDetails">
                {/* <p className={"coming"}></p> */}
                <h2 className="socialDetailsHead coming"> {this.getName()} Contact Details</h2>
                {
                 this.displayContacts()
                }
                {/* <div className={"mainDetails"}>
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

                </div> */}
            </div>
        )
    }
}
export default withTracker(() => {
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component
    return {
        details: DevelopersDetailsCol.find().fetch(),
    }
})(DeveloperDetails);