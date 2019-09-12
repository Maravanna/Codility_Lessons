function solution(A) {
    A.sort((a, b) => { return a - b});
    
    let l = A.length;
    return Math.max(A[l-1] * A[l-2] * A[l-3], A[0] * A[1] * A[l-1]);
}

solution([-3, 1, 2, -2, 5, 6]);
// expected 60

// https://app.codility.com/demo/results/trainingESHJN9-ACJ/