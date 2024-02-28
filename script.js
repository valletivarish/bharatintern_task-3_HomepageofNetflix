function clickable() {
  var boxContent = document.querySelector(".box-content");
  var plusElement = document.querySelector(".plus");

  // Toggle the visibility of box-content
  boxContent.classList.toggle("active");

  // Toggle the content of the plus element
  if (boxContent.classList.contains("active")) {
    plusElement.innerText = "x";
  } else {
    plusElement.innerText = "+";
  }
}
