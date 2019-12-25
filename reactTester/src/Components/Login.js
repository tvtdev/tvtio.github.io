import React from 'react';
import {Icon, Input, Message} from 'semantic-ui-react'
import cookie from 'react-cookies';
import {Auth} from 'aws-amplify';
import '../App.css';

class Login extends React.Component {

    state = {
        user_name: "",
        pwd: "",
        login_error: null,
        status: false
    };

    componentWillMount() {
        if(cookie.load('_u_id_') !== null && cookie.load('_u_id_')!== undefined) {
            this.setState({
                status: true
            })
        }
    }

    emailId = (e) => {
        this.setState({
            user_name: e.target.value
        })
    };

    password = (e) => {
        this.setState({
            pwd: e.target.value
        })
    };

    againLogin = () => {
        this.setState({
            status: false
        })
    };

    submit = () => {
        Auth.signIn(this.state.user_name, this.state.pwd)
            .then(user => {
                let cog_data = user.signInUserSession.idToken;
                let u_id = cog_data.payload.sub,
                    jwt_token = cog_data.jwtToken;

                localStorage.setItem('_cog_u_in_', JSON.stringify(cog_data.payload));
                cookie.save("_ref_i_token_", jwt_token, {path: '/'});
                cookie.save("_u_id_", u_id, {path: '/'});
                this.setState({
                    status: true
                })
            }).catch(err => {
            this.setState({
                login_error: "Invalid credentials"
            });
        })
    };

    render() {
        if (this.state.status === true) {
            return (
                <div className="centerAlignment">
                    <Message positive>
                        <Message.Header>Now You are an authorized user.</Message.Header>
                        <span> Token Expired? </span>
                        <button className="reLoginLink" onClick={this.againLogin}> Login </button>
                    </Message>
                </div>
            )
        } else {
            return (
                <div className="centerAlignment">
                    <div>
                        <p> Welcome Back! </p>
                    </div>
                    <div style={{marginTop: "40px"}}>
                        <Input iconPosition='left' placeholder='User name' size="big">
                            <Icon name='user'/>
                            <input onChange={this.emailId}/>
                        </Input>
                    </div>
                    <div style={{marginTop: "20px"}}>
                        <Input iconPosition='left' placeholder='Password' size="big">
                            <Icon name='lock'/>
                            <input type="password" onChange={this.password}/>
                        </Input>
                    </div>
                    <div style={{marginTop: "20px", textAlign: "center"}}>
                        <button className="button" onClick={this.submit}>
                            Login
                        </button>
                    </div>
                    <div style={{marginTop: "20px", textAlign: "center"}}>
                        {this.state.login_error === null ? null :
                            <span style={{color: "red", textAlign: "center"}}> {this.state.login_error} </span>}
                    </div>
                </div>
            );
        }
    }
}

export default Login;