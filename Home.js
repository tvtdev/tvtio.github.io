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
        json_response: [],
        intervalId:null
    };


    tick() {
        var url = "https://3rt5d7cku0.execute-api.us-east-1.amazonaws.com/dev/getmessage";
        axios.get(url,{
            headers: { 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": true}
        }).then(res => {
            var obj = res.data;        
             
            var objaaa = [];        
            for(var i = 0;i<res.data.length;i++)
            {
                var Item = res.data[i];
                var Item_message = Item["message"].S;                
                const data_list = Item_message.split("**");
                if(data_list.length>=3)
                {
                    var str = data_list[1]+"**"+data_list[2]
                    objaaa.push(Item);          
                }      
            }
            console.log(objaaa);
            this.setState({                json_response: objaaa      });  
        }).catch(err => {
            this.setState({
                json_response: null
            })
        }); 

    }


    componentDidMount() {

        const url = "https://3rt5d7cku0.execute-api.us-east-1.amazonaws.com/dev/getmessage";
        axios.get(url,{
            headers: { 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": true}
        }).then(res => {
            var obj = res.data;        
             
            var objaaa = [];        
            for(var i = 0;i<res.data.length;i++)
            {
                var Item = res.data[i];
                var Item_message = Item["message"].S;                
                const data_list = Item_message.split("**");
                if(data_list.length>=3)
                {
                    var str = data_list[1]+"**"+data_list[2]
                    objaaa.push(Item);          
                }      
            }
            console.log(objaaa);
            this.setState({                json_response: objaaa      });  
        }).catch(err => {
            this.setState({
                json_response: null
            })
        }); 
       

        
        this.interval = setInterval(() => this.tick(), 120000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderlist() {
        return (          <div id="message_list">   
        {this.state.json_response.map( ({message}) =>
            <div className="message-text"> 
            <div className="text"> 
            <ul >
               {message.S.split("**")[1].substring(1)}: {message.S.split("**")[2].substring(0,message.S.split("**")[2].length-1)}
      </ul></div></div>
  )}        
</div>
    );
}

render() {
    return this.renderlist();
}
               
}
