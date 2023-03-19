let billInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let numberOfPeopleDiv = document.getElementById('numberOfPeople');
let perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () =>{
  const bill = Number(billInput.value)
  const tipPercentage= Number(tipInput.value)/100
  //console.log(bill)
  //console.log(tipPercentage)

  //total tip amt
  const totalTipAmt = bill*tipPercentage
  //console.log({totalTipAmt})
  const total = totalTipAmt + bill;
  //console.log({total})
  //calculate per person total
  const perPersonTotal = total / numberOfPeople
  console.log({perPersonTotal})
  //update perPersonTotal on DOM and show to user
  //if decimal 15.734894
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  // perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
}

const increasePeople = () => {
 numberOfPeople+=1
 numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if(numberOfPeople<=1){
    throw 'Hey you cannot have less than one person!'
    return
  }else {
     numberOfPeople-=1
     numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
  }
}


