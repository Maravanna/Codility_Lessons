function solution(A, K) {
    for (let i = 0; i < K; i++) {
        A.unshift(A[A.length - 1]);
        A.pop();
    }
    return A;
}

solution([3, 8, 9, 7, 6], 3);
// expected [9, 7, 6, 3, 8]

solution([0, 0, 0], 1);
// expected [0, 0, 0]

solution([1, 2, 3, 4], 4);
// expected [1, 2, 3, 4]

// https://app.codility.com/demo/results/trainingKQAXW7-MXH/