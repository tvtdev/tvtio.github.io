import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';
import JSONPretty from 'react-json-pretty';
import '../App.css';
import 'react-json-pretty/themes/monikai.css';


import { componentWillAppendToBody } from "react-append-to-body";

var JSONPrettyMon = require('react-json-pretty/dist/monikai');



/* Some component that you want to attach to the DOM */
function MyComponent({ children }) {
    return <div className="myClassName">{children}</div>;
}

const AppendedMyComponent = componentWillAppendToBody(MyComponent);

class AddNewTab extends React.Component {
    state = {
        json_response: [],
        intervalId:null,
        arra:[]
    };
    fetchData()
    {
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

            this.setState({arra:objaaa});


            this.setState({                json_response: objaaa      });  
        }).catch(err => {
            this.setState({
                json_response: null
            })
        }); 
    }
    

    tt(){
      
     
 
     
        var ara=[];

        if(this.state.arra.length)
        {
        
            {
            
                var list = document.getElementById("message_text_ul");

                if(list)
                {
                    if(list.childElementCount >=50)
                        list.removeChild(list.childNodes[0]);
                }

            }
         
            var first = this.state.arra.shift();
            this.state.arra.push(first);

            const inputValue = first.message.S;
            const name_Value = inputValue.split("**")[1].substring(1);
            const message_Value = inputValue.split("**")[2].substring(0,inputValue.split("**")[2].length-1);
            this.props.onAdd({                name: name_Value,                message: message_Value            })






            this.setState({   json_response: ara});
        }

        console.log('inputValue');
    }

    componentDidMount() {

        this.fetchData();

        if(this.state.arra.length)
        {
            for(var i = 0;i<this.state.arra.length;i++)
            {
                var first = this.state.arra[i]; 
                const inputValue = first.message.S;
                const name_Value = inputValue.split("**")[1].substring(1);
                const message_Value = inputValue.split("**")[2].substring(0,inputValue.split("**")[2].length-1);
                this.props.onAdd({                name: name_Value,                message: message_Value            })
            }
        }



        this.interval = setInterval(() => this.tt(), 1858);
    
    }

    render() {return (null);}

}

const Tabs = (props) => {
    var divStyle = {       
    };
    var divStysle = {
        backgroundColor: '#fff',
        display: "block",
        borderRadius: "3px",
        paddingTop : "3px",
        paddingBottom : "3px",
        paddingLeft : "5px"  
    };
    
    return (
        <div id="message_text_ul">
        {props.tabs.map((tab) => (      
           <ul key={tab.name + tab.message}><span style={divStyle}>{tab.name}</span><br/><span style={divStysle}>{tab.message}</span></ul>            
     ))}
           </div>
 )
   }


export default class Home extends React.Component {
    state = {
        tabs: [

        ]};
     
    fetchData()
    {
        const url = "https://3rt5d7cku0.execute-api.us-east-1.amazonaws.com/dev/getmessage";
        axios.get(url,{
            headers: { 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": true}
        }).then(res => {
         
            var tabsData = [];        
            for(var i = 0;i<res.data.length;i++)
            {
                var Item = res.data[i];
                var Item_message = Item["message"].S;                
                const data_list = Item_message.split("**");
                if(data_list.length>=3)
                {
                    var str = data_list[1]+"**"+data_list[2]
                    const inputValue = Item_message;
                    const name_Value = inputValue.split("**")[1].substring(1);
                    const message_Value = inputValue.split("**")[2].substring(0,inputValue.split("**")[2].length-1);
                    tabsData.push({                name: name_Value,                message: message_Value            });
                }      
            }
            this.setState({tabs:tabsData});
        }).catch(err => {
            this.setState({
                json_response: null
            })
        }); 
    }

    componentDidMount() {
        this.fetchData();
    }

        handleAddNewTab = (newTab) => {
            if (!newTab.name) { return false }      
            this.setState({ tabs: [...this.state.tabs, newTab] });
        }
  
        render()
        {
            let className = 'bubble-text';
            return (
                     <div className={className}>
                        <AddNewTab onAdd={this.handleAddNewTab} />
               {
                   this.state.tabs.length ? (
                      <Tabs tabs={this.state.tabs} />
                ) : (null)
           }
               </div>
             )
               }
       }
