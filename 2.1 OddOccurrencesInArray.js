function solution(A) {
    let count = 0;

    A.forEach(e => {
        if(e % 2 !== 0){
            count++;
        }
    });

    return count;
}

solution([9, 3, 9, 3, 9, 7, 9]);
