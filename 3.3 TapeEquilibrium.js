function solution(A) {
    let sum = [];
    sum.push(A[0]);
    for (let i = 1; i < A.length; i++) {
        sum[i] = sum[i - 1] + A[i];
    }

    let min = Number.MAX_SAFE_INTEGER;
    let dif, sideA, sideB;
    for (let i = 0; i < A.length-1; i++) {
        sideA = sum[i]
        sideB = sum[A.length - 1] - sum[i];
        min = Math.min(min, Math.abs(sideA - sideB));
    }
    return min;
}

solution([3, 1, 2, 4, 3]);
// expected 1

// https://app.codility.com/demo/results/trainingW959FK-GDN/