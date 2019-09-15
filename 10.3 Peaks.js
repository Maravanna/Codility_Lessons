function solution(A) {
    let peaks = [];
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    if (peaks.length <= 1) {
        return peaks.length;
    }

    let result = 1;
    let block, slice;
    for (let i = 2; i <= A.length; i++) {
        if (A.length % i == 0) {
            slice = A.length / i;
            block = 0;
            for(let p = 0; p < peaks.length; p++){
                if(peaks[p] >= block * slice && peaks[p] < (block + 1) * slice){
                    block++;
                }
            }
            if(block >= i){
                result = i;
            }
        }
    }
    return result;
}

console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
// expected 3

console.log(solution([0, 1, 0, 0, 1, 0, 0, 1, 0]));
// expected 3

// https://app.codility.com/demo/results/trainingPZCE4Y-8V4/