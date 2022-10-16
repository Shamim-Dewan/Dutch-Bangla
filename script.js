function myFunction(){
    let amount = +document.getElementById("amount").value;

    let charge = document.getElementById("output");
    let total = document.getElementById("output2");



 let ownOrOther = document.getElementById("mySelect");
 let trnx = document.getElementById("mySelect2");



// own territory other outlets

if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Cash In"){
  let fee = amount * 0.001;
  charge.innerHTML = fee;
  let  Total = fee + amount;
  total.innerHTML = Total;
}

if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Cash Out"){
  let fee = amount * 0.002;
  charge.innerHTML = fee;
  let Total = fee + amount;
  total.innerHTML = Total;
}
if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Fund Transfer"){
  let fee = amount * 0.001;
  charge.innerHTML = fee;
  let Total = fee + amount;
  total.innerHTML = Total;
}



// other terrtory other outlets

if(ownOrOther.value == "Other Territory Other Outlets" && trnx.value == "Cash In"){
  let fee = amount * 0.002;
  charge.innerHTML = fee;
  let  Total = fee + amount;
  total.innerHTML = Total;
}

if(ownOrOther.value == "Other Territory Other Outlets" && trnx.value == "Cash Out"){
  let fee = amount * 0.004;
  charge.innerHTML = fee;
  let Total = fee + amount;
  total.innerHTML = Total;
}
if(ownOrOther.value == "Other Territory Other Outlets" && trnx.value == "Fund Transfer"){
  let fee = amount * 0.002;
  charge.innerHTML = fee;
  let Total = fee + amount;
  total.innerHTML = Total;
}

}
myFunction();






