const prompt = require("prompt-sync")();


const getFactorial = (n, sum) => {
    if(n==0){
        return 1;
    }
    else if(n == 1){
        return sum;
    }
    else{
        n -= 1;
        sum *= n;
        return getFactorial(n, sum);
    }
};

const program = () => {
    let num = 0;
    let sum = 0;
    while(true){
        let input = prompt("Please enter a positive whole number: ");
        num = parseFloat(input);
        if(isNaN(num) || num < 0){
            console.log("Invalid input. Try again.");
        }
        else{
            break;
        }
    }
    sum = num;
    const ans = getFactorial(num, sum);
    console.log("The answer to " + num + "! is " + ans);
};

program();