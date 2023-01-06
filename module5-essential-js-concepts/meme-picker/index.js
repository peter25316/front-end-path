import { catsData } from "./data.js"
const emotionRadios = document.getElementById("emotion-radios")
const getImgBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModal = document.getElementById("meme-modal")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")

emotionRadios.addEventListener("change", highlightCheckedOption)

getImgBtn.addEventListener("click", renderCat)

memeModalCloseBtn.addEventListener("click", function () {
    memeModal.style.display = "none"
})

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName("radio")
    // Iterate through the radios element and delete the class "highlight"
    for (let radio of radios)
        radio.classList.remove("highlight")

    // add a class to the parent element the target element
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

const getMatchingCatArray = () => {
    // get the checked input element
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        // a boolean variable whether the "checkbox" element is checked or not 
        const isGif = gifsOnlyOption.checked
        // filter() return an array of elements that fits the condition
        const matchingCatArray = catsData.filter(function (cat) {
            if (isGif)
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            return cat.emotionTags.includes(selectedEmotion)
        })
        return matchingCatArray
    }

}

const getSingleCatObject = () => {
    const catsArray = getMatchingCatArray()
    if (catsArray.length === 1) {
        return catsArray[0]
    } else {
        const ranNum = Math.floor(Math.random() * catsArray.length)
        return catsArray[ranNum]
    }
}

function renderCat() {
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >`
    memeModal.style.display = "flex"
}

/* RENDER EMOTION LIST */

const getEmotionsArray = (cats) => {
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags)
            if (!emotionsArray.includes(emotion))
                emotionsArray.push(emotion)
    }
    return emotionsArray
}

const renderEmotionsRadios = (cats) => {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {

        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions">
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)