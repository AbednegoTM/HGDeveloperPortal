import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DevelopersCol} from "../../imports/api/collections";
import { withTracker } from 'meteor/react-meteor-data';
import {DevelopersDetailsCol} from "../../imports/api/collections"; 


export class Dashboard extends Component{

    addDeveloper(event){
        event.preventDefault();
        const name = ReactDOM.findDOMNode(this.refs.devName).value.trim();
        const post = ReactDOM.findDOMNode(this.refs.devPost).value.trim();
        // insert data
         DevelopersCol.insert({
          name,
          post,
          createdAt: new Date(), // current time
        });
        // Clear form
        ReactDOM.findDOMNode(this.refs.devName).value = '';
        ReactDOM.findDOMNode(this.refs.devPost).value = '';
    } 

    addDeveloperContacts(event){
        event.preventDefault();
        const twitter = ReactDOM.findDOMNode(this.refs.twitter).value.trim();
        const facebook = ReactDOM.findDOMNode(this.refs.facebook).value.trim();
        const github = ReactDOM.findDOMNode(this.refs.github).value.trim();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const id = ReactDOM.findDOMNode(this.refs.id).value.trim();

        DevelopersDetailsCol.insert({
            devId: id,
            twitter,
            facebook,
            github,
            email,
            createdAt: new Date(), // current time
          });

    }
    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        ref="devName"
                        placeholder="developer name"/>
                    <input 
                        type="text"
                        ref="devPost"
                        placeholder="developer post"/>
                    <button 
                        type="button"
                        onClick={this.addDeveloper.bind(this)}>ADD</button>
                </form>
                <br/>

                <form>
                <input 
                        type="text"
                        ref="id"
                        placeholder="ID"/>
                    <input 
                        type="text"
                        ref="twitter"
                        placeholder="twitter"/>
                    <input 
                        type="text"
                        ref="facebook"
                        placeholder="facebook"/>
                    <input 
                        type="text"
                        ref="github"
                        placeholder="github"/>
                    <input 
                        type="text"
                        ref="email"
                        placeholder="email"/>
                    <button 
                        type="button"
                        onClick={this.addDeveloperContacts.bind(this)}>SUBMIT CONTACTS</button>
                </form>
        

            </div>
        )
    }
}