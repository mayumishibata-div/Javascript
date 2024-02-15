const pullDownButton = document.getElementById("lists")
// console.log(pullDownButton)

pullDownButton.addEventListener("mouseover",function(){
  console.log("mouseover OK")
})

pullDownButton.addEventListener("mouseout", function(){
  console.log("mouseout OK")
})

pullDownButton.addEventListener("click", function(){
  console.log("Click OKOK")
})
