///////////////////////////////////////
// array of links to tarot cards
///////////////////////////////////////

const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
]

/////////////////////////////////////////
// My Code
/////////////////////////////////////////

const $body = $("body");
const $div = $("<div>Add random image</div>");

$body.append($div);
$div.addClass("square");

$("body").on("click", (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random()*cards.length);
    if (event.target.localName === "div" || event.target.localName === "img") {
        $body.append($("<img>").attr("src", cards[randNum]))
    }
})



// // A possible way to add the desired css styles using jquery
// $div.addClass("square").css({
//     "height": "100px",
//     "width": "100px", 
//     "background-color": "black", 
//     "color": "white", 
//     "text-align": "center", 
//     "display": "flex", 
//     "align-items": "center", 
//     "font-weight": "bold",
//     "cursor": "pointer"
// })

// $div.on("click", (event) => {
//     event.preventDefault();
//     const randNum = Math.floor(Math.random()*cards.length);
//     $body.append($("<img>").attr("src", cards[randNum]))

//     // // Longer way to write it
//     // const $tarot = $("<img>");
//     // $tarot.attr("src", cards[randNum]);
//     // $body.append($tarot)
// })

// $("body").on("click", (event) => {
//     event.preventDefault();
//     const randNum = Math.floor(Math.random()*cards.length);
//     if (event.target.localName === "img") {
//         $body.append($("<img>").attr("src", cards[randNum]))
//     }
// })
