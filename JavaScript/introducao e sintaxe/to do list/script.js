//Cria um botão de fechamento e o coloca ao lado de cada item da lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Clique no botão de fechar para esconder o item atual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Adiciona um símbolo de "checked" ao clicar num item da lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Cria um novo item ao clicar no botão "Adicionar"
function newElement() {
    var li = document.getElement('li');
    var inputValue = document.getElementById('myInput');
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert('Você deve escrever algo');
    } else {
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


}