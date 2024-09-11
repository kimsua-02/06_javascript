// 일반 함수와 다른 점
function Student(name,age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age} 세 입니다.`;
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
// new 연산자와 함께 호출하면 생성자 함수로 동작한다.
// 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

const student = Student("강감찬",35);
console.log(student);
console.log(age);
// new 연산자를 붙이지 않고 실행했기 때문에 undefined 가 출력됨.
// 생성자 함수는 일반 함수에 new 연산자만 붙인 것.

// ES6 에서는 new.target 을 지원한다.
// 생성자 함수가 new 없이 호출 되는 것을 방지하기 위해
function Dog(name, age){
    if(!new.target){
        return new Dog(name, age)
    }
    this.name = name;
    this.age = age;
}

// 대부분의 빌트인 생성자 함수(Object, String, Number ... )는
// new 연산자와 함께 호출 되었는지를 확인한 후 적절하게 반환한다.
const obj = Object();
console.log(obj);

