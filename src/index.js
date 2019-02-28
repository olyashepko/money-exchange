// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let arr = {}
if (currency <= 0) {
    return arr;
}
if (currency > 10000) {
    arr.error = "You are rich, my friend! We don't have so much coins for exchange";
    return arr;
}
let h = Math.floor (currency/50);
if (h>0) {arr.H = h};
currency=currency-h*50;
let q =Math.floor (currency/25);
if (q>0) {arr.Q = q};
currency=currency - q*25;
let d = Math.floor (currency/10);
if (d>0) {arr.D = d};
currency = currency - d*10;
let n = Math.floor (currency/5);
if (n>0) {arr.N = n};
let p = currency - n*5;
if (p>0) {arr.P = p};
return arr;
}
    
