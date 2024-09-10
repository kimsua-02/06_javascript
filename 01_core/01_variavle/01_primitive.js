/* 숫자 타입
    자바의 경우 정수와 실수를 구분해 다야한 숫자 타입으 제공한다.
    하지만 자바스크립트 경우 하나의 타입만 존재한다.
    자료형의; 크기가 동적으로 달라진다.
*/

let integer = 10;
let double = 5.5;
let negative = -10;

integer = "홍길동";

console.log(integer);

// 숫자 타입은 추가적으로 세 가지 특별한 도 표할 수 있다.
/* 
Infinity = 양의 무한대
-Infinity = 음의 무한대
NaN =산술 연산 불가능함..
*/

console.log(10/0);
console.log(10/-0);
console.log(1*"문자열");

// -------------------------------------------

/* 
문자열 타입
문자열 타입은 텍스트를 나타내는데 사용한다.
    작은 따옴표, 쿤 따옴표, 빽틱으로 텍스트를 감싼다.
    자바는 문자열을 객체로 표현하지만 자바스트립트는 원시 타입이다.
*/

let String;
String = 'javascript';
String = "javascript";
String = 'javascript';

let string = '작은 따옴표를 감싼 문자열 내의 "큰 따옴표" 는 문자열로 인식';
String = "큰 따옴표를 감싼 문자열 내의 '작은 따옴표' 는 문자열로 인식";
console.log(String);
console.log(string);
// 스크립트는 자바와 달리 큰 따옴표 작은 따옴표 상관없이 쓸 수 있다.
//   (큰 따옴표 안에 작은 따옴표, 작은 따옴표 안에 작은 따옴표 모두 사용 가능하다. 문자열로 인식함.)

// 템플릿 리터럴
// ES6 부터 도입된 멀티라인 문자열

let str = "안녕하세요 \n 김수아입니다.";
 
let multi = '안뇽하세요 김수아입니다.';

console.log(multi);

let firstName = "김";
let lastName = "수아";

console.log("안녕하세요 " + firstName + lastName + "입니다");
console.log(`안녕하세요 ${firstName}${lastName} 입니다.`);