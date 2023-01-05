const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")

setTimeout(function () {
    modal.style.display = "inline"
}, 3000)

modalCloseBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

declineBtn.addEventListener("mouseenter", function () {
    document.getElementById("modal-choice-btns").classList.toggle("reverse")
})

consentForm.addEventListener("submit", function (e) {
    e.preventDefault()
    // Store the data from consentForm element into a js object type FormData 
    const consentFormData = new FormData(consentForm)

    const formName = consentFormData.get("fullName")

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(function () {
        document.getElementById("uploadText").textContent = "Making the sale..."
    }, 1500)

    setTimeout(function () {
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${formName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
        modalCloseBtn.disabled = false
    }, 3000)
})