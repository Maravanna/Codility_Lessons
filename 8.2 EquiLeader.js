function solution(A) {
    let candidate, count = 0;
    for (let i = 0; i < A.length; i++) {
        if (count == 0) {
            candidate = A[i];
            count++
        }
        else if (A[i] == candidate) {
            count++;
        }
        else {
            count--;
        }
    }

    if (count == 0) {
        return 0;
    }

    let sum = [];
    count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == candidate) {
            count++;
        }
        sum[i] = count;
    }

    if (count < A.length / 2) {
        return 0;
    }

    count = 0;
    for (let i = 1; i < A.length; i++) {
        if (sum[i - 1] > i / 2 && sum[sum.length - 1] - sum[i - 1] > (sum.length - i) / 2) {
            count++;
        }
    }
    return count;
}

solution([4, 3, 4, 4, 4, 2]);
// expected 2

// https://app.codility.com/demo/results/training9NDACN-XPK/