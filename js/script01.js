function calcular(){
    
    var nomeF = document.getElementById("nome").value;
    document.getElementById("nomeM").innerHTML = `O nome do aluno é: ${nomeF}`;

    var n1 = parseInt(document.getElementById("nota1").value);
    document.getElementById("nota01").innerHTML = `A nota do 1ºBimestre é: ${n1}`;
    
    var n2 = parseInt(document.getElementById("nota2").value);
    document.getElementById("nota02").innerHTML = `A nota do 2ºBimestre é: ${n2}`;
    
    var n3 = parseInt(document.getElementById("nota3").value);
    document.getElementById("nota03").innerHTML = `A nota do 3ºBimestre é: ${n3}`;




    var mf = ((n1 + n2 + n3)/3).toFixed(2);
    document.getElementById("mf").innerHTML = `A média final é: ${mf}`;

    var maior = Math.max(n1, n2, n3);
    document.getElementById("maior_nota").innerHTML = `A maior nota dele é: ${maior}`;

    var menor = Math.min(n1, n2, n3);
    document.getElementById("menor_nota").innerHTML = `A menor nota dele é: ${menor}`;

    var conceito;
    if(mf >= 90){
        conceito = "A";
        document.getElementById("conceito").innerHTML = `O conceito do aluno é: ${conceito} <br>Ele esta: <span id="aprovado">Aprovado!!</span>`;
    } else if(mf >= 75 && mf <90) {
        conceito = "B";
        document.getElementById("conceito").innerHTML = `O conceito do aluno é: ${conceito}<br>Ele esta: <span id="aprovado">Aprovado!!</span>`;
    } else if(mf >= 60 && mf <75) {
        conceito = "C";
        document.getElementById("conceito").innerHTML = `O conceito do aluno é: ${conceito}<br>Ele esta: <span id="recuperacao">Recuperação!!</span>`;
    } else if(mf >= 40 && mf <60) {
        conceito = "D";
        document.getElementById("conceito").innerHTML = `O conceito do aluno é: ${conceito}<br>Ele esta: <span id="reprovado">Reprovado!!</span>`;
    } else if(mf>=0 && mf<40){
        conceito = "E";
        document.getElementById("conceito").innerHTML = `O conceito do aluno é: ${conceito}<br>Ele esta: <span id="reprovado">Reprovado!!</span>`;
    }
}