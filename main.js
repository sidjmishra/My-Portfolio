var tablink = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (link of tablink) {
        link.classList.remove("active-link")
    }

    for (content of tabcontent) {
        content.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwyUowZFmq1k1xPPqPd8Fa7ydrh7hmzf4WHMKot1MegMEvl0PjhHZVcVJyW_ib4rUFKA/exec'
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL,
        { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})