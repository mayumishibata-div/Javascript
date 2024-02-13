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
