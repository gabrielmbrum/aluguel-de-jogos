let rented = 0;

function alterarStatus (par)
{
    //finding the elements that will be changed
    let campo = document.getElementById(`game-${par}`); //by the par, find the game that will be rented
    
    //find the respective fields that will be modified
    let imagem = campo.querySelector('.dashboard__item__img');
    let botao = campo.querySelector('.dashboard__item__button');
    let texto = campo.querySelector('a');

    //if it's already rented
    if (texto.innerHTML == 'Devolver')
    {
        if (rented > 0) rented--;
        texto.innerHTML = 'Alugar'; //change the button text
        imagem.classList.remove('dashboard__item__img--rented') //change the img to a available game
        botao.classList.remove('dashboard__item__button--return'); //change to the css button rented
        console.log(rented);
    }
    else //if it's not rented
    {
        rented++;
        texto.innerHTML = 'Devolver'; 
        imagem.classList.add('dashboard__item__img--rented') 
        botao.classList.add('dashboard__item__button--return'); 
        console.log(rented); //print how many games are rented in the console
    }
    
}

