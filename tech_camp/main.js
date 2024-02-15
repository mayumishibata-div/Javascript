const hello = "おはよう"
console.log(hello)

const fruits = "りんご"
console.log(fruits)

const age = 25
const nickname = "TOM"
const profile = (`私の名前は${nickname}です。年齢は${age}です`)
console.log(profile)

// 条件分岐
const num = 60
if (num%15==0) {
  console.log(`${num}は3と5の倍数です`)
}
else if (num%3==0) {
  console.log(`${num}は3の倍数です`)
}

else if (num%5==0){
  console.log(`${num}は5の倍数です`)
}

else {
  console.log(`${num}は3でも5でもありません`)
}

// 配列
const list = ["りんご", "バナナ", "みかん"]
console.log(list)
console.log(list[2])
//  みかん

// 繰り返し処理
// for文を使う
// for ([初期化式]; [条件式]; [加算式]){
//   繰り返す内容
// }
let count = 1
for(let i = 1; i<=10; i+=1){
  console.log(`${count}回目の処理です`)
  count +=1
}

// 配列の繰り返し処理
// forEach(function(){
  // 処理の内容
// })

const fruit = ["りんご", "バナナ","パイナップル"]
fruit.forEach(function(item){
  console.log(`今日の果物は${item}です`)
})

// 関数
// function 関数名(){
//   処理
// }
// （）の中は引数
// {}の中は処理
function say_hello (){
  console.log("こんにちは")
}

say_hello()

// 戻り値
// returnを使わないといけない
function calc(num1,num2) {
  return num1*num2
}

const num1 = 2
const num2 = 3

console.log(calc(num1,num2))

// 関数定義

  // 関数宣言
  // 標準的な関数の定義。
    // function 関数名( 引数 ){
    //   // 関数内の処理
    // }
    function study(subject, hour) {
      return console.log(`今日は${subject}の学習を${hour}時間しました`)
    }
    let subject = "english"
    let hour = 1

    study(subject, hour)

  // 関数式
  // 初めの段階で変数宣言が必要がどうかの違い
      // 変数 = function( 引数 ){
        // 関数内の処理
      // }

    study = function (subject2, hour2){
      return console.log(`今日は${subject2}の学習を${hour2}時間しました`)
    }

    let subject2 = "プログラミング"
    let hour2 = 1

    study(subject2, hour2)

  // 無名関数
  // 関数を多く使用するコードであるときに使用する。関数名の重複を避けることができる。
    // 関数名なしで関数を定義することができる
    // より簡潔なコードが書ける

    const brainstorming = function(subject3, hour3){
      return console.log(`今日は${subject3}の学習を${hour3}時間しました`)
    }

    let subject3 = "JavaScript"
    let hour3 = 4

    brainstorming(subject3, hour3)

  // 即時関数
  // 流用する可能性のない関数を定義するときに使用する。別途関数を定義する手間がない。
    // 定義したと同時に実行される
    // 関数を定義する手間が省ける
    

    const self_taught = function(subject4, hour4) {
      return console.log(`今日は${subject4}の学習を${hour4}時間しました`)
    }

    let subject4 = "関数"
    let hour4 = 4
    
    self_taught(subject4, hour4)
  
  // アロー関数
  // 無名関数または即時関数において、より省略した記述をしたい時に使用する。
    // functionを省略　()=>
      // const 変数名 = () => {
      //   処理
      // }

        const effort = (subject5, hour5)=> {
          return console.log(`今日は${subject5}の学習を${hour5}時間しました`)
        }
    
        let subject5 = "コーチング"
        let hour5 = 4
        
        effort(subject5, hour5)

// オブジェクトの生成
    // データや処理を一つにまとめたもの
        // データ：キーとバリューのセット＝プロパティ
        let human = {
          name: "mayumi",
          age: 25,
          gender: "woman"
          
        }
        human["address"] = "Osaka"
        console.log(human.name)
        console.log(human.address)
// メソッド
  // プロパティに紐づけられた処理のこと
  // 関数を用いて『〇〇してほしい』とかく
  let man = {
    name: "mayumi",
    age: 25,
    gender: "woman",
    address: "Osaka",
    talk:function(){
      console.log(`私の名前は${man.name}です。年齢は${man.age}歳です。住所は${man.address}に住んでいます`)
    }
  }
  man.talk()

  // windowオブジェクト
  window.alert("ウインドウオブジェクトに成功")
  // 省略することもできる
  alert("省略して実行")

  // documentオブジェクト
  // ブラウザ上で表示された情報（HTML）を操作することができる
      // DOMツリーからHTMLを取得する
      // <idから取得>
          document.getElementById("id名")
      // <class名から取得>
          document.getElementsByClassName("class名")
      //    （複数形になっているので注意）
      // <セレクタから取得>
          document.querySelectorAll("セレクタ名")
          // (引数で指定したセレクタに合致するものをすべて取得)
          document.querySelector("セレクタ名")
          // (引数で指定したセレクタに合致する要素のうち一番最初に見つかった要素1つを取得)

  // 戻り値について
    // getElementsByClassName：HTMLCollection
    // querySelectorAll：NodeList
    // ＝使えるメソッドが違う
    // ※forEach関数を使用する場合はquerySelectorAll：NodeListが戻り値のものを使う必要がある


  // JavaScriptのコードを実行する仕組み
      // 何かが起きたらコードを実行する
      // 何かが起きたら＝イベント
          // loadイベント：ページ全体が全て読み込まれたら
          // clickイベント：意定された要素がクリックされたら
          // mouseoverイベント：指定された要素にカーソルを乗せたら
          // mouseoutイベント：指定された要素からカーソルを離したら
        addEventListener()
          // ：イベントを発火させる時に実行する関数を定義するメソッド
        // 要素.addEventListener("イベント名", 関数)

  // スタイルを操作する
    // インラインスタイル：HTMLの開始タグに直接cssのコードを記述する方法

      // setAttribute-新しい属性を追加
      const pullDownButton = document.getElementById("lists")
      pullDownButton.setAttribute("style", "background-color: blue;")

      // removeAttribute-属性を削除
      pullDownButton.removeAttribute("style")

  // プルダウンメニュー
  表示するメニューの中身はHTMLで記述
    // 初めから画面に表示されてしまう
      // →cssでdisplay:none;で見えないように
    // 非表示 → 表示させる
      // setAttributeを使ってdisplay:none → display:blockに

    // 表示 → 非表示
      // display:blockが指定されているかどうかで条件分岐
      // → 付与されているインラインスタイルの状態を取得する必要がある
        // getAttribute-要素上の指定した属性の値を戻り値で返してくれる

        if (pullDownLists.getAttribute("style") == "display:block;") {
          // pullDownListsのstyle属性にdisplay:block;が指定されている場合（つまり表示されている時）実行される
          pullDownLists.removeAttribute("style")
        } else {
          // pullDownListsのstyle属性にdisplay:block;が指定されていない場合（つまり非表示の時）実行される
          pullDownLists.setAttribute("style", "display:block;")
        }