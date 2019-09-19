function solution(A) {
    if (A.length < 3) {
        return 1;
    }

    A.unshift(1);
    let fibo = [1, 2];
    for (let i = 2; fibo[i - 1] < A.length; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    debugger;
    let B = new Array(A.length).fill(0);
    let result = 100001;
    for (let i = 0; i < B.length; i++) {
        if (B[i] == 0 && i != 0) {
            continue;
        }

        for (let k = 0; k < fibo.length; k++) {
            let d = i + fibo[k];
            if (d > A.length) {
                break;
            }
            else if (d == A.length) {
                result = Math.min(result, B[i] + 1)
                break;
            }
            if (A[d]) {
                if (B[d] == 0) {
                    B[d] = B[i] + 1;
                }
                else {
                    B[d] = Math.min(B[d], B[i] + 1);
                }
            }
        }
    }
    return (result == 100001) ? -1 : result;
}

solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]);
// expected 3

// https://app.codility.com/demo/results/trainingKCCPUS-NAJ/