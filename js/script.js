//login-btn//
document.getElementById("login-btn")
.addEventListener('click',function(e){
 e.preventDefault()
 const mobileNum=12345678910
 const pin=1234

 const mobileNumberValue=document.getElementById("mobile-num").value
 const mobileNumberValueConvert= parseInt(mobileNumberValue)

 const pinNumberValue= document.getElementById("pin-num").value
 const pinNumberValueConvert=parseInt(pinNumberValue)

 if(mobileNum===mobileNumberValueConvert && pin===pinNumberValueConvert){
       window.location.href="../html/home.html" }
 
 else{ alert("invalid! try again")}

})