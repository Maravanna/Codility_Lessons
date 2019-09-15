function solution(A) {
    if (A.length < 3) {
        return 0;
    }

    let peaks = [];
    let countPeaks = 0;
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
            countPeaks++;
        }
    }

    if (peaks.length <= 2) {
        return peaks.length;
    }

    let maxFlags = Math.trunc(Math.sqrt(peaks[peaks.length - 1] - peaks[0]) + 1)

    let placed, lastPeak;
    for (let flags = maxFlags; flags > 2; flags--) {
        placed = 1;
        lastPeak = peaks[0];
        for (let i = 1; i < peaks.length; i++) {
            if (peaks[i] >= lastPeak + flags) {
                placed++;
                lastPeak = peaks[i];
            }
        }
        if (placed >= flags) {
            return flags;
        }
    }
}

console.log(
    solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])
);
// expected 3

// https://app.codility.com/demo/results/trainingZXFVJT-6T5/