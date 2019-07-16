// 개별 export
export let var1 = 1000;
export function add(a,b) {
    return a+b;
}

// 묶음 export
let var2 = 1000;
function add2(a,b) {
    return a+b;
}

export { var2, add2 };

// 단일 export 일 경우 default 키워드를 이용
let calc = {
    add(x,y) {
        return x+y;
    },
    multiply(x, y) {
        return x*y;
    }
}

export default calc;