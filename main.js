"use strict";
exports.__esModule = true;
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //...console.log('Finally: ' +i);
}
doSomething();
//Types 
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
console.log(Color);
// Arrow function
var func = function (word) {
    console.log(word);
};
var doLog = function (word) { return console.log(word); };
var drawPoint = function (point) {
};
drawPoint({
    x: 1,
    y: 2
});
