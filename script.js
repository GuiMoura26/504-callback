let DiaSemana =prompt("digite um dia")


let batatinhaFritaDoMc = (resolv, reject) =>{
    if(DiaSemana == "quartou"){
        resolv("acerto mizeravi");
    }
    else{
        reject("ERRRRRRRRRROOOOOOOOOOOUUUUUUUUUU");
    }
}

let promessa = new Promise(batatinhaFritaDoMc);

promessa
    .then(console.log)
    .catch(console.log)


// let lista = document.querySelector("ol");
// let corpo = document.querySelector("body");
// let raizes = [
//     {nome : "batata"},
//     {nome : "Mandioca"},
//     {nome : "Rabanete"}
// ];


// let imprimirComidas = (cor) =>{
//     for(let raiz of raizes){
//         lista.innerHTML += `<li>${raiz.nome}</li>`
//     }
//     corpo.style.backgroundColor = cor;
// }


// let adicionarComida = (callback) =>{
//     let EscolheUmaCor = prompt("Digite uma cor em ingleS");
//     setTimeout (() => {
//         raizes.push ({nome:"Gengibre"});
//         callback(EscolheUmaCor);
//     }, 2000);
// }

// adicionarComida(imprimirComidas);