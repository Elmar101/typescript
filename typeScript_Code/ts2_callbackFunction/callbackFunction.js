function callbackHandler1(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var returnVoid = function (p) { return console.log(p); };
callbackHandler1(2, 5, returnVoid);
callbackHandler1(4, 5, function (p) { return console.log(p); });
//=>  ex 2 ------------------------------------------------------
var data;
function callbackHandler2(n1, n2, cb) {
    var result = n1 + n2;
    data = cb(result);
}
var returnNum = function (p) { return p; };
callbackHandler2(5, 7, returnNum);
console.log("data is ", data);
//-------------------- Function Type ------------------
//type CustomTypes = number | string;
function callbackHandler3(n1, n2, cb) {
    var result = n1 + n2;
    return cb(result);
}
var d = callbackHandler3(10, 9, returnNum);
console.log("d", d);
