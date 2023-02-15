var tablink = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for(link of tablink) {
        link.classList.remove("active-link")
    }

    for(content of tabcontent) {
        content.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}