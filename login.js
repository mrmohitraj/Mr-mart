function sendOTP(){

let mobile = document.getElementById("mobile").value;
let msg = document.getElementById("msg");

if(mobile.length != 10){

msg.innerHTML = "❌ Please enter a valid 10-digit mobile number.";
msg.style.color = "red";
return;

}

msg.innerHTML = "✅ OTP sent successfully! (Demo)";
msg.style.color = "green";

setTimeout(function(){

window.location.href = "address.html";

},1500);

}
