(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(3),i=a.n(s),o=a(4),r=a(5),l=a(6),d=a(8),u=a(7),b=(a(13),a(0)),j=function(t){var e=t.title,a=t.children;return Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)("h2",{className:"title",children:e}),a]})},h=(a(15),function(t){var e=t.handleFeedback,a=t.options;return Object(b.jsx)("div",{className:"controls-container",children:a.map((function(t){var a="control control-"+t;return Object(b.jsx)("button",{className:a,onClick:function(){return e(t)},children:t},t)}))})}),f=(a(16),function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,s=t.positivePercentage;return Object(b.jsxs)("div",{className:"statistics-container",children:[Object(b.jsxs)("p",{className:"statistic statistic-good",children:["Good: ",e]}),Object(b.jsxs)("p",{className:"statistic statistic-neutral",children:["Neutral: ",a]}),Object(b.jsxs)("p",{className:"statistic statistic-bad",children:["Bad: ",c]}),Object(b.jsxs)("p",{className:"statistic statistic-total",children:["Total: ",n]}),Object(b.jsxs)("p",{className:"statistic statistic-percentage",children:["Positive feedback: ",s?s+"%":0]})]})}),v=(a(17),a(18),function(){return Object(b.jsx)("div",{className:"notification",children:"No feedback given"})}),O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.countTotalFeedback();return Math.round(100*this.state.good/t)}},{key:"handleFeedback",value:function(t){this.setState((function(e){return Object(o.a)({},t,e[t]+1)}))}},{key:"render",value:function(){var t=this.handleFeedback,e=this.state,a=e.good,c=e.neutral,n=e.bad,s=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{title:"Please leave your feedback",children:Object(b.jsx)(h,{options:["good","neutral","bad"],handleFeedback:t.bind(this)})}),Object(b.jsx)(j,{title:"Statistics",children:s?Object(b.jsx)(f,{good:a,neutral:c,bad:n,total:s,positivePercentage:i}):Object(b.jsx)(v,{message:"No feedback given"})})]})}}]),a}(c.Component);a(19);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.0d96630b.chunk.js.map