"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{3752:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(907);var a=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(885),i=n(1207),o=n(2791),s=n(6871),f=n(184);function p(){var e=(0,s.UO)().moviesId,t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1];return(0,o.useEffect)((function(){i.Z.fetchMovieReviews(e).then((function(e){return a(u(e.results))}))}),[e]),0===r.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,f.jsx)(f.Fragment,{children:r&&(0,f.jsx)("ul",{children:r.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})})}},1207:function(e,t,n){var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c),o="8f3b565dfa705a44083795264ed307ec";i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t.moviesId,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={fetchTrendingMovies:s,fetchMoviesDetails:f,fetchSearchMovie:p,fetchMovieCast:v,fetchMovieReviews:h};t.Z=l}}]);
//# sourceMappingURL=reviews.e38a57f3.chunk.js.map