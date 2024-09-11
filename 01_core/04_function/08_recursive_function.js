function factorial(n){
    // n이 1 이하일 때 재귀를 멈춘다.
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n-1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));