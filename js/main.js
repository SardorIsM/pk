// data type - bolean,string,object,number,null,underfind,bigInt,symbol
// massala-1
function taqoslash(x, y) {
    if (!isNaN(x) || !isNaN(y)) {
        return 0;
    } else if(x.toLowerCase() && y.toLowerCase()) {
        console.log(x, y);
        return 1
    } else {
        return -1;
    }
    return true;
}

console.log(taqoslash("B", "b"));

// massala-3 chala
// function person(str) {
//     let arr = str.split(" ");
//     let newStr = "";
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < 1; j++) {
//             if (arr[0][0]) {
//                 newStr += arr[i][j] + "."
//             } else {
//                 newStr += arr[i][j];
//             }
//         }
//     }
//     return newStr;
// }

// console.log(person("Ismailov Sardor"));

// massala-2 tugadi
// let arr = ["Keep","Remove","Keep","Remove","Keep","Remove","Keep","Remove","Keep","Remove"]

// function ochirish(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(ochirish(arr));
