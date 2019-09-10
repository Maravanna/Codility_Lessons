function solution(A) {
    if(A.length === 0){
        return 1;
    }

    A.sort((a, b) => { return a - b })
    for (let i = 1; i <= A.length; i++) {
        if (A[i - 1] != i) {
            return i;
        }
    }
    return A[A.length -1] + 1;
}

solution([2, 3, 1, 5]);