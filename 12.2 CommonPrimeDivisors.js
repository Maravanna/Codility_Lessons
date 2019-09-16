function solution(A, B) {
    for(let i = 0; i < A.length; i++);{
        let big = Math.max(A, B);
        let small = Math.min(A, B);
        let div = gcd(big, small);
        let primes = primesList(big);    
    }
    
    console.log(primes);
    return primes;
}

function primesList(N) {
    let sieve = new Array(N + 1).fill(true);
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
    for(i = 0; i < sieve.length; i++){
        if(sieve[i]){
            primes.push(i);
        }
    }
    
    return primes;
}

function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    else {
        return gcd(b, a % b);
    }
}