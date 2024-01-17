let atividade = document.querySelector("input#atividade")
let nota = document.querySelector("input#nota")
let form = document.querySelector("form")
let tbody= document.querySelector("#tbody")
let emoji_aprov = `<img src="images/aprovado.png" alt="emoji feliz">`
let emoji_reprov = `<img src="images/reprovado.png" alt="emoji triste"></img>`
let medias = document.querySelector("#medias")
let resulFinal = document.querySelector("#span")
let notas = 0
let contagem = 0
let res=0
let aprovado=`<span class="resultado aprovado">Aprovado</span>`
let reprovado=`<span class="resultado reprovado">Reprovado</span>`
var tfoot = document.querySelector("tfoot")
let array_Atvdd = []


form.addEventListener("submit", (evt)=>{
    evt.preventDefault()

    if(array_Atvdd.includes(atividade.value)){
        alert("A atividade já foi adicionada")
    } else{
        let linha = `<tr><td>${atividade.value}</td><td>${nota.value}</td>`
    linha+=`<td>${nota.value >=7 ? emoji_aprov : emoji_reprov}</td></tr>`

    tbody.innerHTML+=linha

    clcMedia()

    verif_Resultado()
    }
    array_Atvdd.push(atividade.value)

    atividade.value=""
    nota.value=""
    
    console.log(array_Atvdd)
})

function clcMedia(){
    notas+=Number(nota.value)
    contagem++

    res = notas/contagem

    medias.innerHTML=res.toFixed(1)
}

function verif_Resultado(){
    if(res >= 7){
        resulFinal.innerHTML=aprovado
    } else{
        resulFinal.innerHTML=reprovado
    }
}