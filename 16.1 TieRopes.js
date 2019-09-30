function solution(K, A) {
    let total = 0, aux = 0;
    for (let i = 0; i < A.length; i++) {
        aux += A[i];
        if(aux >= K){
            total++;
            aux = 0;
        }
    }
    return total;
}

solution(4, [1, 2, 3, 4, 1, 1, 3]);
// expected 3

// https://app.codility.com/demo/results/trainingC2YPK7-Y46/