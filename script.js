let name = prompt("Olá, qual o seu nome? ")

let n1 = Number(prompt(name + ", me fala um número?"))
let n2 = Number(prompt("Me fala outro numero?  "))

function calculator(n1, n2) {
    let sun = n1 + n2
    let sub = n1 - n2 
    let mult = n1 * n2 
    let div = n1 / n2 
    let resdiv = n1 % n2

    function oddOrEven(sun) {
        if(sun % 2 == 0) {
            alert("A soma dos dois números é par")
        }else{
            alert("A soma dos dois números é impar")
        }
    }

    alert("A soma dos dois números; " + sun)
    alert("A subtração dos dois números; " + sub)
    alert("A multiplicação dos dois números; " + mult)
    alert("A divisão dos dois números; " + div.toFixed(2))
    alert("O resto da divisão dos dois números; " + resdiv)
    alert(n1 == n2 ? "Os dois números inseridos são iguais" : "Os dois números inseridos são diferentes")
    oddOrEven(sun)
}

calculator(n1, n2)