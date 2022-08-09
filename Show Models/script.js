"use strict";

// select overlay 
const overlay = document.querySelector(".overlay")

// select modal
const modal = document.querySelector('.model')

// select close button 
const btnCloseModal = document.querySelector(".close")

// Select All Buttons
const btnShowModels = document.querySelectorAll(".buttons button");

// Function to show modal 
const showModal =  function(){
    modal.classList.remove('hidden')
    overlay.classList.remove("hidden")
};

// Function to close modal
const closeModal =function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};

for (let i = 0; i < btnShowModels.length; i++) {
    btnShowModels[i].addEventListener('click',showModal)
}

btnCloseModal.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)


document.addEventListener("keydown" , function(e) {
    if(e.key==="Escape" && !modal.classList.contains("hidden")){
        closeModal()
    }
})
