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
