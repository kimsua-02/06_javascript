// in 연산자
// 프롵ㅍ티 존재 여부 확인
// for 문과 함계 객체 냐ㅐ부 키 순회

let student = {
    name : "유관순",
    age : 16,
    test : undefined
}
console.log("name" in student);
console.log("age" in student);
console.log("test" in student);
console.log("height" in student);

// for in 반복문
for(let key in student){
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}