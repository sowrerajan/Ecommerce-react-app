import React, { Component } from 'react'
import { signInWithGoogle } from '../Firebase/firebase.utils'
import CustomButtonComponent from './CustomButtonComponent'
import FormInput from './FormInput'
import './SigninComponent.scss'

export class SigninComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target;
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div className='button'>
                        <CustomButtonComponent type='submit' value='Submit Form' >SIGN IN</CustomButtonComponent>
                        <CustomButtonComponent onClick={signInWithGoogle} value='Submit Form' isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}

export default SigninComponent
