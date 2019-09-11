function solution(S, P, Q) {
    S = S.split("");
    let sumA = [];
    let sumC = [];
    let sumG = [];

    sumA.push(0);
    sumC.push(0);
    sumG.push(0);

    let A, C, G;
    A = C = G = 0;
    S.forEach((e) => {
        switch (e) {
            case "A": A++; break;
            case "C": C++; break;
            case "G": G++; break;
        }
        sumA.push(A);
        sumC.push(C);
        sumG.push(G);
    });

    let result = [];
    for (let i = 0; i < P.length; i++) {
        debugger;
        if (sumA[Q[i]+1] - sumA[P[i]] > 0) {
            result.push(1);
        }
        else if (sumC[Q[i]+1] - sumC[P[i]] > 0) {
            result.push(2);
        }
        else if (sumG[Q[i]+1] - sumG[P[i]] > 0) {
            result.push(3);
        }
        else {
            result.push(4);
        }
    }

    return result;
}

solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);
// expected [2, 4, 1]

solution('A', [0], [0]);
// expected [1]

// https://app.codility.com/demo/results/trainingN9YJPF-PBK/