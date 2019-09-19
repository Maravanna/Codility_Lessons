function solution(A, B) {
    let maxA = 0, maxB = 0;
    for (let i = 0; i < A.length; i++) {
        maxA = Math.max(maxA, A[i]);
        maxB = Math.max(maxB, B[i]);
    }

    let fibo = [];
    fibo.push(1, 1);
    for (let i = 2; i <= maxA; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % Math.pow(2, maxB);
    }

    debugger;
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result.push(fibo[A[i]] % Math.pow(2, B[i]));
    }
    return result;
}

solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]);
// expected [5, 1, 8, 0, 1]

// https://app.codility.com/demo/results/training93DUA4-MTE/