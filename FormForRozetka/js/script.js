//Modal window
let modal = document.getElementById("textFirstModal");
let btn = document.getElementById("firstModal");
let span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

const btnsModal = document.getElementsByClassName("button");
for (let i = 0; i < btnsModal.length; i++) {
    btnsModal[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


const modalSelect = document.getElementById("modal-select");
const userCity = document.getElementById('userCity');

userCity.addEventListener('input', function (){
    let el = userCity.value
    console.log(el)
    if (el !== ''){
        modalSelect.disabled = false;
    }
    else {
        modalSelect.disabled = true;
    }
})

// const spanInput = document.getElementsByClassName('span-input')
// userCity.addEventListener('input', (e) =>{
//     spanInput.innerHTML = e.target.value
// })


//Error
const cirillikPattern = /[а-яА-ЯЁё]/ ;
const numberTelPattern = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ;
const numberPattern = /^[1-9]\d*(?:[ -]?(?:[а-яА-ЯЁё]+|[1-9]\d*))?$/

window.onload = () => {
    const surname = document.getElementById('inputSurname')
    const name = document.getElementById('inputName')
    const tel = document.getElementById('inputTel')
    const userCity = document.getElementById('userCity')

    const inputStreet = document.getElementById('inputStreet')
    const inputHouse = document.getElementById('inputHouse')

    const inputUserSurname = document.getElementById('inputUserSurname')
    const inputUserName = document.getElementById('inputUserName')
    const inputPatronymic = document.getElementById('inputPatronymic')
    const inputNumber = document.getElementById('inputNumber')



    const errorOne = document.getElementById('error-1')
    const errorTwo = document.getElementById('error-2')
    const errorThree = document.getElementById('error-3')
    const errorFour = document.getElementById('error-4')
    const errorStreet = document.getElementById('errorStreet')
    const errorHouse = document.getElementById('errorHouse')
    const errorFive = document.getElementById('error-5')
    const errorSix = document.getElementById('error-6')
    const errorSeven = document.getElementById('error-7')
    const errorEight = document.getElementById('error-8')


    surname.oninput = function () {
        if(!cirillikPattern.test(this.value)){
            errorOne.classList.remove('invisible');

        }else{
            errorOne.classList.add('invisible');
        }
    }
    name.oninput = function (){
        if(!cirillikPattern.test(this.value)){
            errorTwo.classList.remove('invisible');
        }else{
            errorTwo.classList.add('invisible');
        }
    }
    tel.oninput = function () {
        if(!numberTelPattern.test(this.value)) {
            errorThree.classList.remove('invisible');
        }else{
            errorThree.classList.add('invisible');
        }
    }

    userCity.oninput = function () {
        if(!cirillikPattern.test(this.value)){
            document.getElementById("example").style.display = "none";
            errorFour.classList.remove('invisible');
        }else{
            errorFour.classList.add('invisible');
        }
    }
    inputStreet.oninput = function () {
        if(!cirillikPattern.test(this.value)){
            errorStreet.classList.remove('invisible');
        }else{
            errorStreet.classList.add('invisible');
        }
    }
    inputHouse.oninput = function () {
        if(!numberPattern.test(this.value)){
            errorHouse.classList.remove('invisible');
        }else{
            errorHouse.classList.add('invisible');
        }
    }

    inputUserSurname.oninput = function () {
        if (!cirillikPattern.test(this.value)) {
            errorFive.classList.remove('invisible');
        } else {
            errorFive.classList.add('invisible');
        }
    }
    inputUserName.oninput = function () {
        if (!cirillikPattern.test(this.value)) {
            errorSix.classList.remove('invisible');
        } else {
            errorSix.classList.add('invisible');
        }
    }
    inputPatronymic.oninput = function () {
        if (!cirillikPattern.test(this.value)) {
            errorSeven.classList.remove('invisible');
        } else {
            errorSeven.classList.add('invisible');
        }
    }
    inputNumber.oninput = function () {
        if(!numberTelPattern.test(this.value)) {
            errorEight.classList.remove('invisible');
        }else{
            errorEight.classList.add('invisible');
        }
    }
}


//Dynamic selector for own pick up
const getFromBase = () => {
    return[
        {
            name: 'Стадионный проезд, 5А',
            value: 'FirstAddress'
        },
        {
            name: 'Клочковская ул., 9А',
            value: 'SecondAddress'
        },
        {
            name: 'Героев Труда ул., 29А',
            value: 'ThirdAddress'
        }
    ]
}

const result = getFromBase()
const dynamicSelect = document.getElementById('select')
result.forEach(el => {
    const newOption = document.createElement('option');
    newOption.innerHTML = el.name;
    newOption.value =el.value;
    dynamicSelect.appendChild(newOption)
})

// Delivery radio
const inputOne = document.getElementById('inputOne')
const inputTwo = document.getElementById('inputTwo')
const inputThree = document.getElementById('inputThree')
const inputFour = document.getElementById('inputFour')
const inputFive = document.getElementById('inputFive')

const selectOne = document.getElementById('selectDiv1')
const selectTwo = document.getElementById('selectDiv2')
const selectThree = document.getElementById('selectDiv3')
const selectFour = document.getElementById('selectDiv4')
const selectFive = document.getElementById('selectDiv5')

 radioCheck = () => {
    if (inputOne.checked === true){
        selectOne.classList.remove('invisible');
        selectOne.parentElement.classList.add('selectDiv')
    }else{
        selectOne.classList.add('invisible')
        selectOne.parentElement.classList.remove('selectDiv')
    }

    if (inputTwo.checked === true){
        selectTwo.classList.remove('invisible')
        selectTwo.parentElement.classList.add('selectDiv')
    }else{
        selectTwo.classList.add('invisible')
        selectTwo.parentElement.classList.remove('selectDiv')
    }

    if (inputThree.checked === true){
        selectThree.classList.remove('invisible')
        selectThree.parentElement.classList.add('selectDiv')
    }else{
        selectThree.classList.add('invisible')
        selectThree.parentElement.classList.remove('selectDiv')
    }

    if (inputFour.checked === true){
        selectFour.classList.remove('invisible')
        selectFour.parentElement.classList.add('selectDiv')
    }else{
        selectFour.classList.add('invisible')
        selectFour.parentElement.classList.remove('selectDiv')
    }

    if (inputFive.checked === true){
        selectFive.classList.remove('invisible')
        selectFive.parentElement.classList.add('selectDiv')
    }else{
        selectFive.classList.add('invisible')
        selectFive.parentElement.classList.remove('selectDiv')
    }
}


//Time-table
const timeList = document.getElementsByClassName("button-click");
for (let i = 0; i < timeList.length; i++) {
    timeList[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Other reciever

let users = [
    {name:'Елизавета', surname:'Деркачева'},
    {name:'Анжелика', surname:'Журавлева'},
    {name:'Другой', surname:'получатель'}

]

const newUser = { name:'', surname:'' }

const select = document.getElementById('nameUser')
const nameInp = document.getElementById('inputUserName')
const surnameInp = document.getElementById('inputUserSurname')

function resetSelect (){
    select.innerHTML = '';

    users.forEach(userObj => {
        const option = document.createElement('option')
        option.innerHTML = `${userObj.name} ${userObj.surname}`
        select.appendChild(option)
    })
}

resetSelect()


nameInp.oninput = (e) => {
    if (newUser.surname.length && newUser.name.length){
        users.unshift(newUser)
        resetSelect()
    }
    console.log(e.target.value)
    newUser.name = e.target.value
}
surnameInp.oninput = (e) => {
    if (newUser.surname.length && newUser.name.length){
        users.unshift(newUser)
        resetSelect()
    }
    console.log(e.target.value)
    newUser.surname = e.target.value
}


//Aside

const inputPromo = document.getElementById('promo');
const pattern = /^[a-zA-z0-9]+$/

function viewDiv(){
    document.getElementById('checkout-promo').style.display = "block";
}

inputPromo.oninput = function (){
    if (!pattern.test(inputPromo.value)) {
        inputPromo.classList.add('error-last');
    } else {
        inputPromo.classList.remove('error-last');
    }
}


