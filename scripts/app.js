const quotes = [
  { quote: "You're only as sick as your secrets.", author: "Anonymous" },
  {
    quote: "To remain young one must change.",
    author: "Alexander Chase",
  },
  {
    quote:
      "Those who seek happiness miss it, and those who discuss it, lack it.",
    author: "Holbrook Jackson",
  },
  {
    quote: "Ten thousand men possess ten thousand hopes.",
    author: "Euripides",
  },
  {
    quote:
      "A great secret of success is to go through life as a man who never gets used up.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "Repeat it until you learn. That's all it takes :)",
    author: "Obi Wyc",
  },
  {
    quote:
      "If it hurts, do it more often.",
    author: "Martin Fowler",
  },
  {
    quote:
      "Happiness has much more to do with how we think about the world than the world itself.",
    author: "Anonymous",
  },
  {
    quote:
      "Everyone is trying to figure out life. You don't see it coz our interactions are a game of confidence.",
    author: "Anonymous",
  },
  {
    quote:
      "Failure to plan is planning for failure. Always draft something down :)",
    author: "Obi Wyc",
  },
  {
    quote:
      "You will be much more in control, if uiu realise how much you are not in control.",
    author: "Benjamin Graham",
  },
];
function generateQuote() {  
  var randomIndex = Math.floor(Math.random()*quotes.length);  
 document.getElementById("quote").innerHTML=quotes[randomIndex].quote;
  document.getElementById("author").innerHTML="~"+ " " + quotes[randomIndex].author;
  
  // Change Button Text After Click
  document.getElementById("generate").innerHTML="New Quote";
}
