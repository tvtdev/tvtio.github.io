import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';
import JSONPretty from 'react-json-pretty';
import '../App.css';
import 'react-json-pretty/themes/monikai.css';


var JSONPrettyMon = require('react-json-pretty/dist/monikai');




export default class Home extends React.Component {

    state = {
        json_response: []
    };


    componentDidMount() {
        const url = "https://jz9ap7x9if.execute-api.us-east-1.amazonaws.com/dev/getmessage";

        axios.get(url,{
            headers: { 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": true}
        }).then(res => {
            console.log(JSON.stringify(res.data));
            this.setState({                json_response: res.data          });

            



        }).catch(err => {
            this.setState({
                json_response: null
            })
        });
   
    }

    
    renderlist() {
        return (
          <div>
   
        {this.state.json_response.map( ({createdAt,message}) =>
            <div className="media-content"> 
            <div className="content"> 
            <ul >
    {message.S.split("**")[0].substring(1)}: {message.S.split("**")[1].substring(0,message.S.split("**")[1].length-1)} <br />
      </ul></div></div>
  )}
    <br />


        
</div>
    );
}

render() {
    return this.renderlist();
}
               
}
