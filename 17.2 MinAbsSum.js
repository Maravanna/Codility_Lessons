function solution(A) {
    let M = 0, S = 0;
    
    for (let i = 0; i < A.length; i++) {
        A[i] = Math.abs(A[i]);
        S += A[i];
        M = Math.max(M, A[i]);
    }

    let count = new Array(M + 1).fill(0);

    for (let i = 0; i < A.length; i++) {
        count[A[i]]++;
    }

    dp = new Array(S + 1).fill(-1);
    dp[0] = 0;
    debugger;
    let target = S / 2, result = Infinity;
    for (let a = 0; a <= M; a++) {
        if (count[a] > 0) {
            for (let j = 0; j <= S; j++) {
                if (dp[j] >= 0) {
                    dp[j] = count[a];
                }
                else if (j >= a && dp[j - a] > 0) {
                    dp[j] = dp[j - a] - 1;
                }

                if (dp[j] >= 0) {
                    if (j === target) {
                        return 0;
                    }
                    else {
                        result = Math.min(result, Math.abs(S - 2 * j))
                    }
                }
            }
        }
    }

    // let result = S;
    // for (let i = 0; i < Math.floor(S / 2) + 1; i++) {
    //     if (dp[i] >= 0) {
    //         result = Math.min(result, S - 2 * i)
    //     }
    // }
    return result;
}

solution([1, 5, 2, -2]);
// expected 0

// https://codility.com/media/train/solution-min-abs-sum.pdf