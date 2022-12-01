
//DOM elements
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn')
const modalText = document.getElementById('modal-text')
const loginForm = document.getElementById('login-form')
const modalInner = document.getElementById('modal-inner')

//Sets modal to appear
setTimeout(() => {
    modal.style.display = 'inline'
}, 2800);

//Closes modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

//First modal message after users hits 'submit'
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    const name = loginFormData.get('fullName')
    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="loading.svg" class="loading">
    <p id="uploadText">
        Accessing your ip address...
    </p>
</div>
    `
    //Second modal message   
    setTimeout(() => {
        document.getElementById('uploadText').innerText = 'Hacking into your credit card information'
    }, 2000);

    //Final modal message
    setTimeout(() => {
        closeBtn.disabled = false
        modalInner.innerHTML = `<h2>Thanks<span class="modal-display-name"> ${name}</span></h2>
        <p>You just got scammed</p>
        <div class="idiot-gif">
        <img src="clown.gif" class="img">
        </div>
        `
    }, 4200);
})