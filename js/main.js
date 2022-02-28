

var elForm = document.querySelector(".hero__form")
var elFormInput = document.querySelector(".hero__input")
var elFormhuman = document.querySelector(".hero__first")
var elFormbike = document.querySelector(".hero__second")
var elFormcar = document.querySelector(".hero__third")
var elFormplane = document.querySelector(".hero__fourth")



function speed (miles,speed){
    return miles / speed
}


elForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    var elFormInputVal = elFormInput.value;
    var people = 3.6;
    var second = 20.1;
    var third = 70;
    var fourth = 800;
    


    if(elFormInputVal <=0 || isNaN(elFormInputVal)){
        elFormhuman.textContent = "Add only number !!!"
        elFormbike.textContent = "Add only number !!!"
        elFormcar.textContent = "Add only number !!!"
        elFormplane.textContent = "Add only number !!!"

        elFormhuman.classList.add("error");
        elFormbike.classList.add("error");
        elFormcar.classList.add("error");
        elFormplane.classList.add("error");


        elFormhuman.classList.remove("success")
        elFormbike.classList.remove("success")
        elFormcar.classList.remove("success")
        elFormplane.classList.remove("success")

        return
    }

    else{
        elFormhuman.classList.remove("error")
        elFormbike.classList.remove("error")
        elFormcar.classList.remove("error")
        elFormplane.classList.remove("error")

        elFormhuman.classList.add("success")
        elFormbike.classList.add("success")
        elFormcar.classList.add("success")
        elFormplane.classList.add("success")

    }

    elFormhuman.textContent = Math.round (speed (elFormInputVal,people))+ "soat";
    elFormbike.textContent = Math.round (speed (elFormInputVal,second))+ "soat";
    elFormcar.textContent = Math.round (speed (elFormInputVal,third))+ "soat";
    elFormplane.textContent = Math.round (speed (elFormInputVal,fourth))+ "soat";
})

