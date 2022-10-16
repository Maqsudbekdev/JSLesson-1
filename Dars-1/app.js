console.log(jaloliddin);
console.log(x);
console.log(y);
console.log(ahror);
console.log(b);
const container = document.querySelector(".container")
const text1 = document.querySelector("h1")
let text2 = document.querySelector("h2")
container.innerHTML = "Hello container!"
text1.innerHTML += "What's happening"
text2.innerHTML += "I don't know"
const submitted = document.querySelector(".submitted")


const button = document.querySelector("button")
button.addEventListener("click", myfunc)
function myfunc() {
    submitted.innerHTML = "Submitted"
    text2.innerHTML = ""
    text1.innerHTML = ""
    container.innerHTML = ""
    text1.innerHTML = ""
    text2.innerHTML = ""
    button.outerHTML = ""
}