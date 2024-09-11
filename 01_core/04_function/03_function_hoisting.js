// 함수 호이스팅

console.log(hello);
// console.log(hi);

console.log(hello("홍길동"));
// console.log(hi("홍길동"));

function hello(name){
    return `${name}님 안녕하세요.`
}
let hi = function(name){
    return `${name}님 안녕하세요.`
}
// 예전에는 변수를 var로 쓰였다.
/* 
함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 실행된다.
따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다,
함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 
자바스크립트 고유의 특징을 함수 호이스팅이라고 한다.
*/

test();

function test(){
    console.log("이거랑");
}

function test(){
    console.log("이거 중에 어떤 게 실행돠냐?")
}

console.log("-------------------------------------------------");

// var를 ㅅ ㅏ용할 때 함수 표현식의 문제점

console.log(funTest);

var funTest = () => {
    console.log("1");
}

funTest();
var funTest = () => {
    console.log('2');
}

funTest();

let funTest = () => {
    console.log("2");
}
funTest();   