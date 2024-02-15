const pullDownButton = document.getElementById("lists")
const pullDownLists = document.getElementById("pull-down")
// console.log(pullDownButton)

pullDownButton.addEventListener("mouseover",function(){
  this.setAttribute("style", "background-color: #ffa500")
  console.log("mouseover OK")
})

pullDownButton.addEventListener("mouseout", function(){
  this.removeAttribute("style")
  console.log("mouseout OK")
})

pullDownButton.addEventListener("click", function(){
  if (pullDownLists.getAttribute("style") == "display: block"){
  pullDownLists.removeAttribute("style")
  } else {
  pullDownLists.setAttribute("style", "display: block")
  }
})