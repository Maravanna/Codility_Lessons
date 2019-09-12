function solution(A) {
    debugger;
    let count = 0;
    let endCircle = new Array(A.length).fill(0);
    let ini;
    for (let i = 0; i < A.length; i++) {
        if (i + A[i] < A.length) {
            count += A[i];
        }
        else {
            count += A.length - i;
        }

        if (i + A[i] < A.length) {
            endCircle[i + A[i]]++;
        }

        ini = (i - A[i]) < 0 ? 0 : i - A[i];
        for(let x = ini; x < i; x++){
            count += endCircle[x];
        }

    }

    if (count > 10000000) {
        return -1;
    }

    return count;
}

solution([1, 5, 2, 1, 4, 0]);
// expected 11