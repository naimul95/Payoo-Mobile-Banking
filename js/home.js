
// transaction array//
const transactionData=[]

// logout//
document.getElementById("logout-btn"). 
addEventListener('click',function(e){
    e.preventDefault()
    window.location.href="../html/index.html"
})

//add money//
document.getElementById("add-money-btn").
addEventListener('click',function(e){
e.preventDefault()
const pinNumber=1234

const selecBank= document.getElementById("select-bank").value

const bankAcc= document.getElementById("bank-acc").value

const addAmount= parseInt(document.getElementById("add-money").value)

const addPin= parseInt(document.getElementById("add-pin").value)

if(bankAcc.length<11 || bankAcc.length>11){
        alert("invalid account number")
        return
    }

if(selecBank === "Select back" ){
    alert( "enter bank name ")
    return
}
 
if(addAmount<=0){
    alert("invalid ammount")
    return;

}

if(addPin !== pinNumber){
    alert("incorrect pin. pls type again")
    return;

}


const mainAmount= parseInt(document.getElementById("main-ammount").innerText)

const total= addAmount + mainAmount
    document.getElementById("main-ammount").innerText= total

// remove text auto//
    document.getElementById("add-money").value=''
    document.getElementById("add-pin").value=''
    document.getElementById("bank-acc").value=''
    document.getElementById("select-bank").value='Select back'

// transaction history//
const data={
    name: "Add Money",
    date: new Date().toLocaleTimeString()}

    transactionData.push(data)


})


//cashout//

document.getElementById("withdraw-btn"). 
addEventListener('click',function(e){
    e.preventDefault()
 const pincasout=1234
 
    const agentNumber= document.getElementById("agentNumber").value

    const cashoutAmount= parseInt(document.getElementById("withdraw-amount").value)

    const pinNumCashout= parseInt(document.getElementById("pinNum").value)

    if(agentNumber.length<11 || agentNumber.length>11){
        alert("invalid account number")
        return
    }

  

    if(pinNumCashout!==pincasout){
        alert("invalid pin")
        return
    }

    const mainAmount= parseInt(document.getElementById("main-ammount").innerText)

      if(cashoutAmount<=0 || cashoutAmount>mainAmount){
        alert("incorrect amount")
        return
    }

    const totalAmount= mainAmount-cashoutAmount

    document.getElementById("main-ammount").innerText=totalAmount

    //remove text auto//
    document.getElementById("agentNumber").value=''
    document.getElementById("pinNum").value=''
    document.getElementById("withdraw-amount").value=''

    // transaction history//
const data={
    name: "Cash Out",
    date: new Date().toLocaleTimeString()}

    transactionData.push(data)
})


// transfer money//

document.getElementById("send-btn").
addEventListener('click',function(e){
   e.preventDefault()
   
    
    const transferAccount= document.getElementById("transferAccNum").value
    const Pintransfer=1234
    const transferAmount= parseInt(document.getElementById("transferAmount").value)
     const transferpin= parseInt(document.getElementById("transferPin").value)
    if(transferAccount.length<11 || transferAccount.length>11){
        alert("invalid account number")
        return
    }
    if(transferpin !== Pintransfer){
        alert("incorrect pin")
        return
    }
    
  const mainAmount= parseInt(document.getElementById("main-ammount").innerText)

  if(transferAmount<=0 || transferAmount>mainAmount){
        alert("incorrect ammount")
        return
    }

  const totaltransfer= mainAmount-transferAmount
  document.getElementById("main-ammount").innerText= totaltransfer

  //remove text auto//
  document.getElementById("transferAmount").value=''
  document.getElementById("transferPin").value=''
  document.getElementById("transferAccNum").value=''

  // transaction history//
const data={
    name: "Transfer Money",
    date: new Date().toLocaleTimeString()}

    transactionData.push(data)

})

//bonus//
document.getElementById("get-bonus-btn").addEventListener('click',function(e){
    e.preventDefault()
const bonus1="Get1000"
const bonus2="Get10000"
const bonusAmount=document.getElementById("coupon").value
if(bonusAmount===bonus1){
const mainAmount= parseInt(document.getElementById("main-ammount").innerText)
const totalBonus=mainAmount+1000
document.getElementById("main-ammount").innerText=totalBonus}

else if (bonusAmount===bonus2){
const mainAmount= parseInt(document.getElementById("main-ammount").innerText)
const totalBonus=mainAmount+10000
document.getElementById("main-ammount").innerText=totalBonus}

else{
    alert("invalid coupon")
    return
}
document.getElementById("coupon").value=''

// transaction history//
const data={
    name: "Bonus Money",
    date: new Date().toLocaleTimeString()}

    transactionData.push(data)
})

//pay now//

