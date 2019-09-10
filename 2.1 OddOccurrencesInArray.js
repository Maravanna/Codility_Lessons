function solution(A) {
    let count = 0;

    A.sort((a, b) => { return a - b; });

    for (let i = 0; i < A.length -1; i += 2) {
        if(A[i] != A[i+1]){
            return A[i]
        }
    }

    return A[A.length-1];
}

solution([9, 3, 9, 3, 9, 7, 9]);
