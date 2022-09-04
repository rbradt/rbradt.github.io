(this["webpackJsonprbradt.github.io"]=this["webpackJsonprbradt.github.io"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(5),a=n.n(i),r=n(15),o=n.n(r),c=(n(22),n(1)),l=n(2),u=n(7),h=n(6),d=(n.p,n(4)),v=n(9),p=n(10),b=n(8),m=function(){function e(){var t=this;Object(c.a)(this,e),this.titles=["RBRADT.GITHUB.IO","TICTACTOE ONLINE","MLB TRIP PLANNER","MESSENGER","RASM"],this.descriptions=["This website. 100% local for now, but I plan on implementing a RESTful api with Spring Boot (ideally with Docker and Kubernates to create microservices).","A minimalistic client/server application that allows users to play and spectate games of tic-tac-toe online. Within the app, players can create accounts to have their match history/statistics recorded, while administrative users can delete users and end active matches. The creation of this app involved numerous design patterns, including the observer, factory method, adapter and singleton patterns. The server-side app runs off of multiple microservices that I built from the ground up (using Java threading and socketing) to independently handle database management and game logic, while the client-side application utilizes a pruning minimax algorithm for the tic-tac-toe AI.","A niche application that assists MLB superfans in planning optimized trips to any number of the MLB stadiums in the United States. Utilizing my implementations of A*, Dijkstra's and Kruskal's algorithms on both adjacency-list and adjacency-matrix graph structures, the app is able to determine optimal paths for any trip. Additionally, the app features Huffman Coding to compress necessary stadium and location data, skip lists for psuedo-randomization and heap sorts to increase the efficiency of the app, thus, providing a quality user experience.","As the name not-so-subtly implies, messenger is a simple client/server messaging application that emulates AOL's Instant Messenger service. Involving multithreading, networking and database management, the app provides a basic online messenging service, allowing users to send messages/images, join chats, and view the history of chat rooms.","My Raspberry Assembly (RASM) projects are a series of reusable, optimized data structures and algorithms written in ARM Assembly Language."],this.languages=["- JavaScript, HTML, CSS, React, TypeScript, NPM, FontAwesome -","- Java, JavaFX, CSS, MySQL -","- C++, QT GUI, CSS, SQL, Excel -","- Java, JavaFX, CSS, MySQL -","- ARM Assembly, C++, Linux, Raspberry Pi -"],this.icons=[["js","html","css","react"].map((function(e){return new j(e,"")})),["java","css","sql"].map((function(e){return new j(e,"")})),["cpp","css","sql"].map((function(e){return new j(e,"")})),["java","css","sql"].map((function(e){return new j(e,"")})),["assembly","cpp","linux","pi"].map((function(e){return new j(e,"")}))],this.images=[["https://i.imgur.com/JhVrUSu.png","https://i.imgur.com/AfHCDR2.png","https://i.imgur.com/uCqSFEW.png?1","https://i.imgur.com/KLG4OeG.png"],["https://i.redd.it/bbflzw8lmfoz.png"],["https://i.redd.it/bbflzw8lmfoz.png"],["https://i.redd.it/bbflzw8lmfoz.png"],["https://i.redd.it/bbflzw8lmfoz.png"]],this.linkToSrc=["https://github.com/rbradt/rbradt.github.io","https://github.com/basbelg/Tic-Tac-Toe/tree/Game_Riley","https://github.com/cs1d-baseballproject/Baseball-Project---CS1D","https://github.com/basbelg/MessageServerCS4B/tree/master/src","https://github.com/rbradt/RASM4"];var n=0;this.projects=this.titles.map((function(e){return new f(e,t.descriptions[n],t.languages[n],t.icons[n],t.images[n],t.linkToSrc[n++])}))}return Object(l.a)(e,[{key:"getProjectsList",value:function(){return this.projects}}]),e}(),f=function e(t,n,s,i,a,r){Object(c.a)(this,e),this.title=t,this.description=n,this.languages=s,this.icons=i,this.images=a,this.linkToSrc=r},j=function e(t,n){Object(c.a)(this,e),this.name=t,this.link=n},g=(n(28),n(14),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(c.a)(this,n),i=t.call(this,e),v.b.add(p.k,p.c,p.e,p.a,p.g,p.l,p.j,p.f,p.i,p.b,b.g,b.a,b.j,b.c),i.iconsJSX=new Map([["js",Object(s.jsx)(d.a,{icon:["fab","js-square"]})],["html",Object(s.jsx)(d.a,{icon:["fab","html5"]})],["css",Object(s.jsx)(d.a,{icon:["fab","css3"]})],["react",Object(s.jsx)(d.a,{icon:["fab","react"]})],["java",Object(s.jsx)(d.a,{icon:["fab","java"]})],["sql",Object(s.jsx)(d.a,{icon:"database"})],["cpp",Object(s.jsx)(d.a,{icon:["fab","cuttlefish"]})],["assembly",Object(s.jsx)(d.a,{icon:"microchip"})],["linux",Object(s.jsx)(d.a,{icon:["fab","linux"]})],["pi",Object(s.jsx)(d.a,{icon:["fab","raspberry-pi"]})]]);var a=(new m).getProjectsList(),r=0;return i.UIProjectList=a.map((function(e){var t=e.icons.map((function(e){return Object(s.jsx)("a",{href:e.link,"aria-label":e.name,className:e.name,children:i.iconsJSX.get(e.name)})}));return Object(s.jsx)(y,{count:r++,title:e.title,description:e.description,languages:e.languages,icons:t,images:e.images,src:e.linkToSrc})})),i}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"projects-list",children:this.UIProjectList})}}]),n}(i.Component)),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={image:0},s}return Object(l.a)(n,[{key:"setImg",value:function(e){this.setState({image:e<0?this.props.images.length-1:e%this.props.images.length})}},{key:"render",value:function(){var e=this,t=this.props.count,n={animation:"element-init-"+(t%2==0?"right":"left")+" "+(.7-t/15)+"s ease-out forwards "+t+"s"};return Object(s.jsxs)("div",{className:"project-element",style:n,children:[Object(s.jsxs)("div",{className:"content layout-row project-img",children:[Object(s.jsx)("div",{className:"prev-img unselectable",onClick:function(){return e.setImg(e.state.image-1)},children:"<"}),Object(s.jsx)("img",{src:this.props.images[this.state.image]}),Object(s.jsx)("div",{className:"next-img unselectable",onClick:function(){return e.setImg(e.state.image+1)},children:">"})]}),Object(s.jsx)("div",{className:"project-divider"}),Object(s.jsxs)("div",{className:"project-info content layout-column",children:[Object(s.jsx)("div",{className:"title unselectable",children:Object(s.jsx)("a",{href:this.props.src,"aria-label":"go to source code",children:Object(s.jsxs)("h3",{children:[this.props.title," ",Object(s.jsx)("span",{children:Object(s.jsx)(d.a,{icon:"code"})})]})})}),Object(s.jsx)("div",{className:"languages",children:this.props.languages}),Object(s.jsx)("div",{className:"description",children:Object(s.jsx)("p",{children:this.props.description})}),Object(s.jsx)("div",{className:"links content layout-row",children:this.props.icons})]})]})}}]),n}(i.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).scrollDelay=new x((function(e){return s.onScroll(e)}),200),s.mouseMoveDelay=new x((function(e){return s.onMouseMove(e)}),200),s.state={shuttle:new k},v.b.add(p.h,p.d,b.i),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollDelay.preDelay()),this.scroll("auto")}},{key:"componentDidUpdate",value:function(){this.scroll()}},{key:"componentWillUnmount",value:function(){this.scrollDelay.clearDelay(),window.removeEventListener("scroll",this.scrollDelay.preDelay())}},{key:"scroll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"smooth";if(null!=this.props.focus){var t;switch(this.props.focus){case"nav_about":t=window.innerHeight;break;case"nav_coming":t=2*window.innerHeight;break;case"nav_home":default:t=0}window.scrollTo({top:t,left:0,behavior:e}),this.props.rmFocus()}}},{key:"onScroll",value:function(e){window.pageYOffset<4*window.innerHeight/5?this.props.setScene("nav_home"):window.pageYOffset<9*window.innerHeight/5?this.props.setScene("nav_about"):this.props.setScene("nav_coming")}},{key:"onMouseMove",value:function(e){var t=this.state.shuttle,n=document.getElementById("shuttle").getBoundingClientRect();t.isActive()&&this.setState({shuttle:new k(this.state.shuttle,[n.left,n.top],[e.clientX,e.clientY])})}},{key:"onShuttleClicked",value:function(e){var t=document.getElementById("shuttle").getBoundingClientRect(),n=new k(this.state.shuttle,[t.left+t.width/2,t.top+t.height/2],[t.left+t.width/2,t.top+t.height/2]);n.setActive(!n.isActive()),this.setState({shuttle:n})}},{key:"renderAnimation",value:function(){}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"main-container",onMouseMove:this.mouseMoveDelay.postDelay(),children:[Object(s.jsxs)("div",{id:"home",className:"section-wrapper home unselectable",children:[Object(s.jsxs)("h1",{children:["ril",Object(s.jsx)("span",{className:"flicker1",children:"e"}),"y bradt"]}),Object(s.jsxs)("div",{className:"content layout-row home-button-container",children:[Object(s.jsx)("a",{"aria-label":"LinkedIn",href:"https://www.linkedin.com/in/riley-b-09b8301a5/",children:Object(s.jsx)(d.a,{icon:["fab","linkedin"]})}),Object(s.jsx)("a",{"aria-label":"GitHub",href:"https://github.com/rbradt",children:Object(s.jsx)(d.a,{icon:["fab","github-square"]})}),Object(s.jsx)("a",{"aria-label":"Shuttle",id:"shuttle",className:this.state.shuttle.getStyleClass(),style:this.state.shuttle.getStyle(),onClick:function(t){return e.onShuttleClicked(t)},children:Object(s.jsx)(d.a,{icon:"space-shuttle"})})]})]}),Object(s.jsxs)("div",{id:"about",className:"section-wrapper about",children:[Object(s.jsx)("h2",{className:"unselectable",children:"About Me"}),Object(s.jsxs)("div",{className:"content layout-row",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{children:"I'm Riley Bradt"}),", an undergraduate student at the University of California, Riverside pursuing a B.S. in Mathematics with a minor in Computer Science. I low level languages, such as C++ and ARM Assembly Language, and am interested in cybersecurity, DevSecOps, cryptography and networking."]})})]})]}),Object(s.jsxs)("div",{id:"projects",className:"section-wrapper projects",children:[Object(s.jsx)("h2",{className:"unselectable",children:"My Projects"}),Object(s.jsx)(g,{})]})]})}}]),n}(i.Component),k=function(){function e(t,n,s){Object(c.a)(this,e),t instanceof e?(this.ssCoords=n,this.cursorCoords=s,this.angle=t.angle,this.active=t.active):(this.cursorCoords=s instanceof Array?s:[0,0],this.ssCoords=n instanceof Array?n:[0,0],this.angle=0,this.active=!1)}return Object(l.a)(e,[{key:"isActive",value:function(){return this.active}},{key:"setActive",value:function(e){this.active=e}},{key:"delta",value:function(e){return this.cursorCoords[e]-this.ssCoords[e]}},{key:"distanceToCursor",value:function(){return Math.sqrt(Math.pow(this.delta(0),2)+Math.pow(this.delta(1),2))}},{key:"angleToCursor",value:function(){var e=this.delta(0)>=0?this.delta(1)>=0?180*Math.atan(this.delta(1)/this.delta(0))/Math.PI:360-180*Math.atan(-1*this.delta(1)/this.delta(0))/Math.PI:this.delta(1)>=0?180-180*Math.atan(-1*this.delta(1)/this.delta(0))/Math.PI:180+180*Math.atan(this.delta(1)/this.delta(0))/Math.PI,t=e-this.angle;return Math.abs(t)>180&&(e=this.angle+(Math.abs(t%360)<=180?t%360:(t<=0?1:-1)*(360-Math.abs(t%360)))),e}},{key:"getStyleClass",value:function(){return this.active?"shuttle-active":""}},{key:"getStyle",value:function(){var e={};return this.active&&(this.distanceToCursor()>100?(this.angle=this.angleToCursor(),e={left:this.cursorCoords[0]+"px",top:this.cursorCoords[1]+"px",transform:"rotate("+this.angle+"deg)"}):(this.angle=this.angleToCursor(),e={left:this.ssCoords[0]+"px",top:this.ssCoords[1]+"px",transform:"rotate("+this.angle+"deg)"})),e}}]),e}(),x=function(){function e(t,n){var s=this;Object(c.a)(this,e),this.currentDelay=null,this.preDelayFunc=function(e){null==s.currentDelay&&(s.currentDelay=setTimeout((function(){t(e),s.currentDelay=null}),n))},this.postDelayFunc=function(e){null==s.currentDelay&&(t(e),s.currentDelay=setTimeout((function(){s.currentDelay=null}),n))},this.pauseFunc=function(e){clearTimeout(s.currentDelay),s.currentDelay=setTimeout((function(){return t(e)}),n)}}return Object(l.a)(e,[{key:"preDelay",value:function(){return this.preDelayFunc}},{key:"postDelay",value:function(){return this.postDelayFunc}},{key:"pause",value:function(){return this.pauseFunc}},{key:"getDelay",value:function(){return this.currentDelay}},{key:"clearDelay",value:function(){clearTimeout(this.currentDelay)}}]),e}(),w=function(){function e(t,n,s){Object(c.a)(this,e),this.row=t,this.col=n,this.side=s}return Object(l.a)(e,[{key:"getRow",value:function(){return this.row}},{key:"getCol",value:function(){return this.col}},{key:"getSide",value:function(){return this.side}}]),e}(),S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(c.a)(this,e),this.board=null==t?Array(9).fill(null):t.board.slice(),this.turn=null==n?0:n,this.movesIterator=0}return Object(l.a)(e,[{key:"at",value:function(e){return this.board[e]}},{key:"set",value:function(e,t){this.board[e]=t}},{key:"getTurn",value:function(){return this.turn}},{key:"toOutputBoard",value:function(){return this.board.slice()}},{key:"equals",value:function(e){for(var t=!0,n=0;n<9;n++)if(this.board[n]!==e.board[n]){t=!1;break}return t}},{key:"resetMoveIterator",value:function(){this.movesIterator=-1}},{key:"getMove",value:function(){return new w(Math.floor(this.movesIterator/3),this.movesIterator%3,this.turn)}},{key:"getNextMove",value:function(){for(;null!=this.board[++this.movesIterator]&&this.movesIterator<9;);if(this.movesIterator>8)return null;var t=new e(this,this.turn+1);return t.board[this.movesIterator]=this.turn%2==0?"X":"O",t}}]),e}(),C=function(){function e(t,n){Object(c.a)(this,e),this.history=[new S],this.turn=0,this.gamemode=t,this.player=0==t||2==n?null:n,this.observers=[],this.gameOver=!1}return Object(l.a)(e,[{key:"verifyMove",value:function(e){return!this.gameOver&&null==this.history[this.turn].at(3*e.row+e.col)&&(null==this.player||this.turn%2==this.player)}},{key:"getBoard",value:function(){return this.history[this.turn]}},{key:"getTurn",value:function(){return this.turn}},{key:"isGameOver",value:function(){return this.gameOver}},{key:"isPlayerMove",value:function(){return this.turn%2==this.player}},{key:"update",value:function(e,t){var n=!1;if(t instanceof w&&(this.verifyMove(t)||null==e)){var s=new S(this.history[this.turn],this.turn+1);s.set(3*t.row+t.col,this.turn++%2===0?"X":"O"),this.gameOver=null!==M.evaluate(s),this.history.push(s),n=!0}else"number"==typeof t&&t<=this.turn&&(this.turn=t<1?0:t,this.history=this.history.slice(0,this.turn+1),this.gameOver=!1,n=!0);null!=e&&n&&this.notifyObservers(e)}},{key:"addObserver",value:function(e){this.observers.push(e)}},{key:"notifyObservers",value:function(e){for(var t=0;t<this.observers.length;t++)this.observers[t].update(e,this)}}]),e}(),M=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"evaluate",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0;n<this.winningIndeces.length;n++){var s=this.winningIndeces[n];if(null!=e.at(s[0])&&e.at(s[0])===e.at(s[1])&&e.at(s[0])===e.at(s[2])){var i="X"===e.at(s[0])?-1:1;return t?i*(100-e.getTurn()):i}}return 9==e.getTurn()?0:null}}]),e}();M.winningIndeces=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];n(29),n(13);var T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("button",{className:"ttt-board-cell",onClick:this.props.onClick,onMouseOver:this.props.hover,onMouseOut:this.props.nohover,style:this.props.style,children:[" ",this.props.value," "]})}}]),n}(i.Component),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"createCell",value:function(e){var t,n,i=this;return this.props.isHovered[e]?(t=this.props.turn%2===0?"X":"O",n={color:"#0f1011"}):(t=this.props.isNewGame?"TICTACTOE"[e]:this.props.board[e],n="X"===this.props.board[e]||this.props.isNewGame&&1===Math.floor(e/3)?{color:"#a55463",textShadow:"0px 0px 5px #a55463"}:{color:"#61dafb",textShadow:"0px 0px 5px #ccccff"}),Object(s.jsx)(T,{value:t,onClick:function(){return i.props.onClick(e)},hover:function(){return i.props.onMouseIn(e)},nohover:function(){return i.props.onMouseOut(e)},style:n})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"ttt-board",children:[Object(s.jsxs)("div",{className:"ttt-row",children:[this.createCell(0),this.createCell(1),this.createCell(2)]}),Object(s.jsxs)("div",{className:"ttt-row",children:[this.createCell(3),this.createCell(4),this.createCell(5)]}),Object(s.jsxs)("div",{className:"ttt-row",children:[this.createCell(6),this.createCell(7),this.createCell(8)]})]})}}]),n}(i.Component),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={board:Array(9).fill(null),isHovered:Array(9).fill(!1),newGame:!0},v.b.add(b.l),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"tick",value:function(){this.props.model.getTurn()}},{key:"onClick",value:function(e){var t=this,n=new w(Math.floor(e/3),e%3);if(this.props.model.verifyMove(n)){this.props.model.update((function(e){return t.update(e)}),n);var s=this.state.isHovered.slice();s[e]=!1,this.setState({board:this.props.model.getBoard().toOutputBoard(),isHovered:s,newGame:!1})}}},{key:"onMouseIn",value:function(e){var t=new w(Math.floor(e/3),e%3);if(this.props.model.verifyMove(t)){var n=this.state.isHovered.slice();n[e]=!0,this.setState({isHovered:n})}}},{key:"onMouseOut",value:function(e){var t=new w(Math.floor(e/3),e%3);if(this.props.model.verifyMove(t)){var n=this.state.isHovered.slice();n[e]=!1,this.setState({isHovered:n})}}},{key:"goTo",value:function(e){var t=this;this.props.model.update((function(e){return t.update(0)}),e),this.setState({board:this.props.model.getBoard().toOutputBoard()})}},{key:"update",value:function(e){var t=this;setTimeout((function(){return t.setState((function(e,t){return{board:t.model.getBoard().toOutputBoard()}}))}),e)}},{key:"undoButton",value:function(){var e=this,t=this.props.model.isGameOver(),n=t?0:this.props.model.getTurn()-(this.props.gametype+1);if(2!==this.props.gametype)return Object(s.jsxs)("div",{className:"ttt-undo",onClick:function(){return e.goTo(n)},children:[Object(s.jsx)("div",{children:t?"Restart":"Undo"}),Object(s.jsx)("div",{className:"ttt-undo-symbol",children:Object(s.jsx)(d.a,{icon:"undo"})})]})}},{key:"render",value:function(){var e=this,t=this.props.model.getBoard(),n=this.state.isHovered,i=this.state.newGame,a="TTT";if(this.props.model.isGameOver()){var r=M.evaluate(t);a=0===r?"Tie":-1===r?"X Wins":"O Wins"}return Object(s.jsxs)("div",{className:"ttt-game font unselectable",children:[Object(s.jsx)("div",{children:a}),Object(s.jsx)("div",{children:Object(s.jsx)(N,{isNewGame:i,isHovered:n,turn:this.props.model.getTurn(),board:t.toOutputBoard(),onClick:function(t){return e.onClick(t)},onMouseIn:function(t){return e.onMouseIn(t)},onMouseOut:function(t){return e.onMouseOut(t)}})}),this.undoButton(),Object(s.jsx)("div",{className:"nav-back",onClick:this.props.back,children:Object(s.jsx)("span",{children:"back"})})]})}}]),n}(i.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this)).evaluate=e,s}return Object(l.a)(n,[{key:"update",value:function(e,t){var n=this;t.isPlayerMove()||t.isGameOver()||(setTimeout((function(){return n.notifyObservers(n.generateTurn(t.getBoard()))}),1),e(200))}},{key:"generateTurn",value:function(e){return this.minimax(e,0,-1e3,1e3,e.getTurn()%2==1)}},{key:"minimax",value:function(e,t,n,s,i){var a=null,r=this.evaluate(e);if(null!=r)return r;var o=i?-1e3:1e3;e.resetMoveIterator();for(var c=e.getNextMove();null!=c&&(r=this.minimax(c,t+1,n,s,!i),(i&&o<r||!i&&o>r)&&(o=r,0==t&&(a=e.getMove())),i&&r>n&&(n=r),!i&&r<s&&(s=r),!(s<=n));)c=e.getNextMove();return 0==t&&(o=a),o}}]),n}(function(){function e(){Object(c.a)(this,e),this.observers=[]}return Object(l.a)(e,[{key:"addObserver",value:function(e){this.observers.push(e)}},{key:"notifyObservers",value:function(e){for(var t=0;t<this.observers.length;t++)this.observers[t].update(null,e)}},{key:"update",value:function(e,t){return null}}]),e}()),_=n(16),A=(n(30),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).setGamemode=function(e,t){return s.setState({gamemode:e,player:t})},s.back=function(){return s.setState({gamemode:-1})},s.returnToSelect=function(){return s.setState((function(e,t){return 0==e.gamemode?{gamemode:-1,player:-1,hovered:0}:{player:-1,hovered:0}}))},s.game=null,s.state={gamemode:-1,player:-1,hovered:0},v.b.add(b.h,b.m,b.e,b.k,b.d,b.b,_.a),s}return Object(l.a)(n,[{key:"setHovered",value:function(e){this.state.hovered!=e&&this.setState({hovered:e})}},{key:"panelButton",value:function(e){var t=this;switch(this.props.game){case"ttt":return Object(s.jsx)(B,{i:e,gamemode:this.state.gamemode,hovered:this.state.hovered,firstInst:this.state.firstInst,setHovered:function(){return t.setHovered(e)},onClick:this.setGamemode})}}},{key:"render",value:function(){var e,t=this,n=this.state.gamemode,i=this.state.player;if(-1==i)e=Object(s.jsxs)("div",{className:"gs-container",children:[-1==n?null:Object(s.jsx)("div",{className:"nav-back",onClick:function(){return t.back()},children:Object(s.jsx)("span",{children:"back"})}),Object(s.jsxs)("div",{className:"game-select unselectable",children:[this.panelButton(0),this.panelButton(1),this.panelButton(2)]})]});else if("ttt"===this.props.game)switch(this.game=new C(n,i),3*n+i){case 3:case 4:case 5:e=Object(s.jsx)("div",{children:"ai vs ai"});var a=new D((function(e){return M.evaluate(e,!0)}));a.addObserver(this.game),this.game.addObserver(a);case 0:case 1:case 2:e=Object(s.jsx)(I,{gametype:n,model:this.game,back:this.returnToSelect});break;case 6:case 7:e=Object(s.jsx)("div",{children:"loading screen/login"});break;case 8:e=Object(s.jsx)("div",{children:"custom lobby"})}return e}}]),n}(i.Component)),B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this,n=-1==this.props.gamemode,i=0==this.props.i,a=n?this.props.i:this.props.gamemode,r=n?i?0:-1:this.props.i,o=n?this.props.i:this.props.i+3*this.props.gamemode;return e=this.props.hovered==this.props.i?1==this.props.gamemode?{filter:"none",flexDirection:"row"}:{filter:"none",flexDirection:"column"}:1==this.props.gamemode?{filter:"blur(10px)",flexDirection:"row"}:{filter:"blur(10px)",flexDirection:"column"},Object(s.jsxs)("div",{className:"game-select-panel",style:e,onMouseEnter:this.props.setHovered,onClick:function(){return t.props.onClick(a,r)},children:[Object(s.jsx)(d.a,{icon:["user-friends","robot","globe","times","robot","robot","times","dot-circle","cog"][o]}),Object(s.jsx)("div",{children:["Local","VS Computer","Online","vs","vs","vs","Quick Match","Quick Match","Custom Match"][o]}),1==this.props.gamemode?Object(s.jsx)(d.a,{icon:["robot","dot-circle","robot"][this.props.i]}):null]})}}]),n}(i.Component),L=(n(31),i.Component,n(32),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={scene:"nav_home",goTo:"nav_home"},v.b.add(b.f),s}return Object(l.a)(n,[{key:"setScene",value:function(e){this.state.scene!==e&&this.setState({scene:e,goTo:null})}},{key:"scrollToScene",value:function(e){this.setState({scene:e,goTo:e})}},{key:"renderScene",value:function(e){var t,n=this;switch(e){case"nav_ttt":t=Object(s.jsx)(A,{game:"ttt"});break;case"nav_chess":case"nav_login":case"nav_contact":break;case"nav_about":case"nav_coming":case"nav_home":t=Object(s.jsx)(O,{focus:this.state.goTo,scene:this.state.scene,setScene:function(e){return n.setScene(e)},rmFocus:function(){return n.setState({goTo:null})}})}return t}},{key:"setSelected",value:function(e){return e==this.state.scene?{color:"#ffffff",filter:"drop-shadow(0 0 1px white) drop-shadow(0 0 2px red)"}:{}}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"nav-container",children:[Object(s.jsxs)("div",{id:"nav",className:"nav-panel unselectable",children:[Object(s.jsx)("button",{id:"nav_home",className:"nav-button nav-icon",style:this.setSelected("nav_home"),"aria-label":"Home",onClick:function(){return e.scrollToScene("nav_home")},children:Object(s.jsx)(d.a,{icon:"home"})}),Object(s.jsx)("button",{id:"nav_ttt",className:"nav-button",style:this.setSelected("nav_ttt"),onClick:function(){return e.setScene("nav_ttt")},children:"Tic-Tac-Toe"}),Object(s.jsx)("button",{id:"nav_chess",className:"nav-button",style:this.setSelected("nav_chess"),onClick:function(){return e.setScene("nav_chess")},children:"Chess"}),Object(s.jsx)("button",{id:"nav_coming",className:"nav-button",style:this.setSelected("nav_coming"),onClick:function(){return e.scrollToScene("nav_coming")},children:"Projects"}),Object(s.jsx)("button",{id:"nav_login",className:"nav-button tr",style:this.setSelected("nav_login"),onClick:function(){return e.setScene("nav_login")},children:"Login"}),Object(s.jsx)("button",{id:"nav_contact",className:"nav-button tr",style:this.setSelected("nav_contact"),onClick:function(){return e.setScene("nav_contact")},children:"Contact"}),Object(s.jsx)("button",{id:"nav_about",className:"nav-button tr",style:this.setSelected("nav_about"),onClick:function(){return e.scrollToScene("nav_about")},children:"About"})]}),Object(s.jsx)("div",{id:"scene",className:"nav-scene",children:this.renderScene(this.state.scene)})]})}}]),n}(i.Component)),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),H()}],[[33,1,2]]]);
//# sourceMappingURL=main.1e8c84cb.chunk.js.map