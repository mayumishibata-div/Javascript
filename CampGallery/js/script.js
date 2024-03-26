// ハンバーガーメニュー
// document.querySelector(".hamburger-btn").addEventListener("click",function(){
//   this.classList.toggle("active");
//   document.querySelector(".header-menu").classList.toggle("active")
// })

const ham = document.querySelector(".hamburger-btn")
const menu = document.querySelector(".header-menu")

ham.addEventListener("click", function(){
  ham.classList.toggle("active")
  menu.classList.toggle("active")
})

