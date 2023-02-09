const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
    
    if(textElement.classList.contains ("showText")){
        button.innerHTML = "Ocultar info";
    }
    else {
        button.innerHTML = "Ampliar info"; 
    }

    });
});




