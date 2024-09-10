/* 
정적 타입 언어 (c, java, c++) 등
변수를 선언할 때 대데이터 타입을 사전에 선언해야 한다.
변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당 할 수 있다.
컴파일 시점에 타입 ㅐ체크를 수행하는 타입의 알관성ㅇ르 강제하며 런타임 에러를 줄인다.

동적 타입 언어
    자바스크립트 var, let, const 키워드를 사용해 변수를 선언할 뿐 데이터 타입을
    사전에 선언하지 않는다.
    즉, 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타이비 결정되며 재할당에 의해 변수의 타입이 언제든지 동적으로 변할 수 있기 때문이다.
    변수의 값이 언제든지 변경 될 수 있기 때문에 값을 확인하기 전에는 타입을 확신할 수 없다.
    개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입 변환이 되기도 한다.
    죽, 유연성을 높짐나 신뢰성은 떵러진다.
    이로 인해 변수르 사용하기 전 데이터 체크를 하기도 하는데 이는 번거롭고 코드의 양도 증가한다.
 */

let test;
console.log(typeof test);
// 출력 값 : undefined

test = 1;
console.log(typeof test);
// 출력 값 : number

test = "javascript";
console.log(typeof test);
// 출력 값 : string

