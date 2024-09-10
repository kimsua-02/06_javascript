/* 
 ojbect 객체
 자바스크립트는 객체 기반 프로그랴밍 언어로 원시 값을 제횡한 나머지 값(함수,뱌열, 등)은 모두 객체ㄹ이다ㅣ.
 객체는 0개 이상의 ㅠㅡ로퍼티로 구성된 집합이며 ~는 key와 value로 구성된다.
 자바스크립트에서 사용할 수 았는 모든 값은 프로포트 값이 될 수 잇다.
 프로퍼티 갑이 ㅎ하ㅁ수 이 경우 메소드라고 부른다.

 객체 성생 방법
 자바스크립트는 퓨ㅡ로타ㅡ ㄹㄴㅇ라 ㅍ타입 기밥 객체지향 언어로 클래스 기반 언어와느 달리 댜앙한 객체 생ㅅ어 방법을 지원한다.
*/

// 객체 리터럴
let student = {
    name : "유관순",
    age : 16,
    getInfo : function(){
        return `&{this.name}은 ${this.age}세 입니다.`;
    }
};

console.log(typeof student);
console.log(student);

// object 생성자 함수
let student2 = new Object();
student2.name = "홍길동";
student2.age = 20;
student2.greet = function(){
    console.log(`${this.name}은 ${this.age} 세 입니다.`);
};

student2.greet();

let student3 = {};
console.log(typeof student3);
console.log(student3);


class Student4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const studentA = new Student4("이순신",30);
console.log(studentA);

