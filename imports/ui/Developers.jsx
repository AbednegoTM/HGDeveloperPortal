import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { createContainer } from 'meteor/react-meteor-data';
import DeveloperDetails from '../../imports/ui/DeveloperDetails.jsx';
import {DevelopersCol} from "../../imports/api/collections"; //collection name cant be same as calling class name


export class Developers extends Component {
    constructor(){
        super();
        this.state = {
            message: "",
            id: ""
        };
        Session.set("ID","p4TW2QKFBvj3T4bGi");
    }
    handleClick(event) {
        event.preventDefault();
        var id = event.target.id 
        Session.set("ID",id);  
        var query = { _id:Session.get("ID")};
        var cursor = DevelopersCol.find(query,{fields:{name:1}}).fetch();
        var name = cursor.map( function(u) { return u.name; } );
        this.setState({message:name});
        this.setState({id:id});
        console.log(id);
        console.log(cursor);
        console.log(name);
        // .project()
    }
    render() {
        return (
            <div className={"wrapper"}>
                <ul className={"devList"}>
                    {/* <li onClick={this.handleClick.bind(this)} className={"devProfile"}>
                        <img className={"devProfilePic"} src={"/47.png"} alt="img"/>
                        <div className={"profileDesc"}>
                            <p className={"devName"}>Abednego TM</p>
                            <p  className={"devPost"}>Designer/Developer</p>
                        </div>
                    </li>
                    <li onClick={this.handleClick.bind(this)} className={"devProfile"}>
                        <img className={"devProfilePic"} src={"/oli.jpg"} alt="img"/>
                        <div className={"profileDesc"}>
                            <p className={"devName"}>Olivier JM</p>
                            <p  className={"devPost"}>Developer</p>
                        </div>
                    </li> */}

                    {
                       this.props.devcols.map(dev => {
                            return <li  onClick={this.handleClick.bind(this)} className={"devProfile"} id={dev._id} key={dev._id}>
                                <img className={"devProfilePic"} src={"/placeholder.png"} alt="img"/>
                                <div className={"profileDesc"}>
                                    <p className={"devName"}>{dev.name}</p>
                                    <p  className={"devPost"}>{dev.post}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <div className="detailsPane">
                    <DeveloperDetails name={this.state.message} id={this.state.id}/>
                </div>
            </div>
        )

    }
}
export default withTracker(() => {
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component
    return {
        devcols: DevelopersCol.find().fetch(),
    }
})(Developers);