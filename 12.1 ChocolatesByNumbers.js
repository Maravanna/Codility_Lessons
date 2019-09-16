function solution(N, M) {
    let divisor = gcd(N, M);
    return N/divisor;
}

function gcd(a, b) {
    if (a % b == 0) {
        return b;
    }
    else {
        return gcd(b, a % b)
    }
}

solution(10, 4);
// expected 5