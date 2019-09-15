function solution(N) {
    let i = 1, aux;
    let perimeter = Number.MAX_SAFE_INTEGER;
    while (i * i <= N) {
        if (N % i == 0) {
            aux = N / i;
            perimeter = Math.min(perimeter, 2 * (aux + i));
        }
        i++;
    }
    return perimeter;
}

solution(30);
// expected 22

// https://app.codility.com/demo/results/training3MEA5F-6V7/

