console.log("page loaded")

function guessWhat(){
    alert("Loading weather reoprt")
}

function closeOne(element) {
    var div = document.getElementById("acceptAllCookies").innerHTML = acceptAllCookies;
    div.style.display = 'none'
}

function dropdown(element){
    if (element.value === "farenhiet") {
        var elementList = document.querySelector("#hi")
        elementList.innerText = "78°"

    }
}

function dropdown(element){
    if (element.value === "farenhiet") {
        var elementList = document.querySelector(".lo")
        for(var i = 0; i < elementList.length; i++){
            elementList[i].innerText = "80"
        }
    }
}

function dropdown(element){
    if (element.value === "farenhiet") {
        var elementList = document.querySelector(".hi")
        for(var i = 0; i < elementList.length; i++){
            elementList[i].innerText = "80"
        }
    }
}