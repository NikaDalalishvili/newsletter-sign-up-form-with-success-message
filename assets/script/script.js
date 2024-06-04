const toSubmitCnt = document.getElementById("to-submit-cnt");
const emailRequired = document.getElementById("email-required");
const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");

const submitedCnt = document.getElementById("submited-cnt");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(!emailInput.checkValidity() ||
       emailInput.value === '') {
        emailRequired.classList.add("active");
        emailInput.classList.add("invalid");
    }else {
        emailRequired.classList.remove("remove");
        const userInput = emailInput.value;
        userEmail.innerText = userInput;
        emailInput.value = '';
        toSubmitCnt.classList.add("hide");
        submitedCnt.classList.add("active");
    }
});

dismissBtn.addEventListener("click", (e) => {
    toSubmitCnt.classList.remove("hide");
    submitedCnt.classList.remove("active");
});