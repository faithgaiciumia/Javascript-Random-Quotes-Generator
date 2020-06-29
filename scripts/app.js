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
];
function generateQuote() {  
  var randomIndex = Math.floor(Math.random()*quotes.length);  
  document.getElementById("quote").innerHTML=quotes[randomIndex].quote;
  document.getElementById("author").innerHTML="~"+ " " + quotes[randomIndex].author;
}
