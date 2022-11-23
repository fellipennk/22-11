const inputTarefa=document.querySelector('.input-tarefa');
const btnTarefa=document.querySelector('.btn-tarefa');
const tarefas=document.querySelector('.tarefas');

function criaLi(){
    const li=document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress',function (e){
     if (e.keycode===13){
        if(!inputTarefa.value)return;
        criatarefa(inputTarefa.value);
     }

});

function limpaInput(){

    inputTarefa.value="";
    inputTarefa.focus();
}
function criarBotaoApagar(li){

    li.innerText+="";
    const botaoApagar=document.createElement('button');
    botaoApagar.innerText='Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa');
    li.appendChild(botaoApagar);
}
