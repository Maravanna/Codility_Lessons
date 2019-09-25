function solution(A) {
    let result = 0, q, r;
    A.sort((a, b) => { return a - b });
    debugger;
    for (let p = 0; p < A.length -2; p++) {
        q = p + 1;
        r = p + 2;

        while (r < A.length) {
            if (A[p] + A[q] > A[r]) {
                result++;
                r++;
            }
            else {
                q++;
                if (q == r) {
                    r = q + 1;
                }
            }
        }
    }
    return result;
}

solution([10, 2, 5, 1, 8, 12]);
// expected 4