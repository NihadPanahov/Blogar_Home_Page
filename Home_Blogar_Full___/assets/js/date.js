var today = new Date()
var date = ' ' + (today.getDate())  + ',' + today.getFullYear(); 
document.getElementById("current_date").innerHTML = 'March' + date;

// if ((today.getMonth() + 1) > 1) {
//     return 'January'
// }
// else if ((today.getMonth() + 1) = 2) {
//     return 'February';
// }
// else if ((today.getMonth() + 1) = 3) {
//     return 'March';
// }
// else if ((today.getMonth() + 1) = 4) {
//     return 'April';
// }
// else if ((today.getMonth() + 1) = 5) {
//     return 'May';
// }
// else if ((today.getMonth() + 1) = 6) {
//     return 'June';
// }
// else if ((today.getMonth() + 1) = 7) {
//     return 'July';
// }
// else if ((today.getMonth() + 1) = 8) {
//     return 'August';
// }
// else if ((today.getMonth() + 1) = 9) {
//     return 'September';
// }
// else if ((today.getMonth() + 1) = 10) {
//     return 'October';
// }
// else if ((today.getMonth() + 1) = 11) {
//     return 'November';
// }
// else ((today.getMonth() + 1) = 12) {
//     return 'December';
// }
let month;
switch (today.getMonth() + 1) {
    case 1:
      month = "January";
      break;  
    case 2:
      month = "February";
      break;
    case 3:
       month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
  }