const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwords = document.querySelectorAll(".password")
let pwGenerated = []
let pwStr= ""

const renderPasswords = () => {
    for(let i = 0; i < passwords.length; i++){
        pwStr = ""
        for(let i = 0; i < 15; i++){
            let randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) ) + 0;
            pwStr += characters[randomIndex]
        }
        console.log(pwStr)
        pwGenerated.push(pwStr)
    }
}

const generatePassword = () => {
    console.log("clicked")
    renderPasswords()
    for(let i = 0; i < passwords.length; i++){
        passwords[i].textContent = pwGenerated[i]
    }
    pwGenerated = []
}