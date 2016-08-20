var currency = require('./currency');

console.log('50 Canadian dollars equals this amount of US dollars.');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));

var Currency = require('./currency1');
var canadianDollar = 0.91;
var currency1 = new Currency(canadianDollar);
console.log('50 Canadian dollars equals this amount of US dollars.');
console.log(currency1.canadianToUS(50));