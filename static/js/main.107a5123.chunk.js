(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},111:function(e,t,a){e.exports=a(320)},297:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(51),s=a.n(r),l=a(106),i=a.n(l),c={cognito:{REGION:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_REGION,USER_POOL_ID:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_USER_POOL_ID,APP_CLIENT_ID:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_APP_CLIENT_ID}};a(297),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(24),d=a(25),h=a(27),p=a(26),m=a(28),f=a(13),g=Object(f.a)(),v=a(322),b=a(110),E=a(37),_=a.n(E),O=(a(298),a(300),a(107)),x=a.n(O),A=(a(102),a(315),a(316),"https://gizdo2uwtj.execute-api.us-east-1.amazonaws.com/dev/getmessage"),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={json_response:[],intervalId:null,arra:[]},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"fetchData",value:function(){var e=this;_.a.get(A,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}).then(function(t){e.state.arra;for(var a=0;a<t.data.length;a++){var n=t.data[a],o=n.message.S.split("**");if(o.length>=3){o[1],o[2];(void 0).push(n)}}console.log(void 0),e.setState({arra:void 0}),e.setState({json_response:void 0})}).catch(function(t){e.setState({json_response:null})})}},{key:"tt",value:function(){if(this.state.arra.length){var e=this.state.arra[20],t=this.state.arra[0];this.state.arra.splice(0,1),this.state.arra.push(t);var a=e.message.S,n=a.split("**")[1],o=a.split("**")[2];this.props.onAdd({name:n,message:o});var r=document.getElementById("message_text_ul");r&&(r.childElementCount>=20&&r.removeChild(r.childNodes[0]),r.scrollTop=r.scrollHeight+"22px")}}},{key:"componentDidMount",value:function(){var e=this;if(this.fetchData(),this.state.arra.length)for(var t=0;t<this.state.arra.length;t++){var a=this.state.arra[t].message.S,n=a.split("**")[1],o=a.split("**")[2];this.props.onAdd({name:n,message:o});var r=document.getElementById("message_text_ul");r&&(r.childElementCount>=20&&r.removeChild(r.childNodes[0]),r.scrollTop=r.scrollHeight+"32px")}this.interval=setInterval(function(){return e.fetchData()},3e4)}},{key:"render",value:function(){return null}}]),t}(o.a.Component),y=function(e){var t={backgroundColor:"#fff",display:"block",borderRadius:"3px",paddingTop:"3px",paddingBottom:"3px",paddingLeft:"5px",flex:1,flexDirection:"row",wordWrap:"break-word",maxWidth:"680px"},a={fontSize:"12px",color:"#555555"};return o.a.createElement("div",{id:"message_text_ul"},e.tabs.map(function(e){return o.a.createElement("ul",null,o.a.createElement("span",{style:a},e.name),o.a.createElement("br",null),o.a.createElement(x.a,null,o.a.createElement("span",{style:t},e.message)))}))},C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={tabs:[]},a.handleAddNewTab=function(e){if(!e.name)return!1;a.setState({tabs:[].concat(Object(b.a)(a.state.tabs),[e])})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"fetchData",value:function(){var e=this;_.a.get(A,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}).then(function(t){for(var a=[],n=0;n<t.data.length;n++){var o=t.data[n].message.S,r=o.split("**");if(r.length>=3){r[1],r[2];var s=o,l=s.split("**")[1],i=s.split("**")[2];a.push({name:l,message:i}),e.setState({tabs:a});var c=document.getElementById("message_text_ul");c&&(c.childElementCount>=20&&c.removeChild(c.childNodes[0]),c.scrollTop=c.scrollHeight+"32px")}}}).catch(function(t){e.setState({json_response:null})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return o.a.createElement("div",{className:"bubble-text"},o.a.createElement(w,{onAdd:this.handleAddNewTab}),this.state.tabs.length?o.a.createElement(y,{tabs:this.state.tabs}):null)}}]),t}(o.a.Component),j=(a(103),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"},a.home=function(){g.push("/home"),a.setState({homeBorder:"3px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(v.b,{history:g},o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,strict:!0,path:"/",component:C}),o.a.createElement(v.a,{default:!0,path:"/",component:C}),"/>"))))}}]),t}(o.a.Component));i.a.configure({Auth:{mandatorySignIn:!0,region:c.cognito.REGION,userPoolId:c.cognito.USER_POOL_ID,userPoolWebClientId:c.cognito.APP_CLIENT_ID},Analytics:{disabled:!0}}),s.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.107a5123.chunk.js.map