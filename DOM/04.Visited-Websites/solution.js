function solve() {
  Array.from(document.querySelectorAll(".link-1 a"))
    .map(x => x.addEventListener("click", handleVisited))

  function handleVisited(e) {
    e.preventDefault();
    let visitedText = e.currentTarget.nextElementSibling;
    let arr = visitedText.innerText.split(" ");
    arr[1]++;
    visitedText.innerText = arr.join(" ");
  }
}
