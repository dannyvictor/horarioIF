function filterFunction(n,i) {
    var input, filter, ul, li, p, i;
    input = document.getElementById(i);
    filter = input.value.toUpperCase();
    div = document.getElementById(n);
    p = div.getElementsByTagName("p");
    for (i = 0; i < p.length; i++) {
        if (p[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "none";
        }
    }
}

function Botao(professor) {
  var classes = document.getElementsByClassName("dany");
  var i, davez;
  for (i = 0; i < classes.length; i++){
    davez = classes[i];
    if (davez.style.display != "none"){
      document.getElementById(davez.id).style.display = "none";
    }
  }
    document.getElementById(professor).style.display = "block";
}

function Professor(){
       document.getElementById('turmas').style.display = "none";
       document.getElementById('professores').style.display = "block";
}

function Turma(){
       document.getElementById('professores').style.display = "none";
       document.getElementById('turmas').style.display = "block";
}
