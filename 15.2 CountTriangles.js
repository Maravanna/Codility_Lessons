function solution(A) {
    let result = 0, q, r;
    A.sort((a, b) => { return a - b });
    for (let p = 0; p < A.length - 2; p++) {
        q = p + 1;
        r = p + 2;

        while (q < A.length - 1) {
            if (r < A.length && A[p] + A[q] > A[r]) {
                r++;
            }
            else {
                result += r - q - 1;
                q++;
            }
        }
    }
    return result;
}

solution([10, 2, 5, 1, 8, 12]);
// expected 4

// https://app.codility.com/demo/results/trainingBF9TVD-PHF/