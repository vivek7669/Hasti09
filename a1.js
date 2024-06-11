let arr = [-20,41,-10,39,100]
let n = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        n = n + 1
    }
}
console.log("even", n)

let sum = [-20,41,-10,39,100]
let num = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 != 0) {
        num = num + 1
    }
}
console.log("odd",num)