document.getElementById("pay-now-btn").
addEventListener('click',function(e){
    e.preventDefault()
    const pinpay=1234
    const selectPay= document.getElementById("select-pay").value
    const payAcc= document.getElementById("pay-acc").value
    const payAmount= parseInt(document.getElementById("pay-amount").value)
    const payPin= parseInt(document.getElementById("pay-pin").value)
    if(selectPay==="Select back"){
        alert("select where you pay")
        return
    }
    if(payAcc.length<11 || payAcc.length>11){
        alert("invalid account number")
        return
    }
   
    if(payPin !==pinpay){
        alert("incorrect pin")
        return
    }
    const mainAmount= parseInt(document.getElementById("main-ammount").innerText)

     if(payAmount<=0 || payAmount>mainAmount){
        alert("invalid number")
        return
    }
    const totalPay= mainAmount-payAmount
    document.getElementById("main-ammount").innerText=totalPay
     //remove text auto//
     document.getElementById("pay-pin").value =''
     document.getElementById("pay-amount").value=''
     document.getElementById("pay-acc").value=''
     document.getElementById("select-pay").value="Select back"

     // transaction history//
const data={
    name: "Pay Bill",
    date: new Date().toLocaleTimeString()}

    transactionData.push(data)
})

// transaction-history//

document.getElementById("transaction-btn"). 
addEventListener('click',function(){

    const container= document.getElementById("transaction-container")

    container.innerText=""
    
for( const data of transactionData){
    const div= document.createElement('div')
    div.innerHTML=` <div class="flex items-center justify-between mt-3 bg-white border-2 border-gray-200 rounded-3xl">
            <div class="flex p-3" >
                <div >
                    <img class="p-3 rounded-full bg-[#f4f5f7]" src="../assets/wallet1.png" alt="add money" >
                </div>
                <div class="ml-3">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
               
            </div>
             <i class="fa-solid fa-ellipsis-vertical "></i>
        </div> `

        container.appendChild(div)}

    })




//toggling//

// add money//
document.getElementById("add-btn"). 
addEventListener('click',function(){
    document.getElementById("add-money-div").style.display="block"
    document.getElementById("withdraw-money-div").style.display="none"
    document.getElementById("transfer-money").style.display="none"
    document.getElementById("bonus-money").style.display="none"
    document.getElementById("pay-bill").style.display="none"
    document.getElementById("transaction-money").style.display="none"

    //btn-hover//
    const fromBtn= document.getElementsByClassName("from-btn")
    for( const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }
    document.getElementById("add-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    document.getElementById("add-btn").classList.remove("border-gray-200")
    
   
    
})

//castout//
document.getElementById("cashout-btn"). 
addEventListener('click',function(){
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("withdraw-money-div").style.display="block"
    document.getElementById("transfer-money").style.display="none"
    document.getElementById("bonus-money").style.display="none"
    document.getElementById("pay-bill").style.display="none"
    document.getElementById("transaction-money").style.display="none"

    //btn-hover//
    const fromBtn= document.getElementsByClassName("from-btn")
    for( const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }
    document.getElementById("cashout-btn").classList.remove("border-gray-200")
    
    document.getElementById("cashout-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
})

// transfer-money//

document.getElementById("transfer-money-btn"). 
addEventListener('click',function(){
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("withdraw-money-div").style.display="none"
    document.getElementById("transfer-money").style.display="block"
    document.getElementById("bonus-money").style.display="none"
    document.getElementById("pay-bill").style.display="none"
    document.getElementById("transaction-money").style.display="none"
   
    //btn-hover//
    const fromBtn= document.getElementsByClassName("from-btn")
    for( const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }
    document.getElementById("transfer-money-btn").classList.remove("border-gray-200")
    
    document.getElementById("transfer-money-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})

//bonus//
document.getElementById("bonus-btn").
addEventListener('click',function(){
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("withdraw-money-div").style.display="none"
    document.getElementById("transfer-money").style.display="none"
    document.getElementById("bonus-money").style.display="block"
    document.getElementById("pay-bill").style.display="none" 
   document.getElementById("transaction-money").style.display="none"

   //btn-hover//
    const fromBtn= document.getElementsByClassName("from-btn")
    for( const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }
    document.getElementById("bonus-btn").classList.remove("border-gray-200")
    
    document.getElementById("bonus-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
   
})

//pay-bill//
document.getElementById("pay-bill-btn"). 
addEventListener('click',function(){
   document.getElementById("add-money-div").style.display="none"
    document.getElementById("withdraw-money-div").style.display="none"
    document.getElementById("transfer-money").style.display="none"
    document.getElementById("bonus-money").style.display="none"
    document.getElementById("pay-bill").style.display="block"
       document.getElementById("transaction-money").style.display="none"

       //btn-hover//
    const fromBtn= document.getElementsByClassName("from-btn")
    for( const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }
    document.getElementById("pay-bill-btn").classList.remove("border-gray-200")
    
    document.getElementById("pay-bill-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})

// transaction//
document.getElementById("transaction-btn"). 
addEventListener('click',function(){
   document.getElementById("add-money-div").style.display="none"
    document.getElementById("withdraw-money-div").style.display="none"
    document.getElementById("transfer-money").style.display="none"
    document.getElementById("bonus-money").style.display="none"
    document.getElementById("pay-bill").style.display="none"
    document.getElementById("transaction-money").style.display="block"


      //btn-hover//
    const fromBtn= document.getElementsByClassName("from-btn")
    for( const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }
    document.getElementById("transaction-btn").classList.remove("border-gray-200")
    
    document.getElementById("transaction-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")

})