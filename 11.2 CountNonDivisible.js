function solution(A) {
    let B = A.map(x => x);
    B.sort((a, b) => { return a - b });
    let max = B[B.length - 1];
    let vet = new Array(max + 1).fill(false);
    for(let i = 0; i < A.length; i++){
    
    }
}

solution([3, 1, 2, 3, 6]);
// expected [2, 4, 3, 2, 0]