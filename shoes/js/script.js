
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

