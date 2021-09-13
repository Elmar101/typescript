var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, value, index, array) { return acc + value + array[index]; }, 0);
};
console.log("function rest params ", add(1, 2, 3));
