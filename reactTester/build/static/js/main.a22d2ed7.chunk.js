(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},233:function(e,t,n){e.exports=n(543)},419:function(e,t,n){},423:function(e,t,n){},543:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(44),l=n.n(r),i=n(90),f=n.n(i),c={cognito:{REGION:Object({NODE_ENV:"production",PUBLIC_URL:"/myapp"}).REACT_APP_REGION,USER_POOL_ID:Object({NODE_ENV:"production",PUBLIC_URL:"/myapp"}).REACT_APP_USER_POOL_ID,APP_CLIENT_ID:Object({NODE_ENV:"production",PUBLIC_URL:"/myapp"}).REACT_APP_APP_CLIENT_ID}};n(419),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(28),d=n(29),p=n(33),m=n(30),u=n(34),h=n(39),g=Object(h.a)(),x=n(553),E=n(48),b=n.n(E),w=n(35),B=n.n(w),v=n(92),O=n.n(v),_=(n(76),n(185),n(186)),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={json_response:null,is_user_valid:!0},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://jz9ap7x9if.execute-api.us-east-1.amazonaws.com/dev/getmessage",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}).then(function(t){console.log(JSON.stringify(t.data)),e.setState({json_response:JSON.stringify(t.data)});t.data;for(var n=0;n<t.data.Items.length;n++){var a=t.data.Items[n].message.S.split("**"),r=a[0],i=r.substring(1,r.length),f=a[1],c=f.substring(1,f.length-1);console.log(i),console.log(c),l.a.render(),o.a.createElement("article").innerHTML='\n    <div class="media-content">\n        <div class="content">\n            <p>\n     dfgdsgfffffffffffffffffffffffffffffffffff dfgdsgfffffffffffffffffffffffffffffffffffdfgdsgfffffffffffffffffffffffffffffffffffdfgdsgfffffffffffffffffffffffffffffffffff\n            </p>\n        </div>\n    </div>\n    '}}).catch(function(t){e.setState({json_response:null})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"centerAlignment"},"fhz",o.a.createElement(O.a,{data:this.state.json_response,theme:_,style:{textAlign:"left"}}))}}]),t}(o.a.Component),y=(n(423),function(e){return o.a.createElement("div",{className:"dotLoaderContainer"},o.a.createElement("div",{className:"spinner"},o.a.createElement("div",{style:{width:e.dimensions||"15px",height:e.dimensions||"15px"},className:"bounce1"}),o.a.createElement("div",{style:{width:e.dimensions||"15px",height:e.dimensions||"15px"},className:"bounce2"}),o.a.createElement("div",{style:{width:e.dimensions||"15px",height:e.dimensions||"15px"},className:"bounce3"})))}),A=n(186),j=(o.a.Component,n(552)),I=n(550),N=n(49),R=(o.a.Component,n(544)),L=n(551),P=(o.a.Component,function(e){return o.a.createElement("div",null,o.a.createElement(L.a,{basic:"very",columns:4,size:"large",selectable:!0,className:"space_between_two_component",celled:!0},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Row,null,o.a.createElement(L.a.HeaderCell,{textAlign:"center"},"Email"),o.a.createElement(L.a.HeaderCell,{textAlign:"center"},"Zip"),o.a.createElement(L.a.HeaderCell,{textAlign:"center"},"Comment"),o.a.createElement(L.a.HeaderCell,{textAlign:"center"},"Action"))),o.a.createElement(L.a.Body,null,o.a.createElement(S,{dataList:e.dataList,selectedRow:e.selectedRow}))))}),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).selectedRow=function(e){console.log("Row data ",e),console.log("Row data ",e.email),console.log("Row data ",e.Comment)},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.dataList.length<=0?null:this.props.dataList&&this.props.dataList.length>0&&this.props.dataList.map(function(t,n){return o.a.createElement(o.a.Fragment,{key:n},o.a.createElement(L.a.Row,{key:n},o.a.createElement(L.a.Cell,{textAlign:"center",width:4},t.email),o.a.createElement(L.a.Cell,{textAlign:"center",width:1},t.zip),o.a.createElement(L.a.Cell,{textAlign:"center",width:4},t.Comment),o.a.createElement(L.a.Cell,{width:1},o.a.createElement(R.a,{primary:!0,onClick:function(){return e.selectedRow(t)}}," Submit"))))})}}]),t}(o.a.Component),k=(n(214),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"},n.home=function(){g.push("/home"),n.setState({homeBorder:"3px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"})},n.table=function(){g.push("/table"),n.setState({homeBorder:"0px",tableBorder:"3px",apiBorder:"0px",loginBorder:"0px"})},n.api=function(){g.push("/restapi"),n.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"3px",loginBorder:"0px"})},n.login=function(){g.push("/login"),n.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"3px"})},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){"/login"===window.location.pathname?this.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"0px",loginBorder:"3px"}):"/table"===window.location.pathname?this.setState({homeBorder:"0px",tableBorder:"3px",apiBorder:"0px",loginBorder:"0px"}):"/restapi"===window.location.pathname?this.setState({homeBorder:"0px",tableBorder:"0px",apiBorder:"3px",loginBorder:"0px"}):this.setState({homeBorder:"3px",tableBorder:"0px",apiBorder:"0px",loginBorder:"0px"})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(x.b,{history:g},o.a.createElement(x.c,null,o.a.createElement(x.a,{exact:!0,strict:!0,path:"/",component:C}),o.a.createElement(x.a,{default:!0,path:"/",component:C}),"/>"))))}}]),t}(o.a.Component));f.a.configure({Auth:{mandatorySignIn:!0,region:c.cognito.REGION,userPoolId:c.cognito.USER_POOL_ID,userPoolWebClientId:c.cognito.APP_CLIENT_ID},Analytics:{disabled:!0}}),l.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,n){}},[[233,1,2]]]);
//# sourceMappingURL=main.a22d2ed7.chunk.js.map