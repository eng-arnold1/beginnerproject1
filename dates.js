// dates
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;  // Month is 0-indexed
let day = today.getDate();

console.log("Today's date is: " + year + "-" + month + "-" + day);
