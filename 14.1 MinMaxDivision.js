function solution(K, M, A) {
    let max = 0;
    let min = 0;
    for (let i = 0; i < A.length; i++) {
        max += A[i];
        min = Math.max(min, A[i]);
    }

    let mid = Math.trunc((max + min) / 2);
    while (min < max) {
        if (check(mid, K, A)) {
            max = mid;
        }
        else {
            min = mid + 1;
        }
        mid = Math.trunc((max + min) / 2);
    }
    return mid;
}

function check(mid, K, A) {
    let count = 0, blocks = 1;
    for (let i = 0; i < A.length; i++) {
        count += A[i];
        if (count > mid) {
            count = A[i];
            blocks++;
            if (blocks > K) {
                return false;
            }
        }
    }
    return true;
}

solution(3, 5, [2, 1, 5, 1, 2, 2, 2]);
// expected 6

// https://app.codility.com/demo/results/training6AE4SH-FPB/