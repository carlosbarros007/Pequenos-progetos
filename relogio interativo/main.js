
function iniciar(){
    
    let interval;

    carregar();
    interval = setInterval(carregar,1000);


}


function carregar(){

    const mostraHora = window.document.querySelector('.mostra__hora');
    const imagem = window.document.querySelector('.mostra__imagem');
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();

    if ( hora >= 06 && hora < 12 ){

        mostraHora.innerText = `Bom dia, agora são ${hora}:${minutos}:${segundos} `;
        imagem.innerHTML = '<img class="imagem" src="https://www.fotografemelhor.com.br/site/wp-content/uploads/2021/06/N%C3%A9voa-Amanhecer-Piraquara015Daniel-Castellano-9aee3c9b.jpg" alt="imagen do nacer do sol em meio a uma floresta">';
        window.document.body.style.background = '#ffe29f';

    } else if ( hora >= 12 && hora < 18){
      
        mostraHora.innerText = `Boa tarde, agora são ${hora}:${minutos}:${segundos} `;
        imagem.innerHTML = '<img class="imagem" src="https://cdn.pixabay.com/photo/2020/04/07/08/02/sunset-5012464_960_720.jpg" alt="imagen do sol sobre montanhas durante o intardecer">';
        window.document.body.style.background = '#f78717';
    } else {
     
        mostraHora.innerText = `Boa noite, agora são ${hora}:${minutos}:${segundos} `;
        imagem.innerHTML = '<img class="imagem" src="https://uploads.spiritfanfiction.com/historias/capas/202202/anoitecer-23603159-130220222044.jpg " alt="imagen do nacer do sol se pondo atras de uma arvore">';
        window.document.body.style.background = '#d7a077';
    }

    
}