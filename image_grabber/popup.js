const quoteElement = document.querySelector('.quote');

function updateQuote() {
  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
}

document.querySelector('.quote-btn').addEventListener("click", updateQuote)