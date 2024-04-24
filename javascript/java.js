window.onload = () => {
    resetColor()
}

let sfondoSchermo = document.querySelector('body');

function resetColor(){
    sfondoSchermo.style.backgroundColor = 'red';
}

function changeColor(){
    if(sfondoSchermo.style.backgroundColor === 'red'){
        sfondoSchermo.style.backgroundColor = 'blue'; 
    }else{
        sfondoSchermo.style.backgroundColor = 'red';  
    }
}

