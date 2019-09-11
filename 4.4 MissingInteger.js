function solution(A) {
    let set = new Set(A);
    for (let i = 1; i <= A.length + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}

solution([1, 3, 6, 4, 1, 2]);
solution([1, 2, 3]);
solution([-1, -3]);

// https://app.codility.com/demo/results/trainingQFE7K2-TBN/