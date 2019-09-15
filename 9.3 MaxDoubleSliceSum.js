function solution(A) {
    let sumLeft = A.map(x => 0);
    let sumRigth = A.map(x => 0);

    for (let x = 1, y = A.length - 2; x < A.length - 1; x++ , y--) {
        sumLeft[x] = Math.max(0, sumLeft[x - 1] + A[x]);
        sumRigth[y] = Math.max(0, sumRigth[y + 1] + A[y]);
    }

    let max = sumLeft[0] + sumRigth[2];
    for (let i = 1; i < A.length - 1; i++) {
        max = Math.max(max, sumLeft[i - 1] + sumRigth[i + 1])
    }

    return max;
}

solution([3, 2, 6, -1, 4, 5, -1, 2]);
// expected 17

// https://app.codility.com/demo/results/trainingDMB6VD-HUD/