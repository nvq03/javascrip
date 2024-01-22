/* BT JS ngày 17/1 */

// switch case
var x = 3;

switch (x) {
    case 2:
        console.log("thứ hai");
        break;
    case 3:
        console.log("thứ ba");
        break;
    case 4:
        console.log("thứ tư");
        break;   
    case 5:
        console.log("thứ năm");
        break;
    case 6:
        console.log("thứ sáu");
        break;   
    case 7:
        console.log("thứ bảy");
        break;      
    case 8:
        console.log("chủ nhật");
        break;     
    default:
        break               
}

// switch case array

var y = ["thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy", "chủ nhật"];

switch (x) {
    case 2:
        console.log(y[x-2]);
        break;
    case 3:
        console.log(y[x-2]);
        break;
    case 4:
        console.log(y[x-2]);
        break;   
    case 5:
        console.log(y[x-2]);
        break;
    case 6:
        console.log(y[x-2]);
        break;   
    case 7:
        console.log(y[x-2]);
        break;      
    case 7:
        console.log(y[x-2]);
        break;   
    default:
        break                       
}

// hàm tìm số nguyên tố

function snt (number) {
   if (number < 1){
    return false;
   }
   if (number === 2){
    return true;
   }
   for (var i =2; i< number;i++){
    if(number % i === 0){
        return false
    }
   }
   return true;
}
var u = 5;
if(snt(u)== true){
    console.log(u+ " là số nguyên tố");
}else {
    console.log(u+ " không phải là số nguyên tố");
}

// in ma trận

var matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1]
  ];
  
  var output = [];
  
  for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        row += '1';
      } else {
        row += '0';
      }
    }
    output.push(row);
  }
  
  output.push('010');
  
  for (let k = 0; k < output.length; k++) {
    console.log(output[k]);
  }

//kiểm tra Emailregex

function CheckMail (email){
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

console.log(CheckMail("nguyen@gmail.com"));
console.log(CheckMail("nguyengmail.com"));

// hàm kiểm tra

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Kiểm tra tính hợp lệ của email
    if (emailRegex.test(email)) {
      return true; 
    } else {
      return false; 
    }
  }
  
  // Sử dụng hàm validateEmail để kiểm tra email
  var email = "example@gail.com";
  if (validateEmail(email)) {
    console.log("Email hợp lệ");
  } else {
    console.log("Email không hợp lệ");
  }

