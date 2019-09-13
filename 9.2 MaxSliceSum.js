function solution(A) {
    let maxEnding = 0, maxSlice = 0, max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < A.length; i++) {
        max = Math.max(max, A[i]);
        maxSlice = Math.max(0, maxSlice + A[i]);
        maxEnding = Math.max(maxEnding, maxSlice);
    }

    if(max < 0){
        return max;
    }

    return maxEnding;
}

solution([3, 2, -6, 4, 0]);
// expected 5

// https://app.codility.com/demo/results/training36GHCK-YFB/