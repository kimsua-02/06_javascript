// 포로퍼티 값 변경, 추가 ㅡ,ㅅ 삭제

let dog = {
    name : "김초코"    
}

dog.name = "김딸기";
// dog['name'] = "김딸기";
console.log(dog);

// 프로펄티 동적 추가
dog.age = 6;
console.log(dog);
// dog['age'] = 6;

// 포로터피 삭제
// delete 연산자는 객체의 프렃터ㅏ티를 ㅅ ㅏㄱㅈㅔ한다.
// 존재하지 않는 ㅠ포로포티ㅏ를 삭제하면 에러 없이 무시된다.
delete dog.age;
console.log(dog);
delete dog.age;
console.log(dog);

