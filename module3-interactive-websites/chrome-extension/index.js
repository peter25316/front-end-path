let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")

// JSON get the value from key (which is the array name)
// and turn them back into string
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// Instead of using onClick on the element in the HTML body
// Use addEventListener in js file for leaner code
inputBtn.addEventListener("click", function () {
    // inputEl.value is whatever input the user type in the content
    if (inputEl.value.length != 0) {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        // local storage only store strings so JSON will turn array in to string
        // and store it in local storage
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    }
    render(myLeads)
})

tabBtn.addEventListener("click", function () {
    // Grab URL of the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // tabs are in an array so we need to select current tab as tabs[0]
        // tabs[0] is object, to get url, we need to do tabs[0].url
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

delBtn.addEventListener("dblclick", function () {
    // clear the local storage
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

const render = (leads) => {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // innerHTML will recognize the HTML syntax and render elements
        // properly
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `
        // Alternative ways
        // const li = document.createElement("li")
        // li.textContent = leads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}

// Assign leads from storage to myLeads
if (leadsFromLocalStorage != null) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}