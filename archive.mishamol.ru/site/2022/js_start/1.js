function summEvenNumbers() {
    let array = Array.from({length: 40}, () => Math.floor(Math.random() * 100));

    console.log(array);

    summ = array
    .filter(elem => !(elem % 2))
    .reduceRight((accumulator, elem) => accumulator + Math.sqrt(elem), 0);

    console.log (summ);
}
summEvenNumbers();

// function chooseNumbersWithRest(from, to, divider, haveRest) {
// // Пишет в консоль число из диапазона from to, 
// // если при делении на divider оно имеет остаток haveRest = true или нет
//     for (let i = from; i <= to; i++) {
//         if ((haveRest & i % divider != 0) || (!haveRest & i % divider == 0)) {
//             console.log(i);
//         }
//     }
// }
// s(1,100,3,false);
// function getNumbersWithRest() {
//     return function(start, end) {
//         loggerCallback({ message: "Конфигурация", config: configuration });
//         loggerCallback({ message: "Полученный модулятор", modulus: modulus });
//         loggerCallback({
//           message: "Полученный start и end",
//           start: start,
//           end: end
//         });
//     }
// }

function countSmth(task) {
    function one(callback) {
        return callback ? callback(1) : 1
    }
    function two(callback) {
        return callback ? callback(2) : 2
    }
    function three(callback) {
        return callback ? callback(3) : 3
    }
    function four(callback) {
        return callback ? callback(4) : 4
    }
    function five(callback) {
        return callback ? callback(5) : 5
    }
    function six(callback) {
        return callback ? callback(6) : 6
    }
    function seven(callback) {
        return callback ? callback(7) : 7
    }
    function eight(callback) {
        return callback ? callback(8) : 8
    }
    function nine(callback) {
        return callback ? callback(9) : 9
    }

    function plus(number) {
        return (output) => output + number
    }
    function minus() {
        return (output) => output - number
    }
    function mult() {
        return (output) => output * number 
    }
    function divide() {
        return (output) => output / number 
    }

    // console.log(
    //    one(plus(three(plus(four()))))
    // )

    console.log(
        task
     )
}

// console.log(
//     countSmth(one(plus(three(plus(four())))))
// )
// countSmth()
countSmth(one(plus(three(plus(four())))))