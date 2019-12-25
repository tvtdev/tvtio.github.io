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
        json_response: null,
        is_user_valid: true
    };


    componentDidMount() {
        const url = "https://jz9ap7x9if.execute-api.us-east-1.amazonaws.com/dev/getmessage";

        axios.get(url,{
            headers: { 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": true}
        }).then(res => {
            console.log(JSON.stringify(res.data));
            this.setState({                json_response: JSON.stringify(res.data)            });

            var obj = res.data;              
            for(var i = 0;i<res.data.Items.length;i++)
            {
                var Item = res.data.Items[i];
                var Item_message = Item["message"].S;

                const data = Item_message.split("**")
                const username = data[0];
                var res_username = username.substring(1, username.length);

                const text = data[1];
                var res_text = text.substring(1, text.length - 1);

                console.log(res_username);
                console.log(res_text);


          

                ReactDOM.render()
                {
                    var article = React.createElement('article');
                    article.innerHTML = `
    <div class="media-content">
        <div class="content">
            <p>
     dfgdsgfffffffffffffffffffffffffffffffffff dfgdsgfffffffffffffffffffffffffffffffffffdfgdsgfffffffffffffffffffffffffffffffffffdfgdsgfffffffffffffffffffffffffffffffffff
            </p>
        </div>
    </div>
    `;


                };

            }
  



        }).catch(err => {
            this.setState({
                json_response: null
            })
        });
   
    }

    render() {
    {
            //   return (
            //       <div className="centerAlignment">
            //           <JSONPretty data={this.state.json_response} theme={JSONPrettyMon}
            //                       style={{textAlign: 'left'}}/>
            //       </div>
            //   );
        return (

                <div className="centerAlignment">fhz
                    <JSONPretty data={this.state.json_response} theme={JSONPrettyMon}
            style={{textAlign: 'left'}}/>
</div>
            );            
    }
}
}