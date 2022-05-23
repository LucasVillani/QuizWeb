 function validar(){

        if(
        quiz.questao1[0].checked==false &&
        quiz.questao1[1].checked==false &&
        quiz.questao1[2].checked==false &&
        quiz.questao1[3].checked==false){

        alert("Questão 1 sem resposta!");

        return false;

        }

        else if(
        quiz.questao2[0].checked==false &&
        quiz.questao2[1].checked==false &&
        quiz.questao2[2].checked==false &&
        quiz.questao2[3].checked==false){

         alert("Questão 2 sem resposta!");

        return false;
        }

                var respostasCorretas = 0;

        if(quiz.questao1[0].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao2[2].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao3[1].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao4[2].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao5[3].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao6[2].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao7[0].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao8[2].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao9[3].checked==true) {
        respostasCorretas++;
        }

        if(quiz.questao10[2].checked==true) {
        respostasCorretas++;
        }


document.getElementsByClassName("questao1")[0].style.color="green";
document.getElementsByClassName("questao2")[2].style.color="green";
document.getElementsByClassName("questao3")[1].style.color="green";
document.getElementsByClassName("questao4")[2].style.color="green";
document.getElementsByClassName("questao5")[3].style.color="green";
document.getElementsByClassName("questao6")[2].style.color="green";
document.getElementsByClassName("questao7")[0].style.color="green";
document.getElementsByClassName("questao8")[2].style.color="green";
document.getElementsByClassName("questao9")[3].style.color="green";
document.getElementsByClassName("questao10")[2].style.color="green";




        for (var i=0; i<4;i++){
        if (quiz.questao1[i].checked==true && i != 0){document.getElementsByClassName("questao1")[i].style.color="red"}
        if (quiz.questao2[i].checked==true && i != 2){document.getElementsByClassName("questao2")[i].style.color="red"}
        if (quiz.questao3[i].checked==true && i != 1){document.getElementsByClassName("questao3")[i].style.color="red"}
        if (quiz.questao4[i].checked==true && i != 2){document.getElementsByClassName("questao4")[i].style.color="red"}
        if (quiz.questao5[i].checked==true && i != 3){document.getElementsByClassName("questao5")[i].style.color="red"}
        if (quiz.questao6[i].checked==true && i != 2){document.getElementsByClassName("questao6")[i].style.color="red"}
        if (quiz.questao7[i].checked==true && i != 0){document.getElementsByClassName("questao7")[i].style.color="red"}
        if (quiz.questao8[i].checked==true && i != 2){document.getElementsByClassName("questao8")[i].style.color="red"}
        if (quiz.questao9[i].checked==true && i != 3){document.getElementsByClassName("questao9")[i].style.color="red"}
        if (quiz.questao10[i].checked==true && i != 2){document.getElementsByClassName("questao10")[i].style.color="red"}

        }


var parent = "";
var child = "";
for (i =39; i > -1;i--){
parent = document.getElementsByClassName('termino')[i];
child = document.getElementsByClassName('radio')[i];
parent.removeChild(child);
}

document.getElementById("botao").removeChild(document.getElementsByClassName("botao")[1]);
document.getElementById("botao").removeChild(document.getElementsByClassName("botao")[0]);



var coment = "";

if(respostasCorretas == 10){
coment = "Brilhante, você acertou todas as alternativas!!!";
}
else if(respostasCorretas > 6){
coment = "Muito bom,você não está para brincadeira!!!";
}
else if(respostasCorretas >4){
coment = "Regular, eu espera mais...";
}
else{
coment = "Que fraco!!!";
}

document.getElementById('quadroResultado').innerHTML="<article id='quadro'>Você acertou <h2>"+ respostasCorretas+"</h2> alternativa(s) de 10 possíveis.<br><h3>"+coment+"</h3></article>"

document.getElementById('quadro2').innerHTML ='Reveja suas respostas e compare-as';

document.getElementById("inicio").scrollIntoView();


        }