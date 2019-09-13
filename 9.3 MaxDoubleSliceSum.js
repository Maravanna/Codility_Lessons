function solution(A) {
    let maxEnd = 0;
    let maxSlice = 0;
    for (let i = 1; i < A.length - 1; i++) {
        maxSlice = Math.max(0, maxSlice + A[i]);
        maxEnd = Math.max(maxEnd, maxSlice);
    }
}