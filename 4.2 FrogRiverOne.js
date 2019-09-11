function solution(X, A) {
    let set = new Set();
    for(let i = 0; i < A.length; i++){
        set.add(A[i])
        if(set.size == X){
            return i;
        }
    }
    return -1;
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);

//  https://app.codility.com/demo/results/trainingD68EQC-FMV/ 