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

// モーダル
// モーダルオープン
const modalOpen = document.querySelectorAll(".gallery-content");
// モーダルオープンの引数をコールバック関数の引数をbuttonに設定
  modalOpen.forEach(function(button){
  //buttonをクリックしたとき
    button.onclick = function(){
      //data-modalの値を取得
      const modal = button.getAttribute("data-modal");
      // data-modalと同じIDの値を開く
      document.getElementById(modal).style.display="block"
    }
  });