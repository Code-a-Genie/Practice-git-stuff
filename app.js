const form =document.getElementById('form')
const inputField = document.getElementById('field');
const submitField = document.getElementById('submit');
const message = document.getElementById('message');
let inputData = inputField
submitField.addEventListener('click', function(e){
    e.preventDefault();
    let inputData = inputField.value
   message.innerText = inputData;
   
})