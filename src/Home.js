import React, { Component } from 'react';
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
            console.log('dfsa');
            this.setState({
                //   json_response: JSON.stringify(res.data.Items[0])

                json_response: JSON.stringify(res.data)

                    let bookmarks = JSON.parse(res.data);

            for (var i = 0 ; i < bookmarks.length; i++)
            {

                this.addBookmarkObject(bookmarks[i])
            }


            })
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