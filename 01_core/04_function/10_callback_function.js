// callback 함수

/* 
    함수의 배개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 함.
    매개변수를 통해 함수의 외부에서 콜백 함수를 전달 받은 함수를 고차 함수 라고함.
    콜백 함수는 고차 함수에 전달 된다.
    즉, 고차 함수는 콜백 함수를 자신의 일부분에 합성한다.
*/

// 전달 받으은 값을 증ㄱ ㅓㅏ시켜주느 함수
function increase(value){
    return value+1;
}
// 전달 받은 값을 감소 시켜주느 함수
function decrease(value){
    return  value -1;
}

function apply(func, value){
    // 콜벡 함수는 고차함수에 의해 호출되며
    // 이때 고참함수는 필요에 따라 콜백함수에 인자를 전달할 수 있다.
    return func(value);
}
console.log(apply(increase,5));
console.log(apply(decrease,5));

// 콜백 함수가 고차 함수 내부에만 호출된다면,
// 콜백 함수를 익명 함수로 정의하면서 곧바로 전달할 수 있다.
console.log(apply(function(value){return value ** 2},5)); // ** 은 제곱을 의미하므로 5 * 5 는 25가 출력됨.


// 순수 함수와 비순수 함수

// 순수 함수 : 외부 상태에 의존하지도 않고 변경하지도 않는 함수
// 비순순 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수

var cnt = 0;
//  순수 함수는 최소 하나 이상의 인수를 전달 받으며 인수의 불변성을 유지한다.
function increase(n){
    return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
cnt = increase(cnt);
console.log(cnt);

// 비순수 함수
function decrease(){
    return --cnt; // 외부 상태에 의존하여 외부 상태 변경
}

decrease();
console.log(cnt);