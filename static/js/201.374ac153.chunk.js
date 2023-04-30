"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[201],{9201:function(n,e,r){r.r(e),r.d(e,{default:function(){return $}});var t=r(5671),o=r(3144),s=r(136),u=r(8347),i=r(364),a=r(2745),l=r(5987),c=r(2791),f="users_usersWrapper__FT5yy",p="users_h1__wJ+bw",g="users_photoF__m71SG",h="users_wrap__zBIO3",d="users_firstBlock__MXBmw",v="users_secondBlock__WUdjj",m="users_userName__v745b",y="users_followButton__iC2oi",w="users_unfollowButton__zR7Xa",_="users_statusColor__pEtDT",j=r(885),P="Paginator_divList__tNyRx",x="Paginator_selectedPage__YsuSc",C=r(184),k=function(n){for(var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,s=n.portionSize,u=void 0===s?10:s,i=Math.ceil(e/r),a=[],l=1;l<=i;l++)a.push(l);var f=Math.ceil(i/u),p=(0,c.useState)(1),g=(0,j.Z)(p,2),h=g[0],d=g[1],v=(h-1)*u+1,m=h*u;return(0,C.jsxs)("ul",{className:P,children:[h>1&&(0,C.jsx)("button",{onClick:function(){d(h-1)},children:"PREV"}),a.filter((function(n){return n>=v&&n<=m})).map((function(n){return(0,C.jsx)("li",{className:t===n&&x,onClick:function(){o(n)},children:n},n)})),f>h&&(0,C.jsx)("button",{onClick:function(){d(h+1)},children:"NEXT"})]})},N=r(9948),z=r(3504),S=function(n){var e=n.user,r=n.followingInProgress,t=n.follow,o=n.unfollow;return(0,C.jsxs)("div",{className:h,children:[(0,C.jsxs)("span",{className:d,children:[(0,C.jsx)("div",{children:(0,C.jsx)(z.OL,{to:"/profile/"+e.id,children:(0,C.jsx)("img",{src:null!=e.photos.large?e.photos.small:N,className:g,alt:"ups!"})})}),(0,C.jsx)("div",{children:e.followed?(0,C.jsx)("button",{className:w,disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Unfollow"}):(0,C.jsx)("button",{className:y,disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Follow"})})]}),(0,C.jsxs)("span",{className:v,children:[(0,C.jsxs)("span",{className:m,children:[(0,C.jsx)("div",{children:e.name}),(0,C.jsx)("div",{children:(0,C.jsx)("span",{className:_,children:e.status})})]}),(0,C.jsxs)("span",{className:"s.userCountry",children:[(0,C.jsx)("div",{children:"user.location.city"}),(0,C.jsx)("div",{children:"user.location.country"})]})]})]},e.id)},b=["currentPage","onPageChanged","pageSize","totalUsersCount","users"],U=function(n){var e=n.currentPage,r=n.onPageChanged,t=n.pageSize,o=n.totalUsersCount,s=n.users,u=(0,l.Z)(n,b);return(0,C.jsxs)("div",{className:f,children:[(0,C.jsx)("h2",{className:p,children:"Users"}),(0,C.jsx)(k,{currentPage:e,totalUsersCount:o,pageSize:t,onPageChanged:r}),s.map((function(n){return(0,C.jsx)(S,{user:n,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow},n.id)}))]})},Z=r(1548),F=r(7781),A="NOT_FOUND";var E=function(n,e){return n===e};function I(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?E:t,s=r.maxSize,u=void 0===s?1:s,i=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),l=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:A},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return A}return{get:t,put:function(e,o){t(e)===A&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,a);function c(){var e=l.get(arguments);if(e===A){if(e=n.apply(null,arguments),i){var r=l.getEntries(),t=r.find((function(n){return i(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return c.clearCache=function(){return l.clear()},c}function q(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function D(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var s,u=0,i={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(i=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=i,c=l.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=q(t),h=n.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return s=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var O=D(I),B=O((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),R=function(n){return n.usersPage.pageSize},M=function(n){return n.usersPage.totalUsersCount},T=function(n){return n.usersPage.currentPage},X=function(n){return n.usersPage.isFetching},L=function(n){return n.usersPage.followingInProgress},W=function(n){(0,s.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){var r=n.props.pageSize;n.props.requestUsers(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.requestUsers(e,r)}},{key:"render",value:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(U,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}]),r}(c.Component),$=(0,F.qC)(Z.D,(0,i.$j)((function(n){return{users:B(n),pageSize:R(n),totalUsersCount:M(n),currentPage:T(n),isFetching:X(n),followingInProgress:L(n)}}),{follow:a.ZN,unfollow:a.fv,setCurrentPage:a.D4,toggleFollowingProgress:a.ZH,requestUsers:a.D7}))(W)},1548:function(n,e,r){r.d(e,{D:function(){return g}});var t=r(8683),o=r(5671),s=r(3144),u=r(136),i=r(8347),a=r(2791),l=r(364),c=r(819),f=r(184),p=function(n){return{isAuth:n.auth.isAuth}},g=function(n){var e=function(e){(0,u.Z)(a,e);var r=(0,i.Z)(a);function a(){return(0,o.Z)(this,a),r.apply(this,arguments)}return(0,s.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(n,(0,t.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,l.$j)(p)(e)}}}]);
//# sourceMappingURL=201.374ac153.chunk.js.map