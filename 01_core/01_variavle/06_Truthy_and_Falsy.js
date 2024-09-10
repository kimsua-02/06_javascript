// 자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy Falsy 로 구분한다.
// 암묵적 타입 변환이 일어난다.

let test1;
console.log(!!test1); // Truthy 인데 느낌표를 하나 붙이면 true 로 바뀐다. 느낌표를 하나 더 붙이면 true의 반대 출력되므로 false 가 출력된다.

// 객체 리터럴
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
// test를 null로 초기화하고 실행시키면 값이 없는 상태인 것에 접근하게 되어 에러가 난다.아무것도 없는 박스안에서 손만 휘적거리는 것과 같은 의미인 것이다.
// 그러나 물음표를 붙이고 실행시키면 test 에 값이 있는 지 없는지 확인 후 접근하기 때문에 false 가 출력된다.
// (좋은 게 있다고 해서 꺼내려고 손을 넣었지만 아무것도 없다면 상당히 기분이 나쁘다. 컴퓨터도 이런 식으로 값을 꺼내려 했지만 아무 값도 없으니 헛고생만 한 것이다.
// 그러니 error 로 기분이 나쁘다는 것을 표현하였다. (라고 수아 언어로 해석해봄.))