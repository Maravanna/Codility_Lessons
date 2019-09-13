function solution(S) {
    S = [...S];
    let stack = [];
    let out = false;
    for (e of S) {
        switch (e) {
            case "(": stack.push("("); break;
            case "{": stack.push("{"); break;
            case "[": stack.push("["); break;
            case ")":
                if (stack[stack.length - 1] == "(") {
                    stack.pop();
                }
                else {
                    out = true;
                }
                break;
            case "}":
                if (stack[stack.length - 1] == "{") {
                    stack.pop();
                }
                else {
                    out = true;
                }
                break;
            case "]":
                if (stack[stack.length - 1] == "[") {
                    stack.pop();
                }
                else {
                    out = true;
                }
                break;
        }
        if (out) {
            return 0;
        }
    };
    if (stack.length == 0) {
        return 1;
    }
    else return 0;
}

solution('{[()()]}');
// expected 1

solution('([)()]');
// expected 0

// https://app.codility.com/demo/results/training29YZUW-NSA/