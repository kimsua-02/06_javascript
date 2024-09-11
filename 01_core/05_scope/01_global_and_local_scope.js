// 전역 스코프와 지역 스코프
/* 
    전역은 코드의 가장 바깥 영역을 말하며 전역은 저전역 스코프를 만든다.
    저녁에 변수를 선언하면 전역 소코프를 갖는 전역 변수가 되며
    전역 변수는 어디서든지 참조할 수 있다.
    지역이랑 함수 몸ㅊ ㅔ 내부를 말하며 지역은 지역 스코프를 만든다.
    지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 전역 소크포와 하위에서 유효하다.
*/

// 전역 필드
let x = "global x";
let y = "global y";

function outer(){
    let z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        let x = "inner's local x"; //  변수의 은닉화(내부에서만 덮어씌움. 외부에서부터 가림.)
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}
outer();

// 자바, C 등 대부분의 프로그래밍 언어는
// 함수 몸체 뿐만 아니라 모든 코드 블록 {if, for, while, try 등}
// 이 지역 스코프를 만드는 블록 레벨 스코프를 가진다.
// 하지만  var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을
// 지역 스코프로 인정하는 람수 레벨 스코프를 가진다.
// ES6 에 도입된 let 키워드는 블록 레벨 스코프를 지원한다.

var i = 0;
for(let i=0; i<10; i++){}
console.log(i);