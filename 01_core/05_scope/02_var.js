// ES5 까지는 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다.
// 이는 몇 가지 문제를 야기한다.

// 1. 변수 중복 선언 허용
var msg = "안녕하세요.";
console.log(msg); 

var msg = "조심히 들어가시옵소서";
console.log(msg);
// 초기화문이 없는 변수 선언문은 무시한다.
var msg;
console.log(msg);
// 중복 허용되고 ~...

// 2. 함수 레벨 스코프
var i = 0;
for(var i=0; i < 10; i++){}
console.log(i);

// 3. 변수 호이스팅 (호호잇- 스팅!)
console.log(test);
test = "반갑습니데이 ^~^ 오디서 오셨당가~?";
console.log(test);
var test;