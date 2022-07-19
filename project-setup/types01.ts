function add(n1: number, n2: number, showResult: boolean = false, phrase: string ){
    const result = n1+n2;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 7.2;
const number2= 7;
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);