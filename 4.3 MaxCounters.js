function solution(N, A) {
    let counters = new Array(N).fill(0);
    let max = 0, newMax = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            counters[A[i] - 1]++;
            newMax = Math.max(newMax, counters[A[i] - 1])
        }
        else {
            if (newMax !== max) {
                max = newMax;
                counters.fill(max);
            }
        }
    }
    return counters;
}

solution(5, [3, 4, 4, 6, 1, 4, 4]);

// https://app.codility.com/demo/results/trainingSC7JU8-A2G/