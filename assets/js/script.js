var rateNumber = document.querySelector('.rate-number')
const modal = document.querySelector('.modal');
const card = document.querySelector('.card');
const buttons = document.querySelectorAll('.buttons')
const submitBtn = document.querySelector('.submit-btn');
const errorMsg = document.querySelector('.error-message');


buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      rateNumber.textContent = e.target.value;
      e.target.style.backgroundColor = 'orange';
    })
})

submitBtn.addEventListener('click', function(){
 modal.style.display = 'block';
 card.style.display = "none";

})