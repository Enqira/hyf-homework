const url = "https://api.github.com/search/repositories?q=user:"

const users = [
  {
    name: "Enqira",
    username: "enqira"
  },
  {
    name: "Dlnya",
    username: "DlnyaMazhari"
  },
  { name: "Tithi", username: "tithi1244" }
]

// function to render content
const render = (data, user) => {
  // select main ul
  const selectedUl = document.querySelector("#ul")

  // create "li" for user and append it
  const userLi = document.createElement("li")
  userLi.textContent = `Student: ${user.name}`
  selectedUl.appendChild(userLi)

  // create "ul" for repositories and append it to user "li"
  const reposUl = document.createElement("ul")
  userLi.appendChild(reposUl)

  data.items.forEach(el => {
    const ul = document.createElement("ul")

    const repoName = document.createElement("li")

    const repoOwner = document.createElement("li")
    const repoUrl = document.createElement("li")

    repoName.textContent = `Repository name: ${el.name}`
    repoOwner.textContent = `Owner: ${user.name}`
    repoUrl.textContent = `URL: ${url + el.full_name}`

    reposUl.appendChild(repoName)
    repoName.appendChild(ul)
    ul.appendChild(repoOwner)
    ul.appendChild(repoUrl)
  })
}

// function to fetch data
const getData = user => {
  fetch(url + user.username)
    .then(res => res.json())
    .then(data => render(data, user))
}

Promise.all(getData(users[0]), getData(users[1]), getData(users[2]))
