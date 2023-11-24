function myrandom(min,max){
    return  Math.floor( Math.random()*(max-min + 1) + min)
}

let minnumber = +prompt('Minimal son kiriting')
let maxnumber = +prompt('Maximal son kiriting')
for (let i = 0; i < 10; i++) {
    let num1 = myrandom(minnumber,maxnumber)
    let num2 = myrandom(minnumber,maxnumber)
    let exp = +prompt(`${num1} * ${num2} = ?`)

  let ans=  exp == (num1*num2)? `javobingiz togri✅`: `javob notori❌`
  alert(ans)
}