var firstListItem = document.querySelector("ul li");
// console.log(firstListItem.outerHTML);

firstListItem.style.textTransform = "uppercase";

var moreReasons = document.querySelector(".more-reasons");
// console.log(moreReasons.outerHTML);
moreReasons.style.fontSize = "2.5em";

var whyJs = document.querySelector("h3");
whyJs.innerHTML = 'Why learn <span class = "highlight">JavaScript?';
// console.log(whyJs);
var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
// console.log(mainImage);

mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
