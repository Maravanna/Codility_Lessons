function solution(A, B) {
    let stack = [];
    let alive = 0;
    for (let i = 0; i < A.length; i++) {
        if (B[i] == 1) {
            stack.push(A[i]);
        }
        else {
            while (stack.length > 0) {
                if (A[i] > stack[stack.length - 1]) {
                    stack.pop();
                }
                else{
                    break;
                }
            }
            if(stack.length == 0){
                alive++;
            }
        }
    }
    alive += stack.length;
    return alive;
}

solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]);
// expected 2

// https://app.codility.com/demo/results/trainingM8HQVK-GJ6/