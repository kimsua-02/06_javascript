// 자바 스크립트 함수는 포로퍼티 값으로 ㅅ ㅏ용항 ㅜㅅ 잇다.

let dog = {
    name : "뽀삐",
    // eat : function(food){
    //     console.log(`${this.name}는 ${food}를 맛나게 먹어요!`)
    // }
    eat : (name,food) =>{
        console.log(`${dog.name} 는 ${food} 를 맛나게 먹어욤! 멍!`)
    }
};
dog.eat("고구마");