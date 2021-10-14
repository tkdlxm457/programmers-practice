// /** https://programmers.co.kr/learn/courses/30/parts/12077 1. 완주하지 못한 선수.
//  * 
//  * 1. 정렬먼저 해줘
//  * 2. 둘이 비교해
//  * 3. 틀리면 리턴해서 줘
//  */
// // let xx = ["leo", "kiki", "eden"];
// // let yy = ["eden", "kiki"];

// // function solution(xx, yy) {
// //     xx.sort();
// //     yy.sort();

// //     for (let i = 0; i < xx.length; i++) {
// //         if (xx[i] !== yy[i]) {
// //             return xx[i];
// //         }
// //     }
// // }

// // alert(solution(xx, yy));

// let x = new Map().set('1', 'ddd');


// x.set('1', 'ddd');
// x.get('1')

// let x = {
//     '1': 'ddd'
// }

// x['1'] = 'ddd'

// let xx = ["leo", "kiki", "eden"];
// let yy = ["eden", "kiki"];

// function solution(xx, yy) { 
//     let isExist = false;
//     let rst;

//     xx.some(el => {
//         if (0 > yy.findIndex(el2 => el === el2)) {
//             rst = el;
//             isExist = true;
//         }

//         return isExist;
//     });

//     console.log(c);

//     return rst;
// }

// alert(solution(xx, yy));

(function solution(clothes) {
    let map = new Map();
    let rst = 1;

    clothes.forEach((el) => {
        if (!map.has(el[1])) {
            map.set(el[1], [])
        }
        map.get(el[1]).push(el[0]);
    })

    map.forEach((v, k) => {
        rst *= v.length + 1;
    })
    console.log(rst - 1);
    return rst - 1;
})([
    ["a", "headgear"],
    ["b", "headgear"],
    ["c", "eyewear"],
    ["d", "eyewear"],
    ["e", "eyewear2"],
    ["f", "eyewear2"],
    ["g", "eyewear3"],
    ["h", "eyewear3"],

])

















