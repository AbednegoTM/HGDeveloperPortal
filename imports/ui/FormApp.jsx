import React, {Component} from 'react';

/**
 * Title  :  sign up
 * Author :  Abed
 * Date : 
 */
export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {//state property
                username : '',
                email : '',
                color : '',
                isMarried: true,
                status: "Married",
                fdetail : ''
        }
    }

    handleInput=(e)=>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;       
        this.setState({
            [name] : e.target.value
        })

        // console.log(this.state.isMarried);
        

        if(this.state.isMarried){
            this.setState({
                status : "single"
            });
        } else {
            this.setState({
                status : "Married"
            }); 
        }
    }


    handleColor=(e)=>{
        this.setState({
            color : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
            console.log(this.nameInput.value);


            
        const fileDetail = this.fileInput.files[0].lastModified

        this.setState({
                fdetail : fileDetail
        });
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name : 
                    <input 
                        name="username"
                        type="text" 
                        placeholder="user name"
                        value={this.state.username} 
                        onChange={this.handleInput}
                         />
                </label>
                <label>
                    Email : 
                    <input
                        name="email" 
                        type="text" 
                        placeholder="email address"
                        value={this.state.email} 
                        onChange={this.handleInput} />
                </label>

                <label>
                    Favourite colors : 
                <select name="color" value={this.state.color} onChange={this.handleInput}>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                </select>
                </label>
                <label>
                    Married : 
                    <input 
                        type="checkbox" 
                        name='isMarried' 
                        checked={this.state.isMarried} 
                        onChange={this.handleInput}/>
                </label>

                <label>
                    upload file: 
                    <input 
                        type="file"
                        ref={input => {
                            this.fileInput = input;
                          }}
                    />
                </label>
                          <input type="submit" value="SUBMIT"/>
                        
                <p>User Name : {this.state.username}</p>
                <p>is married : {this.state.status}</p>
                <h5>Email : {this.state.email}</h5>
                <h4>the selected color  : {this.state.color}</h4>
                <h4>file details  : {this.state.fdetail}</h4>



            </form>
        )
    }
}