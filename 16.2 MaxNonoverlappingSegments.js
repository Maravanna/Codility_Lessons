function solution(A, B) {
    let end = -1, result = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > end) {
            end = B[i];
            result++;
        }
    }
    return result;
}

solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])
// expected 3

// https://app.codility.com/demo/results/trainingSKB4W3-5N3/