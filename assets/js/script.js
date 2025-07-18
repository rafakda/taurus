
var ul = document.querySelector('div.headerConteinerMeioMobile')//ACESSANDO O CSS COM O JS

function menu(){
    var btn = document.querySelector('div.hamburuer')
    btn.classList.toggle('ativa')//CRIANDO UMA CLASSE PARA O MENU HHAMBURGUER NO CSS

    if(ul.style. right == '0%'){//CONDICIONAIS DO MENU HAMBURGUER
        ul.style. right = '-100%'
    }else{
        ul.style. right = '0%'
    }
    
}


var lupas = document.querySelector('div.input-busca-mobile')//ACESSANDO O CSS COM O JS

function lupa(){

    lupas.classList.toggle('apareceLupa')//CRIANDO UMA CLASSE PARA O MENU HHAMBURGUER NO CSS

    if(lupas.style. top == '-70px'){//CONDICIONAIS DO MENU HAMBURGUER
        lupas.style. top = '70px'
    }else{
        lupas.style. top = '-70px'
    }
    
}



