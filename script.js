document.getElementById("formacao").onclick = function(event) {
    var box = document.getElementById("box_form");
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
    event.stopPropagation(); // Previne que o clique no botão feche a caixa
}

document.getElementById("cursos").onclick = function(event) {
    var box = document.getElementById("box_cursos");
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
    event.stopPropagation(); // Previne que o clique no botão feche a caixa
}

document.addEventListener("click", function(event) {
    var boxForm = document.getElementById("box_form");
    var buttonForm = document.getElementById("formacao");
    var boxCursos = document.getElementById("box_cursos");
    var buttonCursos = document.getElementById("cursos");

    // Verifica se o clique foi fora da caixa e do botão
    if (boxForm.style.display === "block" && !boxForm.contains(event.target) && !buttonForm.contains(event.target)) {
        boxForm.style.display = "none";
    }
    if (boxCursos.style.display === "block" && !boxCursos.contains(event.target) && !buttonCursos.contains(event.target)) {
        boxCursos.style.display = "none";
    }
});

document.getElementById("box_form").onclick = function(event) {
    event.stopPropagation();
}

document.getElementById("box_cursos").onclick = function(event) {
    event.stopPropagation();
}