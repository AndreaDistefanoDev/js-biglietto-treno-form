console.log('Woooooo');
const formEl = document.querySelector('form')
const nameEl = document.getElementById('name')
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')
const priceEl = 0.21
const buyEl = kmEl * priceEl
console.log(formEl);

formEl.addEventListener('submit', function (e) {
    e.preventDefault
console.log(buyEl.valueOf);
      if (ageEl.textContent.includes('Maggiorenne')) {
    buyEl = buyEl * 0.8
    
} else if (ageEl.textContent.includes('Minorenne')) {
    buyEl = buyEl * 0.6
}
console.log(buyEl);  
    
    
    
}

)
