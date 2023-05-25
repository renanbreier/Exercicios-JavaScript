function init(){
    const primeiroLi = document.querySelector("ul > li");
    alert(primeiroLi.textContent)

    const todosLi = document.querySelectorAll("ul > li");
    
    texto = "";
    // for(let i = 0; i < todosLi.length; i++) {
    //     texto = texto + todosLi[i].textContent + "\n";
    // }

    todosLi.forEach((item) => {
        texto += item.textContent + "\n";
    });

    alert(texto);
}

window.onload = init;