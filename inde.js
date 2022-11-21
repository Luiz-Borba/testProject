function abrir(){
    document.getElementById("btn-content").style.height = "100%"
    document.getElementById("btn-content").style.visibility = "visible"
    document.getElementById("ul-mobile").style.visibility = "visible"
    document.getElementById("btn-content").style.transition = "all 0.5s"
    document.getElementById("btn-close").style.visibility = "visible"
    document.getElementById("container").style.backgroundColor = "rgba(0,0,0,0.8)"
    
}
function fechar(){
document.getElementById("btn-content").style.height = "0%"
document.getElementById("btn-content").style.visibility = "hidden"
document.getElementById("ul-mobile").style.visibility = "hidden"
document.getElementById("btn-content").style.transition = "all 0.5s"
document.getElementById("btn-close").style.visibility = "hidden"
document.getElementById("container").style.backgroundColor = "rgba(0,0,0,0)"

}