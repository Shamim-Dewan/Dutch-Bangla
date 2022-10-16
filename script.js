function myFunction(){
    let amount = +document.getElementById("amount").value;

    let charge = document.getElementById("output");
    let total = document.getElementById("output2");



 let ownOrOther = document.getElementById("mySelect");
 let trnx = document.getElementById("mySelect2");



if(ownOrOther.value == "Own Territory Other Outlets" && trnx.value == "Cash In"){
  console.log(ownOrOther.value, trnx.value);
}
else{
  console.log("other");
}
  
}
  






