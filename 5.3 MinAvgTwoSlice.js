function solution(A) {
    let min = Number.MAX_VALUE, start = 0, aux = 0;
    for(let i = 0; i < A.length - 1; i++){
        aux = (A[i] + A[i + 1])/2;
        if(aux < min){
            min = aux;
            start = i;
        }

        aux = (A[i] + A[i + 1] + A[i + 2])/3;
        if(aux < min){
            min = aux;
            start = i;
        }
    }
    
    return start;
}

// solution([4, 2, 2, 5, 1, 5, 8]);

// https://app.codility.com/demo/results/trainingY2JAGD-KYR/