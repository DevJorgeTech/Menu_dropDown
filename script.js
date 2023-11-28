const dropdown_menu = document.getElementById("dropdown_menu")
const dropdown = document.getElementById("dropdown")

dropdown.addEventListener("mouseover",function(){
    dropdown_menu.style.display = "block" // mudando o diplay de none para block o menu volta a aparecer
    dropdown_menu.addEventListener("mouseout", function(){
        dropdown_menu.style.display = "none"
    })
})




