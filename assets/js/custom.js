const allBtn = document.getElementsByClassName('myBtn');
let count = 0;

for(const btn of allBtn) {
  btn.addEventListener('click',function(event){

    event.target.setAttribute('disabled','');
    count = count + 1;

    const places = event.target.parentNode.parentNode.childNodes[1].innerText;

    const stringPrice = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const convertPriceToNumber = parseInt(stringPrice);

   // Reduce the total budget
   const totalBudget = document.getElementById('total-budget').innerText;
   const convertTotalBudget = parseInt(totalBudget);
   const reduceBudget = convertTotalBudget - convertPriceToNumber;

   if(reduceBudget < 0) {
    alert("Your budget are not enough!! Please add more...");
    return;
   }

    // set the reduce budget after if condition if the condition match the code will return 
    document.getElementById('total-budget').innerText = reduceBudget;

    const placesPriceContainer = document.getElementById('show-place-with-price');

    const li = document.createElement('li');

    const p1 = document.createElement('p');
    p1.innerText = places + ' :';

    const p2 = document.createElement('p');
    p2.innerText = stringPrice + ' USD';

    li.appendChild(p1);
    li.appendChild(p2);

    placesPriceContainer.appendChild(li);




  // Calculate total cost by function
   totalCost('totalCostAdd',convertPriceToNumber);

   // grand total calculate by function
   grandTotal()

    // Add items on card use by function
    setInnerText('addItems',count);

  });
}


// Set innerText By Function
function setInnerText(id,value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// Calculate total cost using by function
function totalCost(id,price) {
  const totalCost = document.getElementById(id).innerText;
  const convertTotalCost = parseInt(totalCost);
  const calculate = convertTotalCost + price;
  setInnerText(id,calculate);
}

// Calculate grand total cost using by function
function grandTotal(catagory) {

  const totalCost = document.getElementById('totalCostAdd').innerText;
  const converttotalCost = parseInt(totalCost);
  
  if(catagory === 'bus') {
    setInnerText('grand-total',converttotalCost + 100);
  }else if(catagory === 'train') {
    setInnerText('grand-total',converttotalCost - 200);
  }else if(catagory === 'flight') {
    setInnerText('grand-total',converttotalCost + 500)
  }else {
    setInnerText('grand-total',converttotalCost);
  }

// console.log(convertGrandTotal)



}
