import axios from 'axios'

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement('div')
  div.classList.add('header')

  const spanDate = document.createElement('span')
  spanDate.classList.add('date')
  spanDate.textContent = date

  const h1 = document.createElement('h1')
  h1.textContent = title

  const spanTemp = document.createElement('span')
  spanTemp.classList.add('temp')
  spanTemp.textContent = temp

  div.appendChild(spanDate)
  div.appendChild(h1)
  div.appendChild(spanTemp)
  return div
}

const headEnter = document.querySelector('.header-container')

const headerAppender = (selector) => {
  axios.get(selector)
  .then(res => {
    const head = Header('Nunez Times Magazine', 'July 5, 1997', '80')
    headEnter.appendChild(head)
  })
  .catch(err => {
    console.log(err)
  })
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
