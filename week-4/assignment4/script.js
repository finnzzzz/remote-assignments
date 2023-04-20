const content = document.getElementById("content");
const moreBtn = document.querySelector(".moreBtn");
const list = document.querySelector("ul");
const url = "https://api.github.com/orgs/facebook/repos?per_page=5&page=1";

let currentPage = 1;

async function fetchData() {
  isFetching = true;
  let res = await fetch(
    `https://api.github.com/orgs/facebook/repos?per_page=5&page=${currentPage}`
  );
  let data = await res.json();
  isFetching = false;
  if (data.length === 0) {
    alert("no more data");
  }
  for (let post of data) {
    let li = document.createElement("li");
    let h3 = document.createElement("h3");
    let name = document.createElement("a");
    let visibility = document.createElement("span");
    let description = document.createElement("p");
    let tags = document.createElement("div");

    name.innerHTML = `${post.name}`;
    name.setAttribute("href", `${post.html_url}`);

    let visibility1 = post.visibility.charAt(0).toUpperCase() + post.visibility.slice(1);
    visibility.innerHTML = visibility1;

    description.innerHTML = `${post.description}`;
    description.setAttribute("class", "description");

    let topics = post.topics;
    for (let topic of topics) {
      let tag = document.createElement("a");
      tag.innerHTML = topic;
      tags.appendChild(tag);
    }
    tags.setAttribute("class", "tags");

    h3.append(name, visibility);
    li.append(h3, description, tags);
    list.appendChild(li);
  }
  currentPage++;
}

moreBtn.addEventListener("click", () => fetchData());

fetchData();
