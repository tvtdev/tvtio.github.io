import React from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import JSONPretty from 'react-json-pretty';
import '../App.css';
import 'react-json-pretty/themes/monikai.css';
import Loader from './Loader';

var JSONPrettyMon = require('react-json-pretty/dist/monikai');


export default class RestAPIJson extends React.Component {

    state = {
        json_response: null,
        is_user_valid: true
    };

    componentDidMount() {
     //   const url = "https://9rhoxjvmxl.execute-api.us-east-2.amazonaws.com/beta/test";
        const url = "https://ji67dvwyn9.execute-api.us-east-1.amazonaws.com/Prod/restapi2?_u_id_=1";
        const u_id = cookie.load('_u_id_');
        if (u_id === null || u_id === undefined) {
            this.setState({
                is_user_valid: false
            })
        }
        console.log(u_id);
        axios.get(url, {
            params: {
                u_id: u_id
            },
            headers: {
               "Content-Type": "application/json",
            //    "Access-Control-Allow-Origin": "*",
                "Authorization": cookie.load("_ref_i_token_")
            }

        }).then(res => {
            console.log(JSON.stringify(res.data));
            this.setState({
             //   json_response: JSON.stringify(res.data.Items[0])
                json_response: JSON.stringify(res.data)
            })
        }).catch(err => {
            this.setState({
                json_response: null
            })
        });
   
    }

    render() {
        if (this.state.is_user_valid === false) {
            return (
                <div className="centerAlignment">
                    <p> Oops!!! You are not authorized to make an API Call. </p>
                </div>
            )
        } else if (this.state.json_response === null) {
            return (
                <div className="centerAlignment">
                    <Loader dimensions={'20px'}/>
                </div>
            )
        } else {
         //   return (
         //       <div className="centerAlignment">
         //           <JSONPretty data={this.state.json_response} theme={JSONPrettyMon}
         //                       style={{textAlign: 'left'}}/>
         //       </div>
         //   );
            return (
                <div className="centerAlignment">
                    <JSONPretty data={this.state.json_response} theme={JSONPrettyMon}
                                style={{textAlign: 'left'}}/>
                </div>
            );            
        }
    }
}