let btn = document.getElementById("btn-menu")
let aside = document.querySelector(".menu-wrapper")
let asideBtn = document.querySelector(".menu__wrapper_btn")
let menuContainer = document.querySelector(".menu__wrapper_container")

btn.addEventListener("click",abrirAside)

asideBtn.addEventListener("click",cerrarAside)

aside.addEventListener("click",(e)=>{
    if (!e.target.matches(".menu__wrapper_container *")&& !e.target.matches(".menu__wrapper_container")) {
        cerrarAside()
    }
})



function abrirAside(){
    aside.classList.add("show")
    menuContainer.classList.add("active")
}

function cerrarAside(){
    aside.classList.remove("show")
    menuContainer.classList.remove("active")
}