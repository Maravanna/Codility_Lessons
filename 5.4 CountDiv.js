function solution(A, B, K) {
    let end = Math.trunc(B / K);
    let beggin = Math.trunc((A > 0 ? (A - 1) : 0) / K)
    let result = end - beggin;
    if (A == 0) {
        result++;
    }
    return result;
}

solution(6, 11, 2);
// expected 3

solution(0, 0, 11);
// expected 1

// https://app.codility.com/demo/results/training4JVVHD-WF6/