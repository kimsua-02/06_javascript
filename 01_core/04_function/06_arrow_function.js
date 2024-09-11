// ES6에서 도입된 화사살표 함수는 function 키워드 대신
// 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다..
// 화살표 함수느 익명 함수로 정의한다. 본문이 한 줄인 ㅅ함수를 작성할 때 유용하다..

let message;

// 기존 function
message = function(){
    return "hello world";
}
console.log(message());

// function 키워드 생략 가능
message = () => {
    return "Array Function";
}
console.log(message());

// 명령문이 하나만 있을 경우 중괄호 생략 가능
message = () => "Array Function are Simple!";
// 이때 함수 몸체 내부의 문이 값으로 평가될 수 있으면 암묵적으로 변환
console.log(message());

// 매개변수가 있는 경우
message = (val1, val2) => "Arrow" + val1 + val2;
console.log(message("Function", "!"));

// 매개변수 하나면 소괄호 생략 가능
message = val => "Arrow" + val;
console.log(message("Function!!"));

// 구조 분해 할당
let obj = {
    a : "test",
    b : "value"
} // 객체 생성

const test = ({a,b}) => `hi ${a} + ${b}`;
console.log(test(obj));