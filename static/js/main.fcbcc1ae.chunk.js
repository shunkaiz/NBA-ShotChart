(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){e.exports=a.p+"static/media/nba-logoman-word-white.9470e2d5.svg"},207:function(e,t,a){e.exports=a(458)},216:function(e,t,a){},226:function(e,t,a){},317:function(e,t){},319:function(e,t){},360:function(e,t){},361:function(e,t){},363:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=363},385:function(e,t,a){},408:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(68),r=a(1),o=a.n(r),l=a(9),c=a.n(l),i=(a(216),a(13)),s=a(14),p=a(16),u=a(15),m=a(17),d=(a(226),a(187)),h=a.n(d),y=a(27),f=a(460),v=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("div",{className:"App-title"},"Dashboard"),o.a.createElement("div",{className:"Tool-bar"},0===window.localStorage.length?o.a.createElement(f.a,{to:"/login"},o.a.createElement("div",{className:"Login-box"},o.a.createElement(y.a,{type:"user",theme:"outlined",style:{fontSize:"25px"}}))):o.a.createElement(f.a,{to:"/logout"},o.a.createElement("div",{className:"Login-box"},o.a.createElement(y.a,{type:"logout",theme:"outlined",style:{fontSize:"25px"}})))))}}]),t}(o.a.Component),g=a(203),b=a(60),E=a(36),O=a.n(E),j=a(186),S=(a(385),"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190"),w=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:this.props.logoUrl,className:"teamLogo"}),o.a.createElement("div",{className:"buttonBar"},o.a.createElement(j.a,{type:"dashed",ghost:!0,shape:"circle",size:"default",className:"removeButton",onClick:function(){return e.props.removePlayerHandler()}},o.a.createElement("b",null,"-")),o.a.createElement(j.a,{type:"dashed",ghost:!0,shape:"circle",size:"default",className:"addButton",onClick:function(){return e.props.addPlayerHandler("Stephen Curry")}},o.a.createElement("b",null,"+"))))}}]),t}(o.a.Component),C=(o.a.Component,function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.playerInfo,t=e.height,a=e.weight,n=e.pts,r=e.reb,l=e.ast,c=e.pie;return o.a.createElement("div",null,o.a.createElement("div",{className:"profile-entry"},o.a.createElement("div",{className:"profile-entry-left"},"Height"),o.a.createElement("div",{className:"profile-entry-right"},"".concat(t))),o.a.createElement("div",{className:"profile-entry"},o.a.createElement("div",{className:"profile-entry-left"},"Weight"),o.a.createElement("div",{className:"profile-entry-right"},"".concat(a))),o.a.createElement("div",{className:"profile-entry"},o.a.createElement("div",{className:"profile-entry-left"},"PTS"),o.a.createElement("div",{className:"profile-entry-right"},"".concat(n))),o.a.createElement("div",{className:"profile-entry"},o.a.createElement("div",{className:"profile-entry-left"},"REB"),o.a.createElement("div",{className:"profile-entry-right"},"".concat(r))),o.a.createElement("div",{className:"profile-entry"},o.a.createElement("div",{className:"profile-entry-left"},"AST"),o.a.createElement("div",{className:"profile-entry-right"},"".concat(l))),o.a.createElement("div",{className:"profile-entry"},o.a.createElement("div",{className:"profile-entry-left"},"PIE"),o.a.createElement("div",{className:"profile-entry-right"},"".concat(c))))}}]),t}(o.a.Component)),N=function(e){return new Promise(function(t,a){O.a.stats.playerInfo({PlayerID:O.a.findPlayer(e).playerId}).then(function(e){var a=e.playerHeadlineStats[0];a.teamAbbreviation=e.commonPlayerInfo[0].teamAbbreviation,a.weight=e.commonPlayerInfo[0].weight,a.height=e.commonPlayerInfo[0].height,t(a)})})},I=function(e){var t={onSelected:!0,minCount:2,charType:"hexbin",disPlayToolTip:!0};return t.playerInfo=Object.assign(e,t),t},P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleRemovePlayer=function(){a.props.removeStorePlayer(a.props.playerIdx)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.playerInfo,t=e.teamAbbreviation,a=e.playerId;return o.a.createElement("div",{className:"profile"},o.a.createElement("h2",null,this.props.playerInfo.playerName),o.a.createElement("img",{src:"".concat(S,"/").concat(a,".png"),className:"profilePic"}),window.localStorage.length>0?o.a.createElement(w,{logoUrl:"".concat("https://stats.nba.com/media/img/teams/logos","/").concat(t,"_logo.svg"),addPlayerHandler:this.props.addStorePlayer,removePlayerHandler:this.handleRemovePlayer}):null,o.a.createElement(C,{playerInfo:this.props.playerInfo}))}}]),t}(o.a.Component),k=a(202),T=a(204),x=a(137);window.d3_hexbin={hexbin:T.a};var A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updateChart=function(){O.a.stats.shots({PlayerID:a.props.playerId}).then(function(e){console.log(e);var t=e.shot_Chart_Detail.map(function(e){return{x:(e.locX+250)/10,y:(e.locY+50)/10,action_type:e.actionType,shot_distance:e.shotDistance,shot_made_flag:e.shotMadeFlag}}),n=k.a("#shot-chart".concat(a.props.playerIdx));n.html("");var r=Object(x.court)().width(500),o=Object(x.shots)().shotRenderThreshold(a.props.minCount).displayToolTips(a.props.toolTip).displayType(a.props.charType);n.call(r),n.datum(t).call(o)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateChart()}},{key:"componentDidUpdate",value:function(){this.updateChart()}},{key:"render",value:function(){return o.a.createElement("div",{className:"shot-chart",id:"shot-chart".concat(this.props.playerIdx)})}}]),t}(o.a.Component),B=a(461),D=a(462),L=a(466),_=a(468),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:1},a.onChange=function(e){a.setState({inputValue:e}),a.props.onCountSliderChange(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(B.a,null,o.a.createElement(D.a,{span:12},o.a.createElement(L.a,{min:1,max:20,onChange:this.onChange,value:this.state.inputValue})),o.a.createElement(D.a,{span:12},o.a.createElement(_.a,{min:1,max:20,style:{marginLeft:16},value:this.state.inputValue,onChange:this.onChange})))}}]),t}(o.a.Component),R=a(470),U=a(131),V=a.n(U),W=(R.a.Group,function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.playerInfo),o.a.createElement("div",{className:"dataView"},o.a.createElement(A,{playerId:this.props.playerInfo.playerId,minCount:this.props.minCount,charType:this.props.charType,toolTip:this.props.disPlayToolTip,playerIdx:this.props.playerIdx}))}}]),t}(o.a.Component)),z=a(465),F=a(459),M=z.a.Option,J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(p.a)(this,Object(u.a)(t).call(this))).state={dataSource:[]},e.handleSearch=function(t){e.setState({dataSource:t?O.a.searchPlayers(t).map(function(e){var t=e.fullName,a=e.playerId;return o.a.createElement(M,{key:a,value:t},o.a.createElement("img",{className:"player-option-image",src:"".concat(S,"/").concat(a,".png")}),o.a.createElement("span",{className:"player-option-label"},t))}):[]})},e.updateSelected=function(t){console.log("updated"),e.onSelected=t},e.onSelect=function(t){e.props.updatePlayer(e.onSelected,t)},e.onSelected=0,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){window.nba=O.a;var e=this.state.dataSource;return o.a.createElement(z.a,{className:"searchBar",size:"large",dataSource:e,onSelect:this.onSelect,onSearch:this.handleSearch,placeholder:"Type NBA player name",optionLabelProp:"value"},o.a.createElement(F.a,{suffix:o.a.createElement(y.a,{type:"search",className:"certain-category-icon"})}))}}]),t}(o.a.Component),q=a(469),G=a(471),Q=a(467),X=a(463),Y=R.a.Group,$=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(p.a)(this,Object(u.a)(t).call(this))).onCountSliderChange=function(t){e.props.changeShotCount(t,e.onSelected)},e.onChartTypeChange=function(t){e.props.changeShotType(t.target.value,e.onSelected)},e.onToolTipChange=function(){e.props.toggleShotTips(e.onSelected)},e.onSelected=0,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement(G.a,{onClick:function(t){var a=t.key;e.onSelected=a,e.props.updateOnSelected(a),q.a.info("Select on player ".concat(a))}},this.props.players.map(function(e,t){return o.a.createElement(G.a.Item,{key:t}," ",e.playerInfo.playerName)}));return o.a.createElement("div",{className:"filters"},o.a.createElement(Q.a,{overlay:t},o.a.createElement("a",{className:"dropdown-link",href:"#"},"Hover me, select the player(s) ",o.a.createElement(y.a,{type:"down"}))),o.a.createElement(H,{onCountSliderChange:V.a.debounce(this.onCountSliderChange,500)}),o.a.createElement("br",null),o.a.createElement(B.a,null,o.a.createElement(D.a,{span:12},o.a.createElement(Y,{onChange:this.onChartTypeChange},o.a.createElement(R.a,{value:"hexbin"},"Hexbin"),o.a.createElement(R.a,{value:"scatter"},"Scatter"))),o.a.createElement(D.a,{span:12},o.a.createElement("span",null,"ToolTips  "),o.a.createElement(X.a,{checkedChildren:"On",unCheckedChildren:"Off",onChange:this.onToolTipChange,defaultChecked:!0}))))}}]),t}(o.a.Component),K=Object(b.b)(function(e){return{players:e}},function(e){return{changeShotCount:function(t,a){e({type:"modify",playerAttr:"shotCount",playerIdx:a,value:t})},changeShotType:function(t,a){e({type:"modify",playerAttr:"shotType",playerIdx:a,value:t})},toggleShotTips:function(t){e({type:"modify",playerAttr:"shotTip",playerIdx:t})}}})($),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeSelectedPlayer=function(e){a.state.onSelected!==e&&a.setState(function(t){return Object(g.a)({},t,{onSelected:e})})},a.updateSearchBarOnSelected=function(e){a.searchBar.current.updateSelected(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initPlayer(),this.searchBar=o.a.createRef()}},{key:"componentDidUpdate",value:function(){console.log(this.props.players)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"dashBoard"},o.a.createElement("div",{className:"searchBlock"},o.a.createElement(J,{updatePlayer:this.props.updatePlayer,ref:this.searchBar})),o.a.createElement(K,{updateOnSelected:this.updateSearchBarOnSelected}),this.props.players.map(function(t,a){return o.a.createElement("div",{className:"player",key:a},o.a.createElement(P,Object.assign({},t,{addComparePlayer:e.addComparePlayer,addStorePlayer:e.props.addPlayer,removeStorePlayer:e.props.removePlayer,changeSelectedPlayer:e.changeSelectedPlayer,playerIdx:a})),o.a.createElement(W,Object.assign({},t,{playerIdx:a})))}))}}]),t}(o.a.Component),ee=Object(b.b)(function(e){return{players:e}},function(e){return{initPlayer:function(){N("Lebron James").then(function(t){e({type:"init",playerInfo:t})})},addPlayer:function(t){N(t).then(function(t){console.log(t),e({type:"add player",playerInfo:t})})},removePlayer:function(t){e({type:"remove player",playerIdx:t})},updatePlayer:function(t,a){N(a).then(function(a){e({type:"modify",playerInfo:a,playerIdx:t,playerAttr:"updatePlayer"})})}}})(Z),te=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(ee,null))}}]),t}(r.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=a(472),oe=a(474),le=a(475),ce=a(464),ie=a(473),se=(a(408),ce.a.Item),pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(window.localStorage.setItem(t.username,t.password),console.log("Received values of form: ",t))})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement("div",{className:"login-box"},o.a.createElement(ce.a,{onSubmit:this.handleSubmit,className:"login-form"},o.a.createElement(se,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(o.a.createElement(F.a,{prefix:o.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),o.a.createElement(se,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(o.a.createElement(F.a,{prefix:o.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),o.a.createElement(se,null,e("remember",{valuePropName:"checked",initialValue:!0})(o.a.createElement(ie.a,null,"Remember me")),o.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),o.a.createElement(j.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",o.a.createElement("a",{href:""},"register now!")))))}}]),t}(r.Component),ue=ce.a.create()(pe),me=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{to:"/"},o.a.createElement(j.a,{type:"primary",onClick:function(){window.localStorage.clear(),window.location.href="/"}},"Logout"))}}]),t}(r.Component),de=a(83);function he(){return o.a.createElement(re.a,null,o.a.createElement(oe.a,null,o.a.createElement(le.a,{exact:!0,path:"/",component:te}),o.a.createElement(le.a,{path:"/login",component:ue}),o.a.createElement(le.a,{path:"/logout",component:me})))}var ye=Object(de.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("init"===t.type)return[].concat(Object(n.a)(e),[I(t.playerInfo)]);if("add player"===t.type)return[].concat(Object(n.a)(e),[I(t.playerInfo)]);if("modify"===t.type){switch(t.playerAttr){case"shotCount":e[t.playerIdx].minCount=t.value,console.log(e[t.playerIdx].minCount);break;case"shotType":e[t.playerIdx].charType=t.value;break;case"shotTip":e[t.playerIdx].disPlayToolTip=!e[t.playerIdx].disPlayToolTip;break;case"updatePlayer":e[t.playerIdx]=I(t.playerInfo)}return Object(n.a)(e)}return"remove player"===t.type?(e.splice([t.playerIdx],1),Object(n.a)(e)):e});console.log(ye),c.a.render(o.a.createElement(b.a,{store:ye},o.a.createElement(function(){return o.a.createElement(he,null)},null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/NBA-ShotChart",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/NBA-ShotChart","/service-worker.js");ae?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ne(e)})}}()}},[[207,2,1]]]);
//# sourceMappingURL=main.fcbcc1ae.chunk.js.map