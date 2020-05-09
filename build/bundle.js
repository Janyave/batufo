var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function l(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function u(){return h(" ")}function d(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t){t=""+t,e.data!==t&&(e.data=t)}let f;function w(e){f=e}function g(e){(function(){if(!f)throw new Error("Function called outside component initialization");return f})().$$.on_mount.push(e)}const b=[],y=[],L=[],R=[],v=Promise.resolve();let $=!1;function U(e){L.push(e)}let k=!1;const C=new Set;function x(){if(!k){k=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];w(t),T(t.$$)}for(b.length=0;y.length;)y.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];C.has(t)||(C.add(t),t())}L.length=0}while(b.length);for(;R.length;)R.pop()();$=!1,k=!1,C.clear()}}function T(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const M=new Set;let _;function P(e,t){e&&e.i&&(M.delete(e),e.i(t))}function W(e,t,n,i){if(e&&e.o){if(M.has(e))return;M.add(e),_.c.push(()=>{M.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function S(e){e&&e.c()}function H(e,n,o){const{fragment:a,on_mount:r,on_destroy:s,after_update:c}=e.$$;a&&a.m(n,o),U(()=>{const n=r.map(t).filter(l);s?s.push(...n):i(n),e.$$.on_mount=[]}),c.forEach(U)}function G(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,t){-1===e.$$.dirty[0]&&(b.push(e),$||($=!0,v.then(x)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,l,o,a,r,c,h=[-1]){const u=f;w(t);const d=l.props||{},m=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:h};let p=!1;if(m.ctx=o?o(t,d,(e,n,...i)=>{const l=i.length?i[0]:n;return m.ctx&&r(m.ctx[e],m.ctx[e]=l)&&(m.bound[e]&&m.bound[e](l),p&&O(t,e)),n}):[],m.update(),p=!0,i(m.before_update),m.fragment=!!a&&a(m.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);m.fragment&&m.fragment.l(e),e.forEach(s)}else m.fragment&&m.fragment.c();l.intro&&P(t.$$.fragment),H(t,l.target,l.anchor),x()}w(u)}class A{$destroy(){G(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function E(t){let n,i,l,o,d,f,w,g,b,y,L,R,v,$,U,k,C,x;return{c(){n=c("main"),i=c("h1"),l=h(t[0]),o=u(),d=c("h4"),d.innerHTML='\n    Building a game in\n    <a href="https://flutter.dev/">#flutter</a>\n    without any libraries or frameworks\n  ',f=u(),w=c("iframe"),b=u(),y=c("p"),L=c("a"),R=h("Follow on Twitch"),v=h("\n    |\n    "),$=c("a"),U=h("Subscribe on YouTube"),k=h("\n    |\n    "),C=c("a"),x=h("Follow on Twitter"),m(w,"title","YouTube"),m(w,"class","center"),m(w,"width",t[5]),m(w,"height",t[6]),w.src!==(g=t[1])&&m(w,"src",g),m(w,"frameborder","0"),m(w,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n    picture-in-picture"),w.allowFullscreen=!0,m(L,"href",t[3]),m(L,"target","_blank"),m($,"href",t[2]),m($,"target","_blank"),m(C,"href",t[4]),m(C,"target","_blank")},m(e,t){r(e,n,t),a(n,i),a(i,l),a(n,o),a(n,d),a(n,f),a(n,w),a(n,b),a(n,y),a(y,L),a(L,R),a(y,v),a(y,$),a($,U),a(y,k),a(y,C),a(C,x)},p(e,[t]){1&t&&p(l,e[0]),32&t&&m(w,"width",e[5]),64&t&&m(w,"height",e[6]),2&t&&w.src!==(g=e[1])&&m(w,"src",g),8&t&&m(L,"href",e[3]),4&t&&m($,"href",e[2]),16&t&&m(C,"href",e[4])},i:e,o:e,d(e){e&&s(n)}}}function I(e,t,n){let i,l,{title:o}=t,{embedPlaylist:a}=t,{subChannelURL:r}=t,{twitchChannelURL:s}=t,{twitterURL:c}=t,{windowWidth:h}=t;return e.$set=e=>{"title"in e&&n(0,o=e.title),"embedPlaylist"in e&&n(1,a=e.embedPlaylist),"subChannelURL"in e&&n(2,r=e.subChannelURL),"twitchChannelURL"in e&&n(3,s=e.twitchChannelURL),"twitterURL"in e&&n(4,c=e.twitterURL),"windowWidth"in e&&n(7,h=e.windowWidth)},e.$$.update=()=>{128&e.$$.dirty&&n(5,i=Math.min(.66*h,560)),32&e.$$.dirty&&n(6,l=i/1.77)},[o,a,r,s,c,i,l,h]}class N extends A{constructor(e){super(),z(this,e,I,E,o,{title:0,embedPlaylist:1,subChannelURL:2,twitchChannelURL:3,twitterURL:4,windowWidth:7})}}function D(t){let n,i,l,o,d,f,w,g,b,y,L,R,v,$,U,k,C,x,T,M,_,P,W,S;return{c(){n=c("main"),i=c("h1"),l=h(t[1]),o=u(),d=c("h2"),d.textContent="Source and Releases",f=u(),w=c("p"),g=c("a"),b=h("Latest Release"),y=u(),L=c("span"),L.textContent="try at your own risk",R=u(),v=c("p"),$=c("a"),U=h("Source on Github"),k=u(),C=c("h2"),C.textContent="Play the Web Version",x=u(),T=c("iframe"),_=u(),P=c("p"),W=c("a"),S=h("Full Screen"),m(g,"href",t[3]),m(g,"target","_blank"),m(L,"class","italic svelte-10b9e0n"),m($,"href",t[4]),m($,"target","_blank"),m(T,"title","game"),m(T,"class","center"),m(T,"width",t[5]),m(T,"height",t[6]),T.src!==(M=t[2])&&m(T,"src",M),m(T,"frameborder","0"),m(T,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n    picture-in-picture"),T.allowFullscreen=!0,m(W,"href",t[2]),m(W,"target","_blank")},m(e,s){r(e,n,s),a(n,i),a(i,l),a(n,o),a(n,d),a(n,f),a(n,w),a(w,g),a(g,b),a(w,y),a(w,L),a(n,R),a(n,v),a(v,$),a($,U),a(n,k),a(n,C),a(n,x),a(n,T),t[8](T),a(n,_),a(n,P),a(P,W),a(W,S)},p(e,[t]){2&t&&p(l,e[1]),8&t&&m(g,"href",e[3]),16&t&&m($,"href",e[4]),32&t&&m(T,"width",e[5]),64&t&&m(T,"height",e[6]),4&t&&T.src!==(M=e[2])&&m(T,"src",M),4&t&&m(W,"href",e[2])},i:e,o:e,d(e){e&&s(n),t[8](null)}}}function F(e,t,n){let i,l,{title:o}=t,{gameWebURL:a}=t,{latestReleaseURL:r}=t,{githubSourceURL:s}=t,{iframe:c=null}=t,{windowWidth:h}=t;return g(()=>c.focus()),e.$set=e=>{"title"in e&&n(1,o=e.title),"gameWebURL"in e&&n(2,a=e.gameWebURL),"latestReleaseURL"in e&&n(3,r=e.latestReleaseURL),"githubSourceURL"in e&&n(4,s=e.githubSourceURL),"iframe"in e&&n(0,c=e.iframe),"windowWidth"in e&&n(7,h=e.windowWidth)},e.$$.update=()=>{128&e.$$.dirty&&n(5,i=Math.min(.66*h,560)),32&e.$$.dirty&&n(6,l=i/1.77)},[c,o,a,r,s,i,l,h,function(e){y[e?"unshift":"push"](()=>{n(0,c=e)})}]}class q extends A{constructor(e){super(),z(this,e,F,D,o,{title:1,gameWebURL:2,latestReleaseURL:3,githubSourceURL:4,iframe:0,windowWidth:7})}}function j(t){let n,i,l,o,d,f,w,g,b,y,L,R,v;return{c(){n=c("main"),i=c("h1"),l=h(t[0]),o=u(),d=c("h2"),d.textContent="Watch live on Twitch",f=u(),w=c("div"),g=u(),b=c("a"),y=h("Twitch Channel"),L=h("\n  |\n  "),R=c("a"),v=h("YouTube Playlist"),m(w,"id","twitch-embed"),m(b,"href",t[1]),m(b,"target","_blank"),m(R,"href",t[2]),m(R,"target","_blank")},m(e,t){r(e,n,t),a(n,i),a(i,l),a(n,o),a(n,d),a(n,f),a(n,w),a(n,g),a(n,b),a(b,y),a(n,L),a(n,R),a(R,v)},p(e,[t]){1&t&&p(l,e[0]),2&t&&m(b,"href",e[1]),4&t&&m(R,"href",e[2])},i:e,o:e,d(e){e&&s(n)}}}function V(e,t,n){let i,l,o,{title:a}=t,{twitchChannelURL:r}=t,{twitchChannel:s}=t,{youtubePlaylistURL:c}=t,{windowWidth:h}=t;return g(()=>new window.Twitch.Embed("twitch-embed",{width:i,height:l,layout:o,channel:s})),e.$set=e=>{"title"in e&&n(0,a=e.title),"twitchChannelURL"in e&&n(1,r=e.twitchChannelURL),"twitchChannel"in e&&n(3,s=e.twitchChannel),"youtubePlaylistURL"in e&&n(2,c=e.youtubePlaylistURL),"windowWidth"in e&&n(4,h=e.windowWidth)},e.$$.update=()=>{16&e.$$.dirty&&n(5,i=Math.min(.66*h,1400)),32&e.$$.dirty&&(l=i/1.77),32&e.$$.dirty&&(o=i>900?"video-with-chat":"video")},[a,r,c,s,h]}class B extends A{constructor(e){super(),z(this,e,V,j,o,{title:0,twitchChannelURL:1,twitchChannel:3,youtubePlaylistURL:2,windowWidth:4})}}function J(t){let n,i,l,o,d,p,f,w,g,b,y,L,R,v,$,U,k,C,x,T,M,_,P,W,S,H,G,O,z,A,E,I,N,D,F,q,j,V,B,J,Y,X,K,Q,Z,ee,te,ne,ie,le,oe,ae,re,se,ce,he,ue,de,me,pe,fe,we,ge,be,ye,Le,Re;return{c(){n=c("h1"),i=c("a"),l=h("Multiplayer Client-Server Architecture"),o=u(),d=c("p"),d.innerHTML="<code>Saturday, April 4, 2020</code>",p=u(),f=c("h2"),f.textContent="Terms",w=u(),g=c("h3"),g.textContent="Latency aka RTT aka Ping",b=u(),y=c("ul"),y.innerHTML="<li>round trip time is the time for a client message to result in a received server message</li> \n<li>the larger the RTT is, the larger is the latency</li>",L=u(),R=c("h4"),R.textContent="Jitter",v=u(),$=c("ul"),$.innerHTML="<li>the rate of change in the RTT</li>",U=u(),k=c("h3"),k.textContent="Authorative Server",C=u(),x=c("ul"),x.innerHTML="<li>game happens in server under our control</li> \n<li>clients just send inputs and render world as simulated by the server</li>",T=u(),M=c("h3"),M.textContent="Lockstep",_=u(),P=c("ul"),P.innerHTML="<li>client waits for server messages before updating or rendering anything</li> \n<li>used in Doom, worked well over LAN, but was unplayable over the internet</li>",W=u(),S=c("h2"),S.textContent="Server Time Step",H=u(),G=c("ul"),G.innerHTML="<li>goal is to decouple server updates from client command frequency</li> \n<li>queue player inputs without any processing (game loop does not run yet)</li> \n<li>instead game loop runs at much lower frequency i.e. every 100ms (time step)</li> \n<li>applies all queued player inputs<ul><li>to make physics more realistic they may be applied at smaller time deltas</li></ul></li> \n<li>then we take snapshot of resulting game state and broadcast to clients</li> \n<li>in order for client to successfully predict other entities in between updates it needs to\nhave sufficient info, in our game that means knowing the players + bullets velocity vectors</li>",O=u(),z=c("h3"),z.textContent="Prediction",A=u(),E=c("ul"),E.innerHTML='<li>predict local player and other entities from last given state<ul><li>in our game that means applying entity velocity onto last known entity\nposition considering time delta</li></ul></li> \n<li>when we get server state we&#39;ll <em>correct</em> our prediction</li> \n<li>best done via shared game simulation code<ul><li>in our game controller code is shared, so we are golden</li></ul></li> \n<li>the more deterministic our game is the better the result</li> \n<li>use message IDs to be able to replay commands that server hasn&#39;t received yet <a href="https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html#server-reconciliation">see</a></li>',I=u(),N=c("h3"),N.textContent="Dead Reckoning",D=u(),F=c("ul"),F.innerHTML="<li>using client side prediction we may result in a slightly different game\nstate than server arrived at </li> \n<li>once we receive an update from the server and it doesn&#39;t match our state, we\ncorrect our assumptions</li> \n<li>falls down when game state is less predictable as that means we&#39;d correct\nour state all the time leading to lots of jumps, i.e. if player direction\nchanges frequently</li>",q=u(),j=c("h3"),j.textContent="Smoothing",V=u(),B=c("ul"),B.innerHTML="<li>correcting client position to position sent by server in one step may lead to jumps</li> \n<li>instead we can correct position slowly over time to make it look <em>smoother</em></li> \n<li>if interpolation work properly smoothing is not required as we know ahead of time where the\nentity will be</li>",J=u(),Y=c("h3"),Y.textContent="Interpolation",X=u(),K=c("ul"),K.innerHTML="<li>on the client show all entities except the player we control in the past</li> \n<li>buffer server game state messages and replay positions of other players delayed<ul><li>usually two packets behind</li></ul></li> \n<li>as a result we see ourselves in the present but everyone else in the past</li> \n<li>as this adds more lag to the opponents it makes lag compensation more importantXC</li> \n<li>adds client complexity</li>",Q=u(),Z=c("h3"),Z.textContent="Lag Compensation",ee=u(),te=c("ul"),te.innerHTML="<li>due to network lag and interpolation we&#39;re aiming at opponent&#39;s past positions</li> \n<li>to fix the server does the following<ul><li>reconstructs the world as we saw it when we fired shot (takes step back in time)</li> \n<li>this means all entities are moved back to where they were in that past</li> \n<li>then processes our action and determines result of shot as it would have happened in the\npast</li> \n<li>then moves game state back to present and sends snapshot - note that if present state is affected by outcome of player action applied in the past that needs to be applied to that present game state</li></ul></li> \n<li>adds server complexity</li>",ne=u(),ie=c("h2"),ie.textContent="Resources",le=u(),oe=c("ul"),oe.innerHTML='<li><a href="https://www.gabrielgambetta.com/client-server-game-architecture.html">Fast-Paced Multiplayer four parts</a></li> \n<li><a href="https://www.gamasutra.com/blogs/MarkMennell/20140929/226628/Making_FastPaced_Multiplayer_Networked_Games_is_Hard.php">Making Fast-Paced Multiplayer Networked Games is Hard</a></li>',ae=u(),re=c("h3"),re.textContent="Valve",se=u(),ce=c("ul"),ce.innerHTML='<li><a href="https://developer.valvesoftware.com/wiki/Prediction">Prediction</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Interpolation">Interpolation</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Lag_compensation">Lag Compensation</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization">Interpolation / Latency\nCompensation</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking">Source Multiplayer\nNetworking</a></li>',he=u(),ue=c("h3"),ue.textContent="IT Hare on Software",de=u(),me=c("ul"),me.innerHTML='<li><a href="http://ithare.com/chapter-ii-game-entities-and-interactions-from-upcoming-book-development-and-deployment-of-mmog/">Game Entities and Interactions</a></li> \n<li><a href="http://ithare.com/chapter-iii-on-cheating-p2p-and-non-authoritative-servers-from-dd-of-mmog-book/">On Cheating, P2P, and non-Authoritative Servers</a></li> \n<li><a href="Http://ithare.com/mmog-rtt-input-lag-and-how-to-mitigate-them/">MMOG. RTT, Input Lag, and How to Mitigate Them</a></li> \n<li><a href="http://ithare.com/mmog-world-states-and-reducing-traffic/">MMOG: World States and Reducing Traffic</a></li> \n<li><a href="http://ithare.com/mmog-point-to-point-communications-and-non-blocking-rpcs/">MMOG. Point-to-Point Communications and non-blocking RPCs</a></li>',pe=u(),fe=c("h3"),fe.textContent="Gaffer On Games",we=u(),ge=c("ul"),ge.innerHTML='<li><a href="https://gafferongames.com/post/deterministic_lockstep/">Deterministic Lockstep</a></li> \n<li><a href="https://gafferongames.com/post/state_synchronization/">State Synchronization</a></li> \n<li><a href="https://gafferongames.com/post/snapshot_interpolation/">Snapshot Interpolation</a></li>',be=u(),ye=c("h3"),ye.textContent="Unreal",Le=u(),Re=c("ul"),Re.innerHTML='<li><a href="https://docs.unrealengine.com/udk/Three/NetworkingOverview.html">Unreal Engine 2: Unreal Networking\nArchitecture</a></li> \n<li><a href="https://docs.unrealengine.com/en-US/Gameplay/Networking/Overview/index.html">Unreal Engine 4: Networking Overview</a></li>',m(i,"href",t[0]),m(d,"class","right")},m(e,t){r(e,n,t),a(n,i),a(i,l),r(e,o,t),r(e,d,t),r(e,p,t),r(e,f,t),r(e,w,t),r(e,g,t),r(e,b,t),r(e,y,t),r(e,L,t),r(e,R,t),r(e,v,t),r(e,$,t),r(e,U,t),r(e,k,t),r(e,C,t),r(e,x,t),r(e,T,t),r(e,M,t),r(e,_,t),r(e,P,t),r(e,W,t),r(e,S,t),r(e,H,t),r(e,G,t),r(e,O,t),r(e,z,t),r(e,A,t),r(e,E,t),r(e,I,t),r(e,N,t),r(e,D,t),r(e,F,t),r(e,q,t),r(e,j,t),r(e,V,t),r(e,B,t),r(e,J,t),r(e,Y,t),r(e,X,t),r(e,K,t),r(e,Q,t),r(e,Z,t),r(e,ee,t),r(e,te,t),r(e,ne,t),r(e,ie,t),r(e,le,t),r(e,oe,t),r(e,ae,t),r(e,re,t),r(e,se,t),r(e,ce,t),r(e,he,t),r(e,ue,t),r(e,de,t),r(e,me,t),r(e,pe,t),r(e,fe,t),r(e,we,t),r(e,ge,t),r(e,be,t),r(e,ye,t),r(e,Le,t),r(e,Re,t)},p(e,[t]){1&t&&m(i,"href",e[0])},i:e,o:e,d(e){e&&s(n),e&&s(o),e&&s(d),e&&s(p),e&&s(f),e&&s(w),e&&s(g),e&&s(b),e&&s(y),e&&s(L),e&&s(R),e&&s(v),e&&s($),e&&s(U),e&&s(k),e&&s(C),e&&s(x),e&&s(T),e&&s(M),e&&s(_),e&&s(P),e&&s(W),e&&s(S),e&&s(H),e&&s(G),e&&s(O),e&&s(z),e&&s(A),e&&s(E),e&&s(I),e&&s(N),e&&s(D),e&&s(F),e&&s(q),e&&s(j),e&&s(V),e&&s(B),e&&s(J),e&&s(Y),e&&s(X),e&&s(K),e&&s(Q),e&&s(Z),e&&s(ee),e&&s(te),e&&s(ne),e&&s(ie),e&&s(le),e&&s(oe),e&&s(ae),e&&s(re),e&&s(se),e&&s(ce),e&&s(he),e&&s(ue),e&&s(de),e&&s(me),e&&s(pe),e&&s(fe),e&&s(we),e&&s(ge),e&&s(be),e&&s(ye),e&&s(Le),e&&s(Re)}}}function Y(e,t,n){let{link:i}=t;return e.$set=e=>{"link"in e&&n(0,i=e.link)},[i]}class X extends A{constructor(e){super(),z(this,e,Y,J,o,{link:0})}}function K(t){let n,i,l,o,d,p,f,w,g,b,y,L,R,v,$,U,k,C,x,T,M,_,P,W,S;return{c(){n=c("h1"),i=c("a"),l=h("Appling Multiplayer Strategies to Our Game"),o=u(),d=c("p"),d.innerHTML="<code>Saturday, April 4, 2020</code>",p=u(),f=c("h2"),f.textContent="Main Strategy Used",w=u(),g=c("ul"),g.innerHTML="<li>authoritative server sending updates every 100ms</li> \n<li>client updates are limited to 10/second</li> \n<li>client side prediction is used to exrapolate opponent&#39;s position from previous position and\ntheir velocity</li> \n<li>other players and bullets are predicted on the client from previous position and velocity<ul><li>same controllers as on server are used which allows us to predict collisions client side as\nwell</li></ul></li> \n<li>use dead reckoning to correct client predictions, both for opponents and bullets as well as\nour own player</li>",b=u(),y=c("h2"),y.textContent="Limiting Player Inputs",L=u(),R=c("ul"),R.innerHTML="<li>require 100ms between each shot<ul><li>instead of sending a key press we send <code>bulletCreated(angle)</code></li></ul></li> \n<li>require 100ms between each thrust<ul><li>instead of sending key press we send <code>appliedThrust(anger)</code></li> \n<li>server then calculates velocity</li></ul></li> \n<li>instead of sending rotation input we send <code>updatedAngle(angle)</code></li> \n<li>change of player angle happens in real time but is reported to the server at a 100ms interval\neven if no other client action occured</li>",v=u(),$=c("h2"),$.textContent="Server Processing of Player Inputs",U=u(),k=c("ul"),k.innerHTML="<li>delay execution of action until server tick<ul><li>in the worst case bullet is trailing client side prediction by 100ms</li></ul></li> \n<li>find way to align client input ticks to server ticks</li>",C=u(),x=c("h2"),x.textContent="To be seen",T=u(),M=c("ul"),M.innerHTML="<li>test how well dead reckoning works for our game and try the following if we end up with lots\nof player position jumps</li> \n<li>apply smooting to correct position slowly over time</li> \n<li>if nothing else works look into interpolation</li>",_=u(),P=c("h2"),P.textContent="Smaller Packets",W=u(),S=c("ul"),S.innerHTML="<li>if packets get too large we can omit bullet positions<ul><li>instead rely on client prediction to show bullets in flight</li> \n<li>use server to report created bullets <code>createBullet(bulletID, position, velocity)</code><ul><li>after that client predicts positions</li></ul></li> \n<li>and exploded bullets<ul><li><code>explodedBullet(bulletID, position)</code></li></ul></li></ul></li> \n<li>alternative is to limit amount of bullets / ammo available</li>",m(i,"href",t[0]),m(d,"class","right")},m(e,t){r(e,n,t),a(n,i),a(i,l),r(e,o,t),r(e,d,t),r(e,p,t),r(e,f,t),r(e,w,t),r(e,g,t),r(e,b,t),r(e,y,t),r(e,L,t),r(e,R,t),r(e,v,t),r(e,$,t),r(e,U,t),r(e,k,t),r(e,C,t),r(e,x,t),r(e,T,t),r(e,M,t),r(e,_,t),r(e,P,t),r(e,W,t),r(e,S,t)},p(e,[t]){1&t&&m(i,"href",e[0])},i:e,o:e,d(e){e&&s(n),e&&s(o),e&&s(d),e&&s(p),e&&s(f),e&&s(w),e&&s(g),e&&s(b),e&&s(y),e&&s(L),e&&s(R),e&&s(v),e&&s($),e&&s(U),e&&s(k),e&&s(C),e&&s(x),e&&s(T),e&&s(M),e&&s(_),e&&s(P),e&&s(W),e&&s(S)}}}function Q(e,t,n){let{link:i}=t;return e.$set=e=>{"link"in e&&n(0,i=e.link)},[i]}class Z extends A{constructor(e){super(),z(this,e,Q,K,o,{link:0})}}function ee(t){let n,i,l,o,h,d,p;const f=new Z({props:{link:"#"+te}}),w=new X({props:{link:"#"+ne}});return{c(){n=c("main"),i=c("article"),S(f.$$.fragment),l=u(),o=c("p"),h=u(),d=c("article"),S(w.$$.fragment),m(i,"id",te),m(i,"class","svelte-12amb70"),m(o,"class","separator svelte-12amb70"),m(d,"id",ne),m(d,"class","svelte-12amb70")},m(e,t){r(e,n,t),a(n,i),H(f,i,null),a(n,l),a(n,o),a(n,h),a(n,d),H(w,d,null),p=!0},p:e,i(e){p||(P(f.$$.fragment,e),P(w.$$.fragment,e),p=!0)},o(e){W(f.$$.fragment,e),W(w.$$.fragment,e),p=!1},d(e){e&&s(n),G(f),G(w)}}}const te="devlog-applying-strategies",ne="devlog-multiplayer-architecture";class ie extends A{constructor(e){super(),z(this,e,null,ee,o,{})}}function le(t){let n;const i=new ie({});return{c(){S(i.$$.fragment)},m(e,t){H(i,e,t),n=!0},p:e,i(e){n||(P(i.$$.fragment,e),n=!0)},o(e){W(i.$$.fragment,e),n=!1},d(e){G(i,e)}}}function oe(e){let t;const n=new B({props:{title:e[1],twitchChannelURL:e[6],twitchChannel:e[5],youtubePlaylistURL:e[9],windowWidth:e[17]}});return{c(){S(n.$$.fragment)},m(e,i){H(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.title=e[1]),64&t&&(i.twitchChannelURL=e[6]),32&t&&(i.twitchChannel=e[5]),512&t&&(i.youtubePlaylistURL=e[9]),131072&t&&(i.windowWidth=e[17]),n.$set(i)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){W(n.$$.fragment,e),t=!1},d(e){G(n,e)}}}function ae(e){let t;const n=new q({props:{title:e[1],gameWebURL:e[4],latestReleaseURL:e[7],githubSourceURL:e[12],windowWidth:e[17]}});return{c(){S(n.$$.fragment)},m(e,i){H(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.title=e[1]),16&t&&(i.gameWebURL=e[4]),128&t&&(i.latestReleaseURL=e[7]),4096&t&&(i.githubSourceURL=e[12]),131072&t&&(i.windowWidth=e[17]),n.$set(i)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){W(n.$$.fragment,e),t=!1},d(e){G(n,e)}}}function re(e){let t;const n=new N({props:{title:e[1],embedPlaylist:e[2],subChannelURL:e[3],gameWebURL:e[4],twitterURL:e[8],twitchChannelURL:e[6],latestReleaseURL:e[7],windowWidth:e[17]}});return{c(){S(n.$$.fragment)},m(e,i){H(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.title=e[1]),4&t&&(i.embedPlaylist=e[2]),8&t&&(i.subChannelURL=e[3]),16&t&&(i.gameWebURL=e[4]),256&t&&(i.twitterURL=e[8]),64&t&&(i.twitchChannelURL=e[6]),128&t&&(i.latestReleaseURL=e[7]),131072&t&&(i.windowWidth=e[17]),n.$set(i)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){W(n.$$.fragment,e),t=!1},d(e){G(n,e)}}}function se(e){let t,n,l,o,p,f,w,g,b,y,L,R,v,$,U,k,C,x,T,M,S,H,G,O;const z=[re,ae,oe,le],A=[];function E(e,t){return e[0].currentRoute===e[10].home?0:e[0].currentRoute===e[10].game?1:e[0].currentRoute===e[10].watch?2:(1025&t&&(M=!(e[0].currentRoute!==e[10].devlog&&!e[22]())),M?3:-1)}return~(S=E(e,-1))&&(H=A[S]=z[S](e)),{c(){t=c("main"),n=c("nav"),l=c("a"),o=h("Home"),f=u(),w=c("a"),g=h("Game"),y=u(),L=c("a"),R=h("Watch"),$=u(),U=c("a"),k=h("Devlog"),x=u(),T=c("div"),H&&H.c(),m(l,"href",p=e[11]+e[10].home.hash),m(l,"class",e[13]),m(w,"href",b=e[11]+e[10].game.hash),m(w,"class",e[14]),m(L,"href",v=e[11]+e[10].watch.hash),m(L,"class",e[15]),m(U,"href",C=e[11]+e[10].devlog.hash),m(U,"class",e[16]),m(n,"class","svelte-1719mcr")},m(s,c,h){r(s,t,c),a(t,n),a(n,l),a(l,o),a(n,f),a(n,w),a(w,g),a(n,y),a(n,L),a(L,R),a(n,$),a(n,U),a(U,k),a(t,x),a(t,T),~S&&A[S].m(T,null),G=!0,h&&i(O),O=[d(l,"click",e[18]),d(w,"click",e[19]),d(L,"click",e[20]),d(U,"click",e[21])]},p(e,[t]){(!G||3072&t&&p!==(p=e[11]+e[10].home.hash))&&m(l,"href",p),(!G||8192&t)&&m(l,"class",e[13]),(!G||3072&t&&b!==(b=e[11]+e[10].game.hash))&&m(w,"href",b),(!G||16384&t)&&m(w,"class",e[14]),(!G||3072&t&&v!==(v=e[11]+e[10].watch.hash))&&m(L,"href",v),(!G||32768&t)&&m(L,"class",e[15]),(!G||3072&t&&C!==(C=e[11]+e[10].devlog.hash))&&m(U,"href",C),(!G||65536&t)&&m(U,"class",e[16]);let n=S;S=E(e,t),S===n?~S&&A[S].p(e,t):(H&&(_={r:0,c:[],p:_},W(A[n],1,1,()=>{A[n]=null}),_.r||i(_.c),_=_.p),~S?(H=A[S],H||(H=A[S]=z[S](e),H.c()),P(H,1),H.m(T,null)):H=null)},i(e){G||(P(H),G=!0)},o(e){W(H),G=!1},d(e){e&&s(t),~S&&A[S].d(),i(O)}}}function ce(e,t,n){let{title:i}=t,{embedPlaylist:l}=t,{subChannelURL:o}=t,{gameWebURL:a}=t,{twitchChannel:r}=t,{twitchChannelURL:s}=t,{latestReleaseURL:c}=t,{twitterURL:h}=t,{youtubePlaylistURL:u}=t,{state:d}=t,{routes:m}=t,{rootURL:p}=t,{githubSourceURL:f}=t;const w=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g=()=>window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,b=()=>location.hash.startsWith(m.devlog.hash);let y,L,R,v,$,U;return window.onresize=()=>{n(17,$=w()),U=g()},e.$set=e=>{"title"in e&&n(1,i=e.title),"embedPlaylist"in e&&n(2,l=e.embedPlaylist),"subChannelURL"in e&&n(3,o=e.subChannelURL),"gameWebURL"in e&&n(4,a=e.gameWebURL),"twitchChannel"in e&&n(5,r=e.twitchChannel),"twitchChannelURL"in e&&n(6,s=e.twitchChannelURL),"latestReleaseURL"in e&&n(7,c=e.latestReleaseURL),"twitterURL"in e&&n(8,h=e.twitterURL),"youtubePlaylistURL"in e&&n(9,u=e.youtubePlaylistURL),"state"in e&&n(0,d=e.state),"routes"in e&&n(10,m=e.routes),"rootURL"in e&&n(11,p=e.rootURL),"githubSourceURL"in e&&n(12,f=e.githubSourceURL)},e.$$.update=()=>{1025&e.$$.dirty&&n(13,y=d.currentRoute===m.home?"underline":""),1025&e.$$.dirty&&n(14,L=d.currentRoute===m.game?"underline":""),1025&e.$$.dirty&&n(15,R=d.currentRoute===m.watch?"underline":"")},n(16,v=b()?"underline":""),n(17,$=w()),U=g(),[d,i,l,o,a,r,s,c,h,u,m,p,f,y,L,R,v,$,()=>{n(0,d.currentRoute=m.home,d),n(0,d)},()=>{n(0,d.currentRoute=m.game,d),n(0,d)},()=>{n(0,d.currentRoute=m.watch,d),n(0,d)},()=>{n(0,d.currentRoute=m.devlog,d),n(0,d)},b]}var he={version:"v0.0.0",url:"https://github.com/thlorenz/batufo/releases/tag/v0.0.0"};const ue={home:{id:"home",hash:""},game:{id:"game",hash:"#game"},watch:{id:"watch",hash:"#watch"},devlog:{id:"devlog",hash:"#devlog"}},de=location.hash,me=de===ue.game.hash?ue.game:de===ue.watch.hash?ue.watch:location.hash.startsWith(ue.devlog.hash)?ue.devlog:ue.home,pe=location.href.includes("localhost")?"/":"https://thlorenz.github.io/batufo/";return new class extends A{constructor(e){super(),z(this,e,ce,se,o,{title:1,embedPlaylist:2,subChannelURL:3,gameWebURL:4,twitchChannel:5,twitchChannelURL:6,latestReleaseURL:7,twitterURL:8,youtubePlaylistURL:9,state:0,routes:10,rootURL:11,githubSourceURL:12})}}({target:document.body,props:{title:"2D Multiplayer Flutter Game",embedVideo:"https://www.youtube.com/embed/xTcO6lPMUaA",embedPlaylist:"https://www.youtube.com/embed/videoseries?list=PL4k64WemroGlTDHJzVo_O1l6C0nuwRc6G",subChannelURL:"https://www.youtube.com/user/thlorenz10?sub_confirmation=1",gameWebURL:"https://thlorenz.github.io/batufo/webgame",latestReleaseURL:he.url,githubSourceURL:"https://github.com/thlorenz/batufo",youtubePlaylistURL:"https://www.youtube.com/watch?list=PL4k64WemroGlTDHJzVo_O1l6C0nuwRc6G&v=xTcO6lPMUaA",twitchChannel:"thlorenz",twitchChannelURL:"https://www.twitch.tv/thlorenz",twitterURL:"https://twitter.com/thlorenz",routes:ue,state:{currentRoute:me},rootURL:pe}})}();
//# sourceMappingURL=bundle.js.map