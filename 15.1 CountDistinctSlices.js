function solution(M, A) {
    let result = 0, front = 0, back = 0;
    let pos = new Array(M + 1).fill(false);
    while (front < A.length) {
        while (front < A.length && !pos[A[front]]) {
            pos[A[front]] = true;
            result += front + 1 - back;

            if(result >= 1000000000){
                return 1000000000;
            }
            front++;
        }

        while(front < A.length && A[back] != A[front]){
            pos[A[back]] = false;
            back++;
        }
        pos[A[front]] = false;
        back++;
    }

    return result;
}

solution(3, [1, 2, 3]);
// expected 6

console.log(solution(7, [1, 2, 3, 4, 5, 3, 6, 7]));
// expected 27

solution(6, [3, 4, 5, 5, 2]);
// expected 9

// https://app.codility.com/demo/results/trainingEKRY63-HS5/