"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{812:function(e,n,t){t.d(n,{Z:function(){return c}});var r="PageHeading_title__1wPIF",o=t(184);function c(e){var n=e.text;return(0,o.jsx)("h1",{className:r,children:n})}},806:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),o=t(791),c=t(504),i=t(207),a=t(812),u=t(184);function s(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1];return(0,o.useEffect)((function(){i.Z.fetchTrendingMovies().then((function(e){return s(e.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{text:"Trending today"}),t&&(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},207:function(e,n){var t="https://api.themoviedb.org/3",r="8f3b565dfa705a44083795264ed307ec";var o={fetchTrendingMovies:function(){return fetch("".concat(t,"/trending/movie/day?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong :("))}))},fetchMoviesDetails:function(e){return fetch("".concat(t,"/movie/").concat(e.moviesId,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong :("))}))},fetchSearchMovie:function(e){return fetch("".concat(t,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong :("))}))},fetchMovieCast:function(e){return fetch("".concat(t,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong :("))}))}};n.Z=o}}]);
//# sourceMappingURL=home-page.e1ee41f1.chunk.js.map