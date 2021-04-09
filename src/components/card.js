import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const div = document.createElement('div')
  div.classList.add('card')

  const headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = article.headline

  const authorDiv = document.createElement('div')
  authorDiv.classList.add('author')

  const imgDiv = document.createElement('div')
  imgDiv.classList.add('img-container')

  const img = document.createElement('img')
  img.src = article.authorPhoto

  const span = document.createElement('span')
  span.textContent = article.authorName

  div.addEventListener('click', () => {
    console.log(article.headline)
  })

  div.appendChild(headlineDiv)
  div.appendChild(authorDiv)
  authorDiv.appendChild(imgDiv)
  imgDiv.appendChild(img)
  authorDiv.appendChild(span)

  return div
}

const cardAppender = (selector) => {
  const cardEntry = document.querySelector('.cards-container')
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const articles = res.data.articles
    for (let key in articles) {
      for (let articles of articles[key]) {
        cardEntry.appendChild(Card(articles))
      }
    }
  })
  .catch(err => {
    console.log(err);
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
