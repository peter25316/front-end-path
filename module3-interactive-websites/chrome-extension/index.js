let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem()

// Instead of using onClick on the element in the HTML body
// Use addEventListener in js file for leaner code
inputBtn.addEventListener("click", function () {
    // inputEl.value is whatever input the user type in the content
    if (inputEl.value.length != 0) {
        myLeads.push(inputEl.value)
        inputEl.value = ""
    }
    renderLeads()
})

const renderLeads = () => {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // innerHTML will recognize the HTML syntax and render elements
        // properly
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>`
        // Alternative ways
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}