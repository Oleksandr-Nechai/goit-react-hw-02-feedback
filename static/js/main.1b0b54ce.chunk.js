(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){e.exports={message:"Notification_message__2MjQJ"}},19:function(e,t,n){},2:function(e,t,n){e.exports={item:"Statistics_item__14DFT",statistics:"Statistics_statistics__GTGUi"}},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),c=n(9),s=n.n(c),o=(n(19),n(4)),r=n(6),u=n(10),l=n(11),d=n(14),b=n(13),j=n(2),h=n.n(j),p=n(1),O=n.n(p),m=n(0);function g(e){var t=e.good,n=e.neutral,i=e.bad,a=e.total,c=e.positivePercentage;return Object(m.jsxs)("ul",{className:h.a.statistics,children:[Object(m.jsx)("li",{className:h.a.item,children:Object(m.jsxs)("p",{children:["Good: ",t]})}),Object(m.jsx)("li",{className:h.a.item,children:Object(m.jsxs)("p",{children:["Neutral: ",n]})}),Object(m.jsx)("li",{className:h.a.item,children:Object(m.jsxs)("p",{children:["Bad: ",i]})}),Object(m.jsx)("li",{className:h.a.item,children:Object(m.jsxs)("p",{children:["Total: ",a]})}),Object(m.jsx)("li",{className:h.a.item,children:Object(m.jsxs)("p",{children:["Positive feedback: ",c," %"]})})]})}g.prototype={good:O.a.number.isRequired,neutral:O.a.number.isRequired,bad:O.a.number.isRequired,total:O.a.number.isRequired,positivePercentage:O.a.number.isRequired};var f=g,x=n(7),v=n.n(x);function k(e){var t=e.options,n=e.onLeaveFeedback,i=t.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:v.a.button,typr:"button",value:e,onClick:function(){return n(e)},children:e})},e)}));return Object(m.jsx)("ul",{className:v.a.listButton,children:i})}k.prototype={options:O.a.arrayOf(O.a.string).isRequired,onLeaveFeedback:O.a.func.isRequired};var _=k,F=n(12),N=n.n(F);function q(e){var t=e.message;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{className:N.a.message,children:t})})}q.prototype={message:O.a.string.isRequired};var y=q,P=n(8),R=n.n(P);function T(e){var t=e.title,n=e.children;return Object(m.jsxs)("div",{className:R.a.section,children:[Object(m.jsx)("h2",{className:R.a.title,children:t}),n]})}T.prototype={title:O.a.string.isRequired,children:O.a.node.isRequired};var S=T,B=(n(23),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.buttonsOption=["good","neutral","bad"],e.onClickButton=function(t){e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},t,e[t]+1))}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,i=e.bad;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{title:"Please leave feedback",children:Object(m.jsx)(_,{options:this.buttonsOption,onLeaveFeedback:this.onClickButton})}),Object(m.jsx)(S,{title:"Statistic",children:this.countTotalFeedback()?Object(m.jsx)(f,{good:t,neutral:n,bad:i,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(m.jsx)(y,{message:"There is no feedback"})})]})}}]),n}(i.Component)),C=B,w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),w()},7:function(e,t,n){e.exports={listButton:"FeedbackOptions_listButton__3YHhC",button:"FeedbackOptions_button__3Hynz"}},8:function(e,t,n){e.exports={section:"Section_section__3qvSV",title:"Section_title__3Y7qi"}}},[[24,1,2]]]);
//# sourceMappingURL=main.1b0b54ce.chunk.js.map