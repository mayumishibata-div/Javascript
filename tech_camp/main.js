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

