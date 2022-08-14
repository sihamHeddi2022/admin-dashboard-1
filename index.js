const menu =document.getElementById("menu")
const aside = document.getElementById("aside")
const close =document.getElementById("close")

menu.addEventListener("click",function () {
    aside.style.display = "block"
})

close.addEventListener("click",function () {
    aside.style.display = "none"
})