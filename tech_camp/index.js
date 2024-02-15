const pullDownButton = document.getElementById("lists")
// console.log(pullDownButton)

pullDownButton.addEventListener("mouseover",function(){
  pullDownButton.setAttribute("style", "background-color: #ffa500")
  console.log("mouseover OK")
})

pullDownButton.addEventListener("mouseout", function(){
  pullDownButton.removeAttribute("style")
  console.log("mouseout OK")
})

pullDownButton.addEventListener("click", function(){
  console.log("Click OKOK")
})
