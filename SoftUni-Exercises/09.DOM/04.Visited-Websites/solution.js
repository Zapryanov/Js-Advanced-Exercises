function solve() {
  Array.from(document.querySelectorAll(".link-1 a"))
    .map(x => x.addEventListener("click", handleVisited))

  function handleVisited(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    let visitedText = e.currentTarget.nextElementSibling;
    let textLikeArr = visitedText.innerText.split(" ");
    textLikeArr[1]++;
    visitedText.innerText = textLikeArr.join(" ");
  }
}
