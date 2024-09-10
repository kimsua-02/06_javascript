// 숫자 타입으로 변환

console.log("=== 숫자 타입으로 변환 ===");

// 산술 연산자
console.log(10 - '5');    // 출력값 : 5
console.log(10 * '5');    // 출력값 : 50
console.log(10 / '5');    // 출력값 : 2
console.log(10 % "java"); // 출력값 : NaN

// 비교 연산자
console.log(10 > '5');   // true

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');               // 출력값 : 0
console.log(+'1');              // 출력값 : 1
console.log(+"javascript");     // 출력값 : NaN
console.log(+true);             // 출력값 : 1
console.log(+false);            // 출력값 : 0
console.log(+null);             // 출력값 : 0
console.log(+undefined);        // 출력값 : NaN
console.log(+[]);               // 출력값 : 0