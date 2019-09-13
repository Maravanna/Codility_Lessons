function solution(S) {
    S = [...S];
    let pile = [];
    return S.forEach(e => {
        debugger;
        switch (e) {
            case "(": pile.push("("); break;
            case "{": pile.push("{"); break;
            case "[": pile.push("["); break;
            case ")":
                if (pile[pile.length - 1] == "(") {
                    pile.pop();
                }
                else {
                    return 0;
                }
                break;
            case "}": 
                if (pile[pile.length - 1] == "{") {
                    pile.pop();
                }
                else {
                    return 0;
                }
                break;
            case "]": 
                if (pile[pile.length - 1] == "]") {
                    pile.pop();
                }
                else {
                    return 0;
                }
                break;
        }
    });

    return 1;
}

// solution('{[()()]}');
// expected 1

solution('([)()]');
// expected 0