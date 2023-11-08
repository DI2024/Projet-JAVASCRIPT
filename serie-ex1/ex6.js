function getMax(a, b, c){
    let max = a;
    if (b > max) {
        max = b;
        }
        if (c > max) {
            max = c;
            }
            return max;
            }
             var exp1 = getMax(5, 9, 1);
             console.log(exp1)

             var exp2 = getMax(2, 3, 10);
             console.log(exp2)