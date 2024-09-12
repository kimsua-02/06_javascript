
// Animal 과 Dog 클래스 구현

// Animal 은 name 과 speak 메소드를 가짐
// speak는 나는 [name] 출력

// Dog 는 Animal 을 상속받고
// bread 속성을 가짐. 개의 품종
// bark 메소드를 가지고 메소드는 "나는 [bread]" 를 출력


class Animal {
    constructor(name, speak){
        super(name);
        this.speak = speak;
    }
    speak(){
        console.log(`${this.name} 나는 ${this.speak} 이다멍!`);
    }
}
console.log(greet);