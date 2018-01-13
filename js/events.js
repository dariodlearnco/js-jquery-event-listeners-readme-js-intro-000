//define functions here

function getIt() {
    // Does not accept a parameter. The function should bind a click event to
    // the p tag. When the paragraph is clicked, the function should alert
    // "Hey!".

    $('p').on('click',() {
        alert('Hey!')
    })
}

function frameIt() {
    // Does not accept a parameter. The function should bind the load event that
    // adds the class tasty to the image to add a red frame to the image.

    $('.tasty').on('load',(){
        $('img').css('border','1px solid red')
    })
}

function pressIt() {
    // Does not accept a parameter. The function should bind a keydown event to
    // the input field of the form that alerts a user when they have pressed the
    // G key.

function submitIt() {
    // Does not accept a parameter. The function should bind a submit event to
    // the form that alerts "Your form is going to be submitted now.".

$(document).ready(function(){

// call functions here

});
