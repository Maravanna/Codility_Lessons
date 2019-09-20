function solution(M, A) {
    let set = new Set();
    let n = 0;
    for (let i = 0; i < A.length; i++) {
        set.add(A[i]);
        if(set.size != n){
            n = set.size
        }
    }
}
