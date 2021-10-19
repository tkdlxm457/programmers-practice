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


/**
 * 1. 뒤에 있는 기능이 먼저 돼도 앞에 기능이 100 안되면 배포안됨
 * 2. 뒤 기능이 먼저 완료 돼고 answer에 추가하지 않고 앞에 기능이 완료되면 기능수 더해줌
 * 
 */
// (function solution(progresses, speeds) {
//     var answer = [];
//     let cnt = 0;

//     // progresses가 삭제돼서 0될 때까지 돌아감
//     while (progresses.length > 0) {
//         for (let i = 0; i < progresses.length; i++) {
//             // 작업률 계산
//             progresses[i] += speeds[i]
//         }
//         while (true) {
//             // 앞에 있는 기능이 100보다 크거나 같으면 작업과 작업속도 배열에서 제거
//             if (progresses[0] >= 100) {
//                 cnt += 1;
//                 progresses.shift();
//                 speeds.shift();
//             } else {
//                 if (cnt !== 0) {
//                     // 앞에 완료된 작업이 있으면 개수 푸시후 종료
//                     answer.push(cnt);
//                 }

//                 // cnt 초기화
//                 cnt = 0;
//                 break;
//             }
//         }
//     }

//     return answer;
// })(
//     [93, 30, 55],
//     [1, 30, 5])

/**
 * 1. 대기목록에서 위치 값 뽑아내고
 * 2. 내림차순으로 정렬
 * 3. 뽑아낸 값 을 정렬한 값에서 찾아내기
 * 
 * 중복된 값에서 정렬이 돼도 그 값을 찾을 수 있는 방법
 */
(function solution(priorities, location) {
    
    // let answer = 0;
    // let select = priorities[location];

    // let sortPriorities = priorities.sort((a, b) => b - a);

    // answer = sortPriorities.indexOf(select) + 1;
    
    // [2,1,3,2]
    // [3,2,2,1]
    // 
    /**
     * iel 2
     * jel 1
     */
    for (let i = 0; i < priorities.length; i++) {
        const iEl = priorities[i];

        for (let j = i + 1; j < priorities.length; j++) {
            const jEl = priorities[j];
            
            
            if (iEl <= jEl) {
                if (location <= i || location <= j) {
                    
                }
                priorities.splice(i, 0, priorities.splice(j, 1)[0])
            }

            


        }
        
    }

console.log(priorities)

})([2, 1, 3, 2], 2)













