function myFunction(){
    let amount = +document.getElementById("amount").value;

    let charge = document.getElementById("output");
    let total = document.getElementById("output2");



 let ownOrOther = document.getElementById("mySelect");
 let trnx = document.getElementById("mySelect2");



// own territory other outlets
 //                               Cash In

if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Cash In"){
  let fee = amount * 0.001;
  if(fee > 200){
    charge.value = 200;
    let  Total = +charge.value + amount;
    total.value = Total;
  }
  else if(fee < 5){
    charge.value = 5;
    let Total = +charge.value + amount;
    total.value = Total;
  }
  else{
    charge.value = fee;
   let Total = +charge.value + amount;
   total.value = Total;
  }
}
//                                 Cash Out 


if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Cash Out"){
  let fee = amount * 0.002;
  if(fee > 300){
    charge.value = 300;
    let  Total = +charge.value + amount;
    total.value = Total;
  }
  else if(fee < 5){
    charge.value = 5;
    let Total = +charge.value + amount;
    total.value = Total;
  }
  else{
    charge.value = fee;
   let Total = +charge.value + amount;
   total.value = Total;
  }
}

//                                 Fund Transfer

if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Fund Transfer"){
  let fee = amount * 0.001;
  if(fee > 200){
    charge.value = 200;
    let  Total = +charge.value + amount;
    total.value = Total;
  }
  else if(fee < 5){
    charge.value = 5;
    let Total = +charge.value + amount;
    total.value = Total;
  }
  else{
    charge.value = fee;
   let Total = +charge.value + amount;
   total.value = Total;
  }
}



// other terrtory other outlets

 //                               Cash In

if(ownOrOther.value == "Other Territory Other Outlets" && trnx.value == "Cash In"){
  let fee = amount * 0.002;
  if(fee > 400){
    charge.value = 400;
    let  Total = +charge.value + amount;
    total.value = Total;
  }
  else if(fee < 10){
    charge.value = 5;
    let Total = +charge.value + amount;
    total.value = Total;
  }
  else{
    charge.value = fee;
   let Total = +charge.value + amount;
   total.value = Total;
  }
}


//                                 Cash Out

if(ownOrOther.value == "Other Territory Other Outlets" && trnx.value == "Cash Out"){
  let fee = amount * 0.004;
  if(fee > 500){
    charge.value = 500;
    let  Total = +charge.value + amount;
    total.value = Total;
  }
  else if(fee < 10){
    charge.value = 5;
    let Total = +charge.value + amount;
    total.value = Total;
  }
  else{
    charge.value = fee;
   let Total = +charge.value + amount;
   total.value = Total;
  }
}

//                                 Fund Transfer

if(ownOrOther.value == "Other Territory Other Outlets" && trnx.value == "Fund Transfer"){
  let fee = amount * 0.002;
  if(fee > 400){
    charge.value = 400;
    let  Total = +charge.value + amount;
    total.value = Total;
  }
  else if(fee < 10){
    charge.value = 5;
    let Total = +charge.value + amount;
    total.value = Total;
  }
  else{
    charge.value = fee;
   let Total = +charge.value + amount;
   total.value = Total;
  }
}

}
myFunction();