function solution(A) {
    let dif = [];
    for(let i = 0; i < A.length-1; i++){
        dif.push(A[i+1] - A[i]);
    }

    let maxEnding = 0, maxSlice = 0;
    for(let i = 0; i < dif.length; i++){
        maxSlice = Math.max(0, maxSlice + dif[i]);
        maxEnding = Math.max(maxEnding, maxSlice);
    }

    return maxEnding;
}

solution([23171, 21011, 21123, 21366, 21013, 21367]);
// expected 356

// https://app.codility.com/demo/results/trainingZTD4DX-5SD/