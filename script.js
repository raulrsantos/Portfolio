document.getElementById("formacao").onclick = function() {
    var box = document.getElementById("box_form");
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none"; // Abre e fecha a box de formação/cursos
    }
}

document.getElementById("cursos").onclick = function() {
    var box = document.getElementById("box_cursos");
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

document.getElementById("cursos").onclick = function(event) {
    var box = document.getElementById("box_cursos");
    box.style.display = "block";
    event.stopPropagation(); // Previne que o clique no botão feche a caixa
}

document.addEventListener("click", function(event) {
    var box = document.getElementById("box_cursos");
    var button = document.getElementById("cursos");

    // Verifica se o clique foi fora da caixa e do botão
    if (box.style.display === "block" && !box.contains(event.target) && !button.contains(event.target)) {
        box.style.display = "none";
    }
});

// Previne que cliques dentro da caixa fechem a mesma
document.getElementById("box_cursos").onclick = function(event) {
    event.stopPropagation();
}

document.getElementById("formacao").onclick = function(event) {
    var box = document.getElementById("box_cursos");
    box.style.display = "block";
    event.stopPropagation();
}

document.addEventListener("click", function(event) {
    var box = document.getElementById("box_cursos");
    var button = document.getElementById("formacao");

    if (box.style.display === "block" && !box.contains(event.target) && !button.contains(event.target)) {
        box.style.display = "none";
    }
});

document.getElementById("box_cursos").onclick = function(event) {
    event.stopPropagation();
}
