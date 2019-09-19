function solution(N) {
    let bin = N.toString(2);
    let max = 0, count = 0;

    bin = bin.split("");

    bin.forEach(e => {
        if (e == 1) {
            max = Math.max(max, count);
            count = 0;
        }
        else {
            count++;
        }

    });
    return max;
}

solution(529);
// expected 5

// https://app.codility.com/demo/results/training6S8GVR-35V/