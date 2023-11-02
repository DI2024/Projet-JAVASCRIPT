function inverseString(str) {
        let result = "";
    for (let i= str.length - 1; i >=0 ; i--){
                 result += str[i];
         }
         return result;
         }
         var exp1 = inverseString("Hello");
         console.log(exp1);

         var exp2 = inverseString("WayToLearnX");
         console.log(exp2);
         
