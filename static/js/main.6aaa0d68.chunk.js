(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t){},235:function(e,t,a){e.exports=a(557)},421:function(e,t,a){},437:function(e,t,a){},557:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(45),l=a.n(o),i=a(90),s=a.n(i),c={cognito:{REGION:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_REGION,USER_POOL_ID:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_USER_POOL_ID,APP_CLIENT_ID:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_APP_CLIENT_ID}};a(421),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(28),p=a(29),m=a(31),u=a(30),h=a(32),g=a(39),x=Object(g.a)(),b=a(567),f=a(225),E=a(46),v=a.n(E),w=a(35),B=a.n(w),C=a(125),O=a.n(C),_=a(216),y=a.n(_),A=(a(76),a(185),a(186),"https://gizdo2uwtj.execute-api.us-east-1.amazonaws.com/dev/getmessage"),j=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={json_response:[],intervalId:null,arra:[]},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"fetchData",value:function(){var e=this;v.a.get(A,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}).then(function(t){for(var a=e.state.arra,n=0;n<t.data.length;n++){var r=t.data[n],o=r.message.S.split("**");if(o.length>=3){o[1],o[2];a.push(r)}}console.log(a),e.setState({arra:a}),e.setState({json_response:a})}).catch(function(t){e.setState({json_response:null})})}},{key:"tt",value:function(){if(this.state.arra.length){var e=this.state.arra[20],t=this.state.arra[0];this.state.arra.splice(0,1),this.state.arra.push(t);var a=e.message.S,n=a.split("**")[1],r=a.split("**")[2];this.props.onAdd({name:n,message:r});var o=document.getElementById("message_text_ul");o&&(o.childElementCount>=20&&o.removeChild(o.childNodes[0]),o.scrollTop=o.scrollHeight+"22px")}}},{key:"componentDidMount",value:function(){var e=this;if(this.fetchData(),this.state.arra.length)for(var t=0;t<this.state.arra.length;t++){var a=this.state.arra[t].message.S,n=a.split("**")[1],r=a.split("**")[2];this.props.onAdd({name:n,message:r});var o=document.getElementById("message_text_ul");o&&(o.childElementCount>=20&&o.removeChild(o.childNodes[0]),o.scrollTop=o.scrollHeight+"22px")}this.interval=setInterval(function(){return e.fetchData()},3e3)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),I=function(e){var t={},a={backgroundColor:"#fff",display:"block",borderRadius:"3px",paddingTop:"3px",paddingBottom:"3px",paddingLeft:"5px",flex:1,flexDirection:"row",wordWrap:"break-word",maxWidth:"680px"};return r.a.createElement("div",{id:"message_text_ul"},e.tabs.map(function(e){return r.a.createElement("ul",{key:e.name+e.message},r.a.createElement("span",{style:t},e.name),r.a.createElement("br",null),r.a.createElement(y.a,null,r.a.createElement("span",{style:a},e.message)))}))},N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tabs:[]},a.handleAddNewTab=function(e){if(!e.name)return!1;a.setState({tabs:[].concat(Object(f.a)(a.state.tabs),[e])})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"fetchData",value:function(){var e=this;v.a.get(A,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}).then(function(t){for(var a=[],n=0;n<t.data.length&&n<30;n++){var r=t.data[n].message.S,o=r.split("**");if(o.length>=3){o[1],o[2];var l=r,i=l.split("**")[1],s=l.split("**")[2];a.push({name:i,message:s}),e.setState({tabs:a});var c=document.getElementById("message_text_ul");c&&(c.childElementCount>=20&&c.removeChild(c.childNodes[0]),c.scrollTop=c.scrollHeight+"22px")}}}).catch(function(t){e.setState({json_response:null})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"bubble-text"},r.a.createElement(j,{onAdd:this.handleAddNewTab}),this.state.tabs.length?r.a.createElement(I,{tabs:this.state.tabs}):null)}}]),t}(r.a.Component),S=(a(437),function(e){return r.a.createElement("div",{className:"dotLoaderContainer"},r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{style:{width:e.dimensions||"15px",height:e.dimensions||"15px"},className:"bounce1"}),r.a.createElement("div",{style:{width:e.dimensions||"15px",height:e.dimensions||"15px"},className:"bounce2"}),r.a.createElement("div",{style:{width:e.dimensions||"15px",height:e.dimensions||"15px"},className:"bounce3"})))}),R=a(186),k=(r.a.Component,a(566)),L=a(564),P=a(49),D=(r.a.Component,a(558)),T=a(565),U=(r.a.Component,function(e){return r.a.createElement("div",null,r.a.createElement(T.a,{basic:"very",columns:4,size:"large",selectable:!0,className:"space_between_two_component",celled:!0},r.a.createElement(T.a.Header,null,r.a.createElement(T.a.Row,null,r.a.createElement(T.a.HeaderCell,{textAlign:"center"},"Email"),r.a.createElement(T.a.HeaderCell,{textAlign:"center"},"Zip"),r.a.createElement(T.a.HeaderCell,{textAlign:"center"},"Comment"),r.a.createElement(T.a.HeaderCell,{textAlign:"center"},"Action"))),r.a.createElement(T.a.Body,null,r.a.createElement(H,{dataList:e.dataList,selectedRow:e.selectedRow}))))}),H=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).selectedRow=function(e){console.log("Row data ",e),console.log("Row data ",e.email),console.log("Row data ",e.Comment)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return this.props.dataList.length<=0?null:this.props.dataList&&this.props.dataList.length>0&&this.props.dataList.map(function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(T.a.Row,{key:a},r.a.createElement(T.a.Cell,{textAlign:"center",width:4},t.email),r.a.createElement(T.a.Cell,{textAlign:"center",width:1},t.zip),r.a.createElement(T.a.Cell,{textAlign:"center",width:4},t.Comment),r.a.createElement(T.a.Cell,{width:1},r.a.createElement(D.a,{primary:!0,onClick:function(){return e.selectedRow(t)}}," Submit"))))})}}]),t}(r.a.Component),W=(a(214),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"},a.home=function(){x.push("/home"),a.setState({homeBorder:"3px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"})},a.table=function(){x.push("/table"),a.setState({homeBorder:"0px",tableBorder:"3px",apiBorder:"0px",loginBorder:"0px"})},a.api=function(){x.push("/restapi"),a.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"3px",loginBorder:"0px"})},a.login=function(){x.push("/login"),a.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"3px"})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){"/login"===window.location.pathname?this.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"3px"}):"/table"===window.location.pathname?this.setState({homeBorder:"0px",tableBorder:"3px",apiBorder:"0px",loginBorder:"0px"}):"/restapi"===window.location.pathname?this.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"3px",loginBorder:"0px"}):this.setState({homeBorder:"3px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"container"},r.a.createElement(b.b,{history:x},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,strict:!0,path:"/",component:N}),r.a.createElement(b.a,{default:!0,path:"/",component:N}),"/>"))))}}]),t}(r.a.Component));s.a.configure({Auth:{mandatorySignIn:!0,region:c.cognito.REGION,userPoolId:c.cognito.USER_POOL_ID,userPoolWebClientId:c.cognito.APP_CLIENT_ID},Analytics:{disabled:!0}}),l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){}},[[235,1,2]]]);
//# sourceMappingURL=main.6aaa0d68.chunk.js.map