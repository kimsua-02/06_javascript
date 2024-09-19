
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

console.log('==============================');

let num = 1;
// let 으로 num 변수에 1 을 할당함. (num 은 1이 됨) 

num ++;
console.log(num);   // 출력 값 : 2
// 1인 num이 ++과 만나 플러스 된다. 그러므로 2가 출력된 것이다.

num --;
// 현재 num 값이 2인 상태에서 --를 만남.
console.log(num);   // 출력 값 : 1
// --후 마이너스가 되어 다시 1이 됨.

console.log('==============================');

// ++ 이나 -- 위치가 어디에 있는지에 따라 값이 달라짐.
result = num ++;
console.log(result, num);
// num이 1인 상태에서 ++로 2가 된 후 값을 출력하기 때문에 result는 1, num은 2가 된다.


result = num --;
console.log(result, num);