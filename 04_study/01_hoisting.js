/* 
hoisting?
  모든 변수 선언문이 코드의 최상단으로 이동하는 것 처럼 느껴지는 현상
*/

// 선언 후 값을 할당하지 않았을 때 기본으로 들어가는 값이 undefined이다.

var name;
console.log(name);
name = "김수아";
console.log(name);

// let, const 도 호이스팅이 가능하다.

console.log(kimsua);
let kimsua = "김수아";
// 에러가 출력됨. | kimsua 라는 변수를 초기화 하기 전에 접근할 수 없음.

console.log(kimsua2);
const kimsua2 = "김수아2";

