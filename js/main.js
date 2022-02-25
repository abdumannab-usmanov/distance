

var elForm = document.querySelector(".hero__form")
var elFormInput = document.querySelector(".hero__input")
var elFormhuman = document.querySelector(".hero__first")
var elFormbike = document.querySelector(".hero__second")
var elFormcar = document.querySelector(".hero__third")
var elFormplane = document.querySelector(".hero__fourth")





elForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    var people = 3.6;
    var second = 20.1;
    var third = 70;
    var fouth = 800;
    var elInput = elFormInput.value;
    
    function man() {
        return elInput / people;
    }
    
    function bicycle() {
        return elInput / second;
    }
    
    function car() {
        return elInput / third;
    }
    
    
    function plane () {
        return elInput / fouth;
    }
    
    
    elFormhuman.textContent = Math.round(man ())+ "soat";
    elFormbike.textContent = Math.round(bicycle ())+ "soat";
    elFormcar.textContent = Math.round(car ())+ "soat";
    elFormplane.textContent = Math.round(plane ())+ "soat";
})