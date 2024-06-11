let arr = [-20,41,-10,39,100]
let n=0
for (let i=0; i<arr.length; i++) {
    if (arr[i]%10 == 0) {
        n = n + 1
    }
}
console.log(n)

let num = [-20,41,-10,39,100]
let max = 0
for (let i=0; i<arr.length; i++) {
    if (arr[i]%20 == 0) {
     max = max + 1
    }
}
console.log(max)