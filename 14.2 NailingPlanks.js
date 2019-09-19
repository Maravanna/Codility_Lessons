function solution(A, B, C) {
    let min = 0;
    let max = C.length;
    let mid = Math.trunc((min + max) / 2);
    let result = 30001;

    while (min <= max) {
        if (check(A, B, C, mid)) {
            result = Math.min(result, mid)
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }
        mid = Math.trunc((min + max) / 2);
    }

    return (result == 30001) ? -1 : result;
}

function check(A, B, C, mid) {
    let pos = new Array(2 * C.length + 1).fill(0);

    for (let i = 0; i < mid; i++) {
        pos[C[i]]++;
    }

    for (let i = 1; i < pos.length; i++) {
        pos[i] += pos[i - 1];
    }

    for (let i = 0; i < A.length; i++) {
        if(pos[B[i]] - pos[A[i] -1] <= 0){
            return false;
        }
    }
    return true;
}

solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]);
// expected 4

solution([1], [2], [2]);
// expected 1

// https://app.codility.com/demo/results/trainingTXCPYG-G4E/