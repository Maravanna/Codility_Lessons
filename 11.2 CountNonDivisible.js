function solution(A) {
    let l = A.length;
    let sorted = A.map(x => x).sort((a, b) => { return a - b });
    let max = sorted[l - 1];

    let div = new Array(max + 1).fill(false);
    
    for (let i = 0; i < l; i++) {
        if (!div[A[i]]) {
            div[A[i]] = 1;
        }
        else {
            div[A[i]]++;
        }
    }
    
    for (let i = 0; i < l; i++) {
        for(let k = 2; A[i] * k <= max; k++){
            if(div[A[i] * k]){
                div[A[i] * k]++;
            }
        }
    }

    let result = [];
    for (let i = 0; i < l; i++) {
        result[i] = A.length - div[A[i]];
    }

    return result;
}

solution([3, 1, 2, 3, 6]);
// expected [2, 4, 3, 2, 0]

// https://app.codility.com/demo/results/trainingH23DD8-2SX/