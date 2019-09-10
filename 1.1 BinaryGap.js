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