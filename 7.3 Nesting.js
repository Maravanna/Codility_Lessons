function solution(S) {
    var count = 0;
    for(var i = 0; i < S.length; i++){
        if(S[i] == "("){
            count++;
        }
        else if(count > 0){
            count--;
        }
        else{
            return 0;
        }
    }
    if(count == 0){
        return 1;
    }
    else{
        return 0;
    }
}

solution('(()(())())');
// expected 1

solution('())');
// expected 0

// https://app.codility.com/demo/results/trainingYZTPA9-MAW/