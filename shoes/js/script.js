
const ham = document.querySelector("#js-hamburger")
const nav = document.querySelector("#js-nav")

ham.addEventListener("click",function(){
  ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
})

// スライダー
const swiper = new Swiper(".mySwiper",{
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    750: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  }
});
// フェードイン
// スクロール時のイベント
window.addEventListener("scroll", function(){

  // 全ての.feature-contentを取得
  const item = document.querySelectorAll(".feature-content");
  // 配列になるのでfor構文を使用
  for(let i = 0; i < item.length; i++){
// .feature-contentのオフセット高さを取得
let targetTop = item[i].offsetTop;
// 画面のスクロール量 + 300px >.feature-contentのオフセット高さを取得
  if (window.scrollY + 300 > targetTop){
    item[i].classList.add("show")
  };
    // console.log(targetTop)
    // console.log(window.scrollY + 300 > targetTop)
  }
});



