// let
// var 키워드의 단점을 보완하고자 ES6에서는 새로운 변수 선오ㅓㄴ 키워드인 let우ㅡㄹ 도입햇다....!

// 1. 변수 중볷 ㅓㄴ언 금지ㅏ
let msg = "안녕하세요.";
// let 이나 const ㄹ ㅗ 선언 된 변수느느 같은 스코프내에서 중복을 허용하지 않는다.

// 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 브럭
// (함수, if, for, while, try 등)을 지역 스코프로 인정한다.
let i = 0;
for(let i= 0; i < 10; i++){
    console.log(`지역변수 i : ${i}`);
}
console.log(`전역변수 i : ${i}`);

// 3. 변수 호이스팅
// let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않은 것 처럼 보인다.
// 하짐나 발생하지 않은 거서거서은 아니다.
// console.log(x);  // 오류발생함.
let x;
let y;
if(true) {
    console.log(y);
    let y = 2;
}