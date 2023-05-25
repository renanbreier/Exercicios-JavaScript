function alteraCorDiv(){
    const div = document.querySelector("#muda_cor");

    if(div.classList.contains("amarelo")){
        div.classList.remove("amarelo");
        div.classList.add("vermelho");
    }

    else{
        div.classList.remove("vermelho");
        div.classList.add("amarelo");
    }
}

function init(){
    const btn = document.getElementById("btn_cor");
    btn.onclick = alteraCorDiv;
    // btn.addEventListener("click", func)

    const div = document.querySelector("#muda_cor");
    div.addEventListener("mouseup", function (event){alert(event.target.classList)});

}

window.onload = init;