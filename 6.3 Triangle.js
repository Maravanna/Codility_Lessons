function solution(A) {
    A.sort((a, b) => { return a - b });

    for (let i = 0; i < A.length; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1;
        }
    }

    return 0;
}

solution([10, 2, 5, 1, 8, 20]);
// expected 1

solution([10, 50, 5, 1]);
// expected 0

// https://app.codility.com/demo/results/trainingEPBQDX-8GZ/