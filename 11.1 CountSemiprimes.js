function solution(N, P, Q) {
    sieve = new Array(N).fill(true);
    sieve[0] = sieve[1] = false;
    let i = 2, k;
    while (i * i <= N) {
        if (sieve[i]) {
            k = i * i;
            while (k <= N) {
                sieve[k] = false;
                k += i;
            }
        }
        i++;
    }

    let primes = [];
    for (i = 0; i < sieve.length; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }

    let semiprimes = [];
    for (i = 0; i < primes.length; i++) {
        k = i;
        while (primes[k] * primes[i] <= N) {
            semiprimes.push(primes[k] * primes[i]);
            k++;
        }
    }
    semiprimes.sort((a, b) => { return a - b })

    let sum = new Array(N + 1).fill(0)
    for (i = 0; i < semiprimes.length; i++) {
        sum[semiprimes[i]] = i + 1;
    }
    for (i = 1; i < sum.length; i++) {
        if (sum[i] > sum[i + 1]) {
            sum[i + 1] = sum[i];
        }
    }

    sum.unshift(0);

    result = [];
    for (i = 0; i < P.length; i++) {
        result.push(sum[Q[i] + 1] - sum[P[i]]);
    }

    return result;
}



solution(26, [1, 4, 16], [26, 10, 20]);
// expected [10, 4, 0]

// https://app.codility.com/demo/results/trainingZ5JNY7-2YR/