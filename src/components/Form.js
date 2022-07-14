import React, { Component } from "react"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    login = () => {
        this.props.validateUser()
    }

    render() {
        return (
        <div className="inputs">
            <label>Email address or username</label>
            <input 
            className="input-boxes" 
            onChange={this.handleChange} 
            name="username" 
            value={this.state.username} 
            type="text" 
            placeholder="Email address or username"
            />

            <label>Password</label>
            <input 
            className="input-boxes" 
            onChange={this.handleChange} 
            name="password" 
            value={this.state.password} 
            type="text" 
            placeholder="Password"
            />

            {/* <a href="">Forget your password?</a>
            <label>Remember me</label>
            <input type="checkbox" /> */}
            <button onClick={this.login}>Log in</button>
        </div>
        )
    }
}


export default Form