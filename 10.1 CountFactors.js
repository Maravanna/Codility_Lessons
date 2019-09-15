function solution(N) {
    let result = 0;
    let i = 0;
    while (i * i < N) {
        if (N % i == 0) {
            result += 2;
        }
        i++;
    }
    if (i * i == N) { 
        result++;
    }
    return result;
}

solution(24);
// expected 8

// https://app.codility.com/demo/results/training73Q7KP-ZRU/