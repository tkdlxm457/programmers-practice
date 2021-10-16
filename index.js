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

// (function solution(clothes) {
//     let map = new Map();
//     let rst = 1;

//     clothes.forEach((el) => {
//         if (!map.has(el[1])) {
//             map.set(el[1], [])
//         }
//         map.get(el[1]).push(el[0]);
//     })

//     map.forEach((v, k) => {
//         rst *= v.length + 1;
//     })
//     console.log(rst - 1);
//     return rst - 1;
// })([
//     ["a", "headgear"],
//     ["b", "headgear"],
//     ["c", "eyewear"],
//     ["d", "eyewear"],
//     ["e", "eyewear2"],
//     ["f", "eyewear2"],
//     ["g", "eyewear3"],
//     ["h", "eyewear3"],

// ])



// (function solution(genres, plays) {
//     var answer = [];
//     let map = new Map();

//     genres.forEach((k, i) => {
//         // 동일한 카테고리가 존재한다면...
//         if (map.has(k)) {
//             // 총 플레이의 합산을 계속 더한다.
//             map.get(k)['total'] = map.get(k)['total'] + plays[i];

//             // 새롭게 온 플레이 리스트
//             let newList = [i, plays[i]];

//             // 하나의 카테고리의 전체 플레이 리스트
//             let allList = map.get(k)['playListOfCategory'];

//             // [복사본] 하나의 카테고리의 전체 플레이 리스트
//             let copyList = JSON.parse(JSON.stringify(allList))

//             // newlist를 어디다가 저장할지 결정한다.
//             for (let j = 0, loopCnt = allList.length; j < loopCnt; j++) {
//                 let oldList = copyList[j];

//                 if (newList[1] > oldList[1] || newList[1] == oldList[1] && newList[0] < oldList[0]) {

//                     allList.unshift(newList);
//                     if (allList.length > 2) {
//                         allList.pop();
//                         j++;
//                     }
//                 } else {
//                     allList.push(newList);
//                     if (allList.length > 2) {
//                         allList.pop();
//                         j++;
//                     }
//                 }
//             }
//         } else {
//             map.set(k, {
//                 total: plays[i],
//                 playListOfCategory: [[i, plays[i]]]
//             })
//         }
//     })

//     // 오름차순 으로 정렬한다.
//     const sortByPosition = obj => {
//         const order = [], res = {};
//         Object.keys(obj).forEach(key => {
//             return order[obj[key]['total'] - 1] = key;
//         });
//         order.forEach(key => {
//             res[key] = obj[key];
//         });
        
//         return res;
//     }
//     sortByPosition(Object.fromEntries(map))

//     // 오름차순이므로 앞에서부터 추가해준다.
//     for (const [k, v] of map) {
//         answer.unshift(v['playListOfCategory'][0][0], v['playListOfCategory'][1][0]);
//     }

//     return answer;
// })(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])



(function solution(progresses, speeds) {
    var answer = [];
    return answer;
})()












