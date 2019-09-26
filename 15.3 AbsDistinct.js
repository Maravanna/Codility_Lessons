function solution(A) {
    let set = new Set(A.map(i => Math.abs(i)));
    return set.size;
}

solution([-5, -3, -1, 0, 3, 6]);
// expected 5

// https://app.codility.com/demo/results/training67M4EX-V2G/