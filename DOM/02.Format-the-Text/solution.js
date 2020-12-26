function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  let textLikeArray = input.textContent.split(". ");
  
  for (let i = 0; i < textLikeArray.length; i++) {
    let sentences = textLikeArray.splice(0, 3).join(". ");
    const p = document.createElement("p");
    
    // if (sentences[sentences.length - 1] !== ".") {
    //   sentences += ".";
    // }

    // The same logic like IF-statement
    sentences = sentences[sentences.length - 1] !== "." ? sentences += "." : sentences;
    
    p.textContent = sentences;
    output.appendChild(p);

    i--;
  }
}