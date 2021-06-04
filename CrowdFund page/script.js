//modal variables
const btn = document.getElementById("back-modal")
const modal = document.getElementById('popup')
const modalCloseBtn = document.getElementById('close')
const checkRadio = document.getElementsByClassName('form-check-input')

//boxes inside modal popup
const option0 = document.getElementById('option0')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')

//pledges
const pledge0 = document.getElementById('pledge0')
const pledge1 = document.getElementById('pledge1')
const pledge2 = document.getElementById('pledge2')
const pledge3 = document.getElementById('pledge3')

//whole modal box wrapper
const boxWrapper = document.getElementById('boxWrapper')


//opens modal when 'back this project' clicked
btn.addEventListener("click", () => {
    modal.style.display = "block"
})

//closes modal when close button clicked
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = "none"
})


boxWrapper.addEventListener('click', (event) => {
    let button = event.target.id
    let buttonCheck = event.target.checked
    console.log(button)



    if(button === 'flexRadioDefault1'){
        console.log(pledge0)
        pledge0.classList.remove('pledge-box')
        pledge0.classList.toggle('pledge-box-active')
    }else if(button === 'flexRadioDefault2'){
        console.log(pledge1)
        pledge1.classList.remove('pledge-box')
        pledge1.classList.toggle('pledge-box-active')
    }else if(button === 'flexRadioDefault3'){
        console.log(pledge2)
        pledge2.classList.remove('pledge-box')
        pledge2.classList.toggle('pledge-box-active')
    }else if(button === 'flexRadioDefault4'){
        console.log(pledge3)
        pledge3.classList.remove('pledge-box')
        pledge3.classList.toggle('pledge-box-active')
    }

    if(buttonCheck === false){
        pledge0.classList.add('pledge-box')
        pledge0.classList.remove('pledge-box-active')
    }
    
})





