(function(g){var window=this;'use strict';var ydb=function(a){g.U.call(this,{G:"div",K:"ytp-miniplayer-ui"});this.Tf=!1;this.player=a;this.S(a,"minimized",this.Uh);this.S(a,"onStateChange",this.sO)},zdb=function(a){g.iR.call(this,a);
this.u=new g.FF(this);this.j=new ydb(this.player);this.j.hide();g.zQ(this.player,this.j.element,4);a.og()&&(this.load(),g.qo(a.getRootNode(),"ytp-player-minimized",!0));this.player.N("web_rounded_containers")&&g.qo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.w(ydb,g.U);g.k=ydb.prototype;
g.k.uL=function(){this.tooltip=new g.oV(this.player,this);g.D(this,this.tooltip);g.zQ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Oc=new g.cS(this.player);g.D(this,this.Oc);this.lj=new g.U({G:"div",K:"ytp-miniplayer-scrim"});g.D(this,this.lj);this.lj.Ea(this.element);this.S(this.lj.element,"click",this.rG);var a=new g.U({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Fermer"},W:[g.wN()]});g.D(this,a);a.Ea(this.lj.element);this.S(a.element,"click",this.Qo);
a=new g.E2(this.player,this);g.D(this,a);a.Ea(this.lj.element);this.Au=new g.U({G:"div",K:"ytp-miniplayer-controls"});g.D(this,this.Au);this.Au.Ea(this.lj.element);this.S(this.Au.element,"click",this.rG);var b=new g.U({G:"div",K:"ytp-miniplayer-button-container"});g.D(this,b);b.Ea(this.Au.element);a=new g.U({G:"div",K:"ytp-miniplayer-play-button-container"});g.D(this,a);a.Ea(this.Au.element);var c=new g.U({G:"div",K:"ytp-miniplayer-button-container"});g.D(this,c);c.Ea(this.Au.element);this.OV=new g.IT(this.player,
this,!1);g.D(this,this.OV);this.OV.Ea(b.element);b=new g.GT(this.player,this);g.D(this,b);b.Ea(a.element);this.nextButton=new g.IT(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.Ea(c.element);this.pj=new g.bV(this.player,this);g.D(this,this.pj);this.pj.Ea(this.lj.element);this.Ic=new g.TT(this.player,this);g.D(this,this.Ic);g.zQ(this.player,this.Ic.element,4);this.hG=new g.U({G:"div",K:"ytp-miniplayer-buttons"});g.D(this,this.hG);g.zQ(this.player,this.hG.element,4);a=new g.U({G:"button",
Ha:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Fermer"},W:[g.wN()]});g.D(this,a);a.Ea(this.hG.element);this.S(a.element,"click",this.Qo);a=new g.U({G:"button",Ha:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Fermer"},W:[g.DN()]});g.D(this,a);a.Ea(this.hG.element);this.S(a.element,"click",this.Z5);this.S(this.player,"presentingplayerstatechange",this.xd);this.S(this.player,"appresize",this.Eb);this.S(this.player,"fullscreentoggled",this.Eb);this.Eb()};
g.k.show=function(){this.cf=new g.bo(this.yv,null,this);this.cf.start();this.Tf||(this.uL(),this.Tf=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.cf&&(this.cf.dispose(),this.cf=void 0);g.U.prototype.hide.call(this);this.player.og()||(this.Tf&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.cf&&(this.cf.dispose(),this.cf=void 0);g.U.prototype.ra.call(this)};
g.k.Qo=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.Z5=function(){this.player.playVideo()};
g.k.rG=function(a){if(a.target===this.lj.element||a.target===this.Au.element)g.bM(this.player.Gb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Uh=function(){g.qo(this.player.getRootNode(),"ytp-player-minimized",this.player.og())};
g.k.Ke=function(){this.Ic.qc();this.pj.qc()};
g.k.yv=function(){this.Ke();this.cf&&this.cf.start()};
g.k.xd=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Eb=function(){g.mU(this.Ic,0,this.player.gb().getPlayerSize().width,!1);g.WT(this.Ic)};
g.k.sO=function(a){this.player.og()&&(0===a?this.hide():this.show())};
g.k.zc=function(){return this.tooltip};
g.k.jg=function(){return!1};
g.k.fh=function(){return!1};
g.k.td=function(){return!1};
g.k.Gl=function(){return!1};
g.k.YC=function(){};
g.k.Mp=function(){};
g.k.Ix=function(){};
g.k.Gm=function(){return null};
g.k.bF=function(){return null};
g.k.qB=function(){return null};
g.k.vk=function(){return new g.tl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Iv=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ml(a);if(b){c=g.lo(b,"ytp-prev-button")||g.lo(b,"ytp-next-button");var m=g.lo(b,"ytp-play-button"),n=g.lo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Kl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.lo(b,"ytp-miniplayer-button-top-left"),f=g.Kl(b,this.element),b=g.Ml(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.Vd(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.bp=function(){};
g.k.Bl=function(){return!1};
g.k.ZC=function(){};
g.k.gz=function(){};
g.k.Mq=function(){};
g.k.Lq=function(){};
g.k.iE=function(){};
g.k.Jr=function(){};g.w(zdb,g.iR);g.k=zdb.prototype;g.k.onVideoDataChange=function(){if(this.player.N("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.qo(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.iR.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Ok=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.hR("miniplayer",zdb);})(_yt_player);
