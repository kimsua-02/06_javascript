// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy Falsy 로 구분한다.
// 암묵적 타입 변환이 일어난다.

let test1;
console.log(!!test1); // Truthy 인데 느낌표를 하나 붙이면 true 로 바뀐다. 느낌표를 하나 더 붙이면 true의 반대 출력되므로 false 가 출력된다.

// 객체 리터럴 ..?
let test = {
    a : null,
    b : 0,
    fun(){
        console.log("testtest");
    }
};

if(test?.b){
    console.log("true");
}else{
    console.log("false");
};

test.b ? console.log(true) : console.log(false);
// test를 null로 초기화하고 실행시키면 값이 없는 상태인 것에 접근하게 되어 에러가 난다.(null은 값이 없다는 뜻.)
// 그러나 물음표를 붙이고 실행시키면 test 에 값이 있는 지 없는지 확인 후 접근하기 때문에 false 가 출력도ㅘㅣㅁ.