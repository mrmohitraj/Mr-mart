function placeOrder(){

let msg=document.getElementById("msg");

msg.innerHTML="✅ Order Placed Successfully!";

setTimeout(function(){

window.location.href="order-success.html";

},1500);

}
