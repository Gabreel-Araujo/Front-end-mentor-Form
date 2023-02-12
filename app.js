const card = document.querySelector('.container-card');
const mainContainer = document.querySelector('.show');
const thanksContainer = document.querySelector('.hidden-section')
const rateSelect= document.querySelector('.select');
const submitBtn = document.querySelector('#btnSubmit');
const rates = document.querySelector('.rates');
const rating = document.querySelector('#selectValue')


submitBtn.addEventListener('click', (rates)=>{

  thanksContainer.classList.remove('hidden');
  mainContainer.style.display = "none"

  if(rates == ""){
    preventDefault();
  }

})

rates.addEventListener('click',(e)=>{
  rating.innerHTML = e.target.value;
})