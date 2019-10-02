function solution(A) {
    let maxBoard = new Array(A.length).fill(Number.NEGATIVE_INFINITY);
    maxBoard[0] = A[0];
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j <= i + 6 && j < A.length; j++) {
            maxBoard[j] = Math.max(maxBoard[i] + A[j], maxBoard[j]);
        }
    }
    return maxBoard[A.length - 1]
}

solution([1, -2, 0, 9, -1, -2]);
// expected 8

// https://app.codility.com/demo/results/trainingT3HZ6H-NTH/