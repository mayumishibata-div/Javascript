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

// モーダルクローズ
const modalClose = document.querySelectorAll(".close")
// モーダルクローズの引数をコールバック関数の引数をbuttonに設定  
  modalClose.forEach(function(button){
  // closeをクリックしたとき
    button.onclick = function(){
      // 祖先の要素.modalを取得
      const modal = button.closest(".modal");
      // modalを非表示
      modal.style.display="none"
  }
})

// スライダー
var swiper = new Swiper(".mySwiper", {
  // ナビゲーション
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Slides per view
  // （スマホ用）
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  // ブレイクポイント650以上の時
  breakpoints: {
    650: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});
