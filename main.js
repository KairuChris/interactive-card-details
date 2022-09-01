import './styles/style.css'

//card form
let form = document.getElementById('form')

//card info
let name = document.getElementById('name')
let number = document.getElementById('number')
let monthExp = document.getElementById('month')
let yearExp = document.getElementById('year')
let cvc = document.getElementById('CVC')

let continueButton = document.getElementById('continue')
let completeState = document.getElementsByClassName('complete-state')[0]

form.addEventListener('submit', e => {
    e.preventDefault()

    if(document.getElementById('cardholder-name').value === ''){
        alert('Field(s) are empty')
        return
    }

    form.style.display = 'none'
    completeState.style.display = 'flex'
    e.target.reset()
})

continueButton.addEventListener('click', () => {
    form.style.display = 'flex'
    completeState.style.display = 'none'

    name.innerText = 'JANE APPLESEED'
    number.innerText = '0000 0000 0000 0000'
    monthExp.innerText = '00'
    yearExp.innerText = '00'
    cvc.innerText = '123'

})

form.addEventListener('input', e =>{
    let formValue = e.target.value
    let errorBorder = e.target
    let blankError = e.target.nextElementSibling
    
    switch(e.target.name){
        case 'name':
            name.innerText = formValue.toUpperCase()
            if(formValue === ''){
                blankError.classList.add('error')
                errorBorder.classList.add('error-border')
                name.innerText = 'JANE APPLESEED'
            }else{
                blankError.classList.remove('error')
                errorBorder.classList.remove('error-border')
            }
        break;
        case 'number':
            let formatErrorNumber = e.target.nextElementSibling.nextElementSibling
            //to add a space after every 4 digits
            var value = e.target.value.split(" ").join("");
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(" ");
            }
            e.target.value = value;

            number.innerText = value
         
           
            numbersOnly(formValue, formatErrorNumber, errorBorder)

            if(value === ''){
                blankError.classList.add('error')
                errorBorder.classList.add('error-border')
                number.innerText = '0000 0000 0000 0000'
            }else{
                blankError.classList.remove('error')
                errorBorder.classList.remove('error-border')
            }
        break;
        case 'expiration-month':
            let formatErrorMonth = e.target.nextElementSibling.nextElementSibling
            monthExp.innerText = formValue

            numbersOnly(formValue, formatErrorMonth, errorBorder)

            if(formValue === ''){
                //error message
                blankError.classList.add('error')
                //red border if blank
                errorBorder.classList.add('error-border')
                monthExp.innerText = '00'
            }else{
                blankError.classList.remove('error')
                errorBorder.classList.remove('error-border')
            }
        break;
        case 'expiration-year':
           
            yearExp.innerText = formValue
            let yearError = document.getElementById('blankError')
            let formatErrorYear = document.getElementById('error-format')

            numbersOnly(formValue,formatErrorYear, errorBorder)

            if(formValue === ''){
                yearError.classList.add('error')
                errorBorder.classList.add('error-border')
                yearExp.innerText = '00'
            }else{
                yearError.classList.remove('error')
                errorBorder.classList.remove('error-border')
            }
        break;
        case 'cvc':
            cvc.innerText = formValue
            let formatErrorCVC = e.target.nextElementSibling.nextElementSibling
            numbersOnly(formValue, formatErrorCVC, errorBorder)

            if(formValue === ''){
                blankError.classList.add('error')
                errorBorder.classList.add('error-border')
                cvc.innerText = '123'
            }else{
                blankError.classList.remove('error')
                errorBorder.classList.remove('error-border')
            }
        break;
    }
})


function numbersOnly(inputVal,formatError,errorBorder){
    var numbers = /[^ 0-9]/g
    if(inputVal.match(numbers)){
        formatError.classList.add('error')
        errorBorder.classList.add('format-error-border')
    }else{
        formatError.classList.remove('error')
        errorBorder.classList.remove('format-error-border')
    }
}


