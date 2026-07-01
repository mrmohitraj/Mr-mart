function saveAddress(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let address=document.getElementById("address").value;
let city=document.getElementById("city").value;
let state=document.getElementById("state").value;
let pincode=document.getElementById("pincode").value;
let msg=document.getElementById("msg");

if(name=="" || mobile=="" || address=="" || city=="" || state=="" || pincode==""){

msg.innerHTML="❌ Please fill all details.";
msg.style.color="red";
return;

}

msg.innerHTML="✅ Address Saved Successfully!";
msg.style.color="green";

setTimeout(function(){

window.location.href="payment.html";

},1500);

}
