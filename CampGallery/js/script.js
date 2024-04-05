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

// スムーススクロール
  // aタグの＃を取得
  const anchors = document.querySelectorAll("a[href^='#']");
  // header の高さを取得
  const headerHeight = document.querySelector("header").offsetHeight;
  // アンカー取得
  const urlHash = location.href; 
  
    for(let i = 0; i < anchors.length; i++){
      anchors[i].addEventListener("click",function(event){
        event.preventDefault();
        // anchorsのhrefの値を取得
        const href = anchors[i].getAttribute("href");

        // スクロール先の要素を取得
        const target = document.getElementById(href.replace("#", ""));

        // スクロールする位置
        const position = window.pageYOffset + target.getBoundingClientRect().top - headerHeight;

        // アニメーションの動き
        window.scroll({
          top: position,
          behavior: "smooth"
        });
      });
    }

    // フェードアニメーション
    // スクロールイベント 
    window.addEventListener("scroll", function(){
      // 全ての.fadeを取得
      const fade = document.querySelectorAll(".fade");
      for(let i=0; i < fade.length; i++){
        // fadeの高さを取得
        let targetTop = fade[i].offsetTop;
        
        // 画面のスクロール量+300px > .fadeのoffsetの高さ
        if(window.scrollY + 300 > targetTop){
          fade[i].classList.add("show")
        }
      }
    });