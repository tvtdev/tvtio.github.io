import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';
import JSONPretty from 'react-json-pretty';
import Linkify from 'react-linkify';
import '../App.css';
import 'react-json-pretty/themes/monikai.css';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');


const url = "https://gizdo2uwtj.execute-api.us-east-1.amazonaws.com/dev/getmessage";
class AddNewTab extends React.Component {
    state = {
        json_response: [],
        intervalId:null,
        arra:[]
    };
    fetchData()
    {       
        axios.get(url,{
            headers: { 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": true}
        }).then(res => {
            var obj = this.state.arra;        
             
            var objaaa ;//= obj;        
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

         
            var first = this.state.arra[20];  

            var first_one = this.state.arra[0];  
        
         //   this.state.arra.splice(20,1);
            this.state.arra.splice(0,1);

          //  this.state.arra.unshift(end);
            this.state.arra.push(first_one);

            const inputValue = first.message.S;
            const name_Value = inputValue.split("**")[1];
            const message_Value = inputValue.split("**")[2];
            this.props.onAdd({                name: name_Value,                message: message_Value            })

            {
                var list = document.getElementById("message_text_ul");
                if(list)
                {
                    if(list.childElementCount >= 20)
                        list.removeChild(list.childNodes[0]);
                    list.scrollTop = list.scrollHeight + '22px';
                }
            }
        }

    }

    componentDidMount() {

        this.fetchData();

        if(this.state.arra.length)
        {
            for(var i = 0;i<this.state.arra.length;i++)
            {
                var first = this.state.arra[i]; 
                const inputValue = first.message.S;
                const name_Value = inputValue.split("**")[1];
                const message_Value = inputValue.split("**")[2];
                this.props.onAdd({                name: name_Value,                message: message_Value            })

                {
                    var list = document.getElementById("message_text_ul");
                    if(list)
                    {
                        if(list.childElementCount >=20)
                            list.removeChild(list.childNodes[0]);
                        list.scrollTop = list.scrollHeight + '32px';
                    }
                }


            }
        }



        //athis.interval = setInterval(() => this.tt(), 1088);
        this.interval = setInterval(() => this.fetchData(), 30000);
    
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
        paddingLeft : "5px"  ,
        flex: 1,
        flexDirection: 'row',
        wordWrap:"break-word",
        maxWidth:"680px"
    };

    var namedivStysle = {
        fontSize: '12px',
        color:'#555555'
    };
    
    return (
        <div id="message_text_ul">
        {props.tabs.map((tab) => (      
           <div><span style={namedivStysle}>{tab.name}</span><br/><Linkify><span style={divStysle}>{tab.message}</span></Linkify></div>            
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
                        const name_Value = inputValue.split("**")[1];
                        const message_Value = inputValue.split("**")[2];
                        
                        tabsData.push({                name: name_Value,                message: message_Value            });
               
                        this.setState({tabs:tabsData});
                        var list = document.getElementById("message_text_ul");
                        if(list)
                        {
                            if(list.childElementCount >= 20)
                                list.removeChild(list.childNodes[0]);
                            list.scrollTop = list.scrollHeight + '32px';
                        }
                  

                }      
            }
            
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
