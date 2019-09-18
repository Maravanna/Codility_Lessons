function solution(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let big = Math.max(A[i], B[i]);
        let small = Math.min(A[i], B[i]);
        let div = gcd(big, small);

        if (big === small || (check(big, div) && check(small, div))) {
            count++;
        }
    }

    return count;
}

function check(a, b) {
    gcdA = gcd(a, b);
    if (gcdA == 1) {
        return false;
    }
    else if (gcdA == a) {
        return true;
    }
    else {
        a /= gcdA;
        gcdA = gcd(a, gcdA);
        return check(Math.max(a, gcdA), Math.min(a, gcdA));
    }
}

function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    else {
        return gcd(b, a % b);
    }
}

solution([15, 10, 9], [75, 30, 5]);
// expected 1

// https://app.codility.com/demo/results/training4Q9JPJ-3JU/