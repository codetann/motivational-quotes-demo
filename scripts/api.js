// Selectors
const button = document.getElementById("get-quote");
const container = document.getElementById("container");
const body = document.getElementById("body");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Async function that retreives a list of quotes from a URL
const getQuotes = async () => {
  try {
    const res = await fetch("https://motivational-quotes.herokuapp.com/quotes");

    if (res.ok) {
      const data = await res.json();
      const ranNum = Math.floor(Math.random() * data.length) - 1;
      const ranQuote = data[ranNum];
      quote.innerHTML = ranQuote.quote;
      author.innerHTML = ranQuote.author;
      ranColor();
    }
  } catch (err) {
    console.log(err);
  }
};

button.addEventListener("click", getQuotes);

const ranColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  body.style.background = `rgb(${red}, ${green}, ${blue})`;
};
