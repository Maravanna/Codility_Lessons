function solution(A) {
    let min = Number.MAX_SAFE_INTEGER, left = 0, right = A.length - 1;
    A.sort((a, b) => { return a - b });

    for (let i = 0; i < A.length; i++) {
        min = Math.min(Math.abs(A[i]), min);
    }

    min *= 2;

    let aux;
    while (left != right) {
        aux = A[left] + A[right];
        if (aux < 0) {
            left++;
        }
        else if (aux > 0) {
            right--;
        }
        else {
            return 0;
        }

        min = Math.min(min, Math.abs(aux))

        if (A[left] > 0 || A[right] < 0) {
            break;
        }
    }

    return min;
}

solution([1, 4, -3]);
// expected 1

solution([-8, 4, 5, -10, 3])
// expected 3

// https://app.codility.com/demo/results/trainingDUCJG4-JRS/