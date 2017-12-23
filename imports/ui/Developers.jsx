import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { createContainer } from 'meteor/react-meteor-data';
import DeveloperDetails from '../../imports/ui/DeveloperDetails.jsx';
import {DevelopersCol} from "../../imports/api/collections"; //collection name cant be same as calling class name


export class Developers extends Component {
    constructor(){
        super();
        this.state = {
            message: ""
        };
        // let text = "hello";
        // DevelopersCol.insert({
        //    text,
        //     createdAt: new Date(), // current time
        //
        // });
    }
    handleClick() {
        this.setState({message:"coming soon"})
    }
    render() {
        return (
            <div className={"wrapper"}>
                <ul className={"devList"}>
                    <li onClick={this.handleClick.bind(this)} className={"devProfile"}>
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
                    </li>

                    {
                       this.props.devcols.map(dev => {
                            return <li className={"devProfile"} key={dev._id}>
                                <img className={"devProfilePic"} src={"/47.png"} alt="img"/>
                                <div className={"profileDesc"}>
                                    <p className={"devName"}>Abednego TM</p>
                                    <p  className={"devPost"}>Designer/Developer</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <div className="detailsPane">
                    <DeveloperDetails name={this.state.message}/>
                </div>
            </div>
        )

    }
}

export default withTracker(() => {
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component
    return {
        devcols: DevelopersCol.find().fetch()
    }
})(Developers);