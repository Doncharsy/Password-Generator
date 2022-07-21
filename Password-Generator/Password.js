const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbols = "!@#$%^&*-_=+";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const pNumber = document.getElementById("number");
const pSymbols = document.getElementById("symbols");
const button = document.getElementById("submit");
const screen = document.getElementById("display");

button.addEventListener("click",()=>{
let password = empty;
(upperCase.checked) ? password += uCase: "";
(lowerCase.checked) ? password += lCase: "";
(pNumber.checked) ? password += number: "";
(pSymbols.checked) ? password += symbols: "";

function generate(l, password){
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += password.charAt(Math.floor(Math.random() * password.length));  
    }
    return pass;
}
screen.value = generate(pLength.value, password)
})
const copy = document.querySelector(".btn")
copy.addEventListener("click",()=>{
     screen.select();
    screen.setSelectionRange(0,999999);
    navigator.clipboard.writeText(screen.value);
    copy.innerHTML = "copied";

})