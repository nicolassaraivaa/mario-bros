const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-form")

function MostrarForm(){
   form.style.left = "50%"
   form.style.transform = "translate(-50%)"
   mascara.style.visibility = "visible"


}

function EsconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translate(0)"
    mascara.style.visibility = "hidden"
}