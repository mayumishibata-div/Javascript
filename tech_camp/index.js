const pullDownButton = document.getElementById("lists")
const pullDownLists = document.getElementById("pull-down")
const pullDown = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")
// console.log(pullDown)

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

pullDown.forEach(function(list){
  list.addEventListener("click", function(){
    console.log(list)
    const value = list.innerHTML
    // クリックした要素の文字列を変数valueに代入
    console.log(value)
    currentList.innerHTML = value
  })
})
