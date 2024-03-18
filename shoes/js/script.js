const ham = document.querySelector("#js-hamburger")
const nav = document.querySelector("#js-nav")

ham.addEventListener("click",function(){
  ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
})

