function scope(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const scope1 = scope();
console.log(scope1());
console.log(scope1());
console.log(scope1());
console.log(scope1());

const scope2 = scope();
console.log(scope2());
console.log(scope2());

console.log(scope1());