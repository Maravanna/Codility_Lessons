function solution(A) {
    let candidate, count = 0;
    for (let i = 0; i < A.length; i++) {
        if (count == 0) {
            candidate = A[i];
            count++;
        }
        else if (A[i] == candidate) {
            count++;
        }
        else{
            count--;
        }
    }

    if(count == 0){
        return -1
    }

    count = 0;
    let position;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == candidate) {
            position = i;
            count++;
        }
    }

    if (count > A.length / 2) {
        return position;
    }

    return -1;
}

// solution([3, 4, 3, 2, 3, -1, 3, 3]);
// expected 0, 2, 4, 6 or 7

// solution([0, 0, 1, 1, 1]);

// solution([1, 2, 1]);

// https://app.codility.com/demo/results/training3RNXF5-MDX/