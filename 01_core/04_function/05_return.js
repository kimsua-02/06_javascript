// 반환문

function hello(name){
    // 반환문 이후의 문은 실행되지 무시된다..
    return `${name} 안녕하세요`;
    console.log(name)
}

// 반환문은 리턴 키워드 뒤에 오는 값을 반환한다.
console.log(hello("홍길동"));

// 반환 값을 명시적으로 저정하지 않으면 undefined 가 반환된다.
function fun(){
    console.log("함수가 호출되었습니다.");
    return;
    // 생략가능
}
console.log(fun());

// 함수는 매개변수로 전달하는 것도 가능하다.
const test = () => {
    console.log("test");
}
function result(a){
    a();
}
result(test);