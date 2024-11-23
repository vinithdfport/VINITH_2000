var oldDate = new Date();
const { add } = require('date-fns');
var newDate = add(oldDate,{months:3})
console.log(oldDate, newDate);

var newDate2 = add(oldDate,{months:-3})
console.log(oldDate, newDate2);

var newDate3 = add(oldDate,{years:-3})
console.log(oldDate, newDate3);
