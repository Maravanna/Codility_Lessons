function solution(A) {
    let count = 0, countEast = 0;
    for (let i = 0; i < A.length; i++) {
        if(A[i] == 0){
            countEast++;
        }
        else{
            count += countEast;
        }
        
        if (count > 1000000000) {
            return -1;
        }
    }
    return count;
}

solution([0, 1, 0, 1, 1]);
// expected 5


// https://app.codility.com/demo/results/training57KT4K-HDQ/