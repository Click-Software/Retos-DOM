const btnGenerate = document.getElementById("btn-generate");
btnGenerate.addEventListener("click", generatePassword);

function intRandom(min, max){
    let rnd = Math.random();
    return Math.floor(rnd*(max -  min + 1))  + min;
}
  
const caracteres = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@#$%&*?+=-/%"
];
  
function generatePassword(){
    let largo = intRandom(8,15);
    let pass = new Array(largo);
    pass.fill('');
    pass.forEach((v,i,p)=>{
        let lista = caracteres[intRandom(0, caracteres.length-1)]; 
        let indice = intRandom(0, lista.length-1);
        p[i] = lista[indice]; 
    })
    let password = pass.join('');
    document.getElementById('input-pass').value = password;
}

document.getElementById('btn-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('input-pass').value);
});