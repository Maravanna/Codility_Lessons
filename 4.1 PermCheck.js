function solution(A) {
    let B = new Set(A);
    if(B.size != A.length){
        return 0;
    }
    
    A.sort((a, b) => { return a - b; });
    
    if (A[A.length - 1] == A.length) {
        return 1;
    }
    else {
        return 0;
    }
}

solution([4, 1, 3, 2]);
solution([4, 1, 3]);