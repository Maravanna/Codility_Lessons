function solution(H) {
    let stack = [H[0]];
    let blocks = 0;
    for (let i = 1; i < H.length; i++) {
        while (stack.length > 0) {
            if (H[i] > stack[stack.length - 1]) {
                stack.push(H[i]);
                break;
            }
            else if (H[i] < stack[stack.length - 1]) {
                if(stack.length == 1){
                    stack[0] = H[i]
                }
                else{
                    stack.pop();
                }
                blocks++;
            }
            else{
                break;
            }
        }
    }
    
    blocks += stack.length;
    return blocks;
}

solution([8, 8, 5, 7, 9, 8, 7, 4, 8]);
// expected 7

solution([2, 3, 2, 1]);
// expected 3

// https://app.codility.com/demo/results/trainingTGZNAU-AG9/