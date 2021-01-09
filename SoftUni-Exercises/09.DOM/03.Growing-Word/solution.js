function growingWord() {

  let growingText = document.querySelector("#exercise p");
  let colorsArr = ["blue", "green", "red"];
  // getComputedStyle не работи за Judge

  // let style = window.getComputedStyle(growingText, null).getPropertyValue("font-size");
  // let fontSize = parseFloat(style);
  // let size = growingText.style.fontSize = fontSize * 2;

  let size = growingText.style.fontSize.slice(0, -2) * 2;

  let color = growingText.style.color;
  let index = colorsArr.indexOf(color);
  
  if (size === 0) {
    size = 2;
  }

  let nextColor = index + 1 >= colorsArr.length ? colorsArr[0] : colorsArr[index + 1];

  growingText.style.fontSize = `${size}px`;
  growingText.style.color = nextColor;
  
}
