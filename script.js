const frm = document.querySelector("form")    
const dvQuadro = document.querySelector("#divQuadro")


frm.soma.addEventListener("click", (e) => {
    e.preventDefault()
    

    var num1 = Number(document.getElementById("valor1").value);
    var num2 = Number(document.getElementById("valor2").value);
    const resultados = num1 + num2
    const h5 = document.createElement("h5")       // cria o elemento HTML h5
    const texto = document.createTextNode(num1 + ' + '+ num2 + ': ' + resultados) // cria um texto
    h5.appendChild(texto)                         // define que texto será filho de h5
    dvQuadro.appendChild(h5)   

    frm.valor1.value = ""                       // limpa o campo de edição
    frm.valor2.value = ""
    frm.valor1.focus()                          // joga o cursor neste campo
})



frm.sub.addEventListener("click", (e) => {
    e.preventDefault()
    

    var num1 = Number(document.getElementById("valor1").value);
    var num2 = Number(document.getElementById("valor2").value);
    const resultados = num1 - num2
    const h5 = document.createElement("h5")       // cria o elemento HTML h5
    const texto = document.createTextNode(num1 + ' - '+ num2 + ': ' + resultados) // cria um texto
    h5.appendChild(texto)                         // define que texto será filho de h5
    dvQuadro.appendChild(h5)   


    frm.valor1.value = ""                       // limpa o campo de edição
    frm.valor2.value = ""
    frm.valor1.focus()                          // joga o cursor neste campo
})

frm.mult.addEventListener("click", (e) => {
    e.preventDefault()
    

    var num1 = Number(document.getElementById("valor1").value);
    var num2 = Number(document.getElementById("valor2").value);
    const resultados = num1 * num2
    const h5 = document.createElement("h5")       // cria o elemento HTML h5
    const texto = document.createTextNode(num1 + ' * '+ num2 + ': ' + resultados) // cria um texto
    h5.appendChild(texto)                         // define que texto será filho de h5
    dvQuadro.appendChild(h5)   

    frm.valor1.value = ""                       // limpa o campo de edição
    frm.valor2.value = ""
    frm.valor1.focus()                          // joga o cursor neste campo
})

frm.div.addEventListener("click", (e) => {
    e.preventDefault()
    

    var num1 = Number(document.getElementById("valor1").value);
    var num2 = Number(document.getElementById("valor2").value);
    const resultados = num1 / num2
    const h5 = document.createElement("h5")       
    const texto = document.createTextNode(num1 + ' / '+ num2 + ': ' + resultados) 
    h5.appendChild(texto)                         
    dvQuadro.appendChild(h5)   

    frm.valor1.value = ""                       // limpa o campo de edição
    frm.valor2.value = ""
    
})

frm.exp.addEventListener("click", (e) => {
    e.preventDefault()
    

    var num1 = Number(document.getElementById("valor1").value);
    var num2 = Number(document.getElementById("valor2").value);
    const resultados = num1 ** num2
    const h5 = document.createElement("h5")       // cria o elemento HTML h5
    const texto = document.createTextNode(num1 + ' ^ '+ num2 + ': ' + resultados) // cria um texto
    h5.appendChild(texto)                         // define que texto será filho de h5
    dvQuadro.appendChild(h5)   

    frm.valor1.value = ""                       // limpa o campo de edição
    frm.valor2.value = ""
    frm.valor1.focus()                          // joga o cursor neste campo
})

frm.limpa.addEventListener("click", (e) => {
    e.preventDefault()
    // var form = document.getElementById('form');
    frm.reset();
})