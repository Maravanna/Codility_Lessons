function solution(A, K) {
    for (let i = 0; i < K; i++) {
        A.unshift(A[A.length - 1]);
        A.pop();
    }
    return A;
}

solution([3, 8, 9, 7, 6], 3);
solution([0, 0, 0], 1);
solution([1, 2, 3, 4], 4);