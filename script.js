const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(arr, titulo){
const display = document.getElementById("display");
display.innerHTML = ""

const tituloKata = document.createElement("h2");
tituloKata.innerText = titulo;

// const botoes = document.createElement("button")
// botoes.innerText = titulo

const paragrafoResultado = document.createElement("p");
paragrafoResultado.innerText = arr;

display.appendChild(tituloKata);
display.appendChild(paragrafoResultado);

}




function kata1(){
    const output = []
    for(let contador = 1; contador<=25; contador++){
        output.push(contador)   
    }
    // console.log(output)
    return showResults(output, "Kata 1")

}
const botaoKata1 = document.getElementById("Kata1")

botaoKata1.addEventListener("click", kata1)

function kata2(){
    let n = 0
    const output = []
    for(let contador = 25; contador>n; contador--){
        output.push (contador)
    }
    return showResults(output, "Kata 2")
}
const botaoKata2 = document.getElementById("Kata2")
botaoKata2.addEventListener("click", kata2)


function kata3(){
    let n = -25
    const output =[]
    for(let contador = -1; contador>=n; contador--){
        output.push(contador)
    }
    return showResults(output, "Kata 3")
}

const botaoKata3 = document.getElementById("Kata3")
botaoKata3.addEventListener("click", kata3)

function kata4(){
    let n = -1
    const output =[]
    for(let contador = -25; contador<=n; contador++){
        output.push(contador)
    }
    return showResults(output, "Kata 4")
}
const botaoKata4 = document.getElementById("Kata4")
botaoKata4.addEventListener("click", kata4)


function kata5(){
    const output =[]
    let contador = 25                
 while (contador>= -25){
     if(contador % 2 != 0){
    output.push(contador)  }
  contador--}
    
return showResults(output, "Kata 5")
}
    const botaoKata5 = document.getElementById("Kata5")
    botaoKata5.addEventListener("click", kata5)
    

function kata6(){
    const output =[]
    let contador = 1                
 while (contador<= 100){
     if(contador % 3 === 0){
        output.push(contador)  
  }
  contador++}
  return showResults(output, "Kata 6")
}
const botaoKata6 = document.getElementById("Kata6")
 botaoKata6.addEventListener("click", kata6)


function kata7(){
    const output =[]
    let contador = 1                
 while (contador<= 100){
     if(contador % 7 === 0){
     output.push(contador)     
  }
  contador++}
  return showResults(output, "Kata 7")    
}
const botaoKata7 = document.getElementById("Kata7")
 botaoKata7.addEventListener("click", kata7)

function kata8(){
    const output =[]
    let contador = 100                
 while (contador>= 1){
     if(contador % 7 === 0 || contador % 3 === 0){
      output.push(contador)       
  }
  contador--}
  return showResults(output, "Kata 8")    
    }
    const botaoKata8 = document.getElementById("Kata8")
    botaoKata8.addEventListener("click", kata8)

function kata9(){
    const output =[]
    let contador = 1                
 while (contador<= 100){
     if(contador % 2 != 0 & contador % 5 === 0){
    output.push(contador)     
  }
  contador++}
  return showResults(output, "Kata 9")  
  }
  const botaoKata9 = document.getElementById("Kata9")
  botaoKata9.addEventListener("click", kata9)

function kata10(){
    const output =[]

    for(let contador = 0; contador<sampleArray.length; contador++){
        output.push(sampleArray[contador])
    }
    return showResults(output, "Kata 10")  
}
const botaoKata10 = document.getElementById("Kata10")
botaoKata10.addEventListener("click", kata10)

function kata11(){
    const output =[]
    for(let contador = 0; contador<sampleArray.length; contador++){
    if(sampleArray[contador] % 2 === 0){
        output.push(sampleArray[contador])
    }
}
return showResults(output, "Kata 11")  
}
const botaoKata11 = document.getElementById("Kata11")
botaoKata11.addEventListener("click", kata11)


function kata12(){
    const output =[]
    for(let contador = 0; contador<sampleArray.length; contador++){
    if(sampleArray[contador] % 2 != 0){
        output.push(sampleArray[contador])
    }   
}
return showResults(output, "Kata 12") 
}
const botaoKata12 = document.getElementById("Kata12")
botaoKata12.addEventListener("click", kata12)

function kata13(){
    const output =[]
    for(let contador = 0; contador<sampleArray.length; contador++){
    if(sampleArray[contador] % 8 === 0){
        output.push(sampleArray[contador])
    }
}
return showResults(output, "Kata 13") 
}
const botaoKata13 = document.getElementById("Kata13")
botaoKata13.addEventListener("click", kata13)


function kata14(){
    const output =[]

    for(let contador = 0; contador<sampleArray.length; contador++){
        output.push(sampleArray[contador]**2)
}
return showResults(output, "Kata 13") 
}
const botaoKata14 = document.getElementById("Kata14")
botaoKata14.addEventListener("click", kata14)


function kata15(){
    const output =[]
    let result = 0
    for(let contador = 0; contador<sampleArray.length; contador++){
        result += sampleArray[contador]
}
output.push(result)
return showResults(output, "Kata 15") 
}
const botaoKata15 = document.getElementById("Kata15")
botaoKata15.addEventListener("click", kata15)

function kata16(){
    const output =[]
    let result = 0
    for(let contador = 0; contador<sampleArray.length; contador++){  
      result = sampleArray.join("")
    }
    output.push(result)
    return showResults(output, "Kata 16") 
}
const botaoKata16 = document.getElementById("Kata16")
botaoKata16.addEventListener("click", kata16)


function kata17(){
    const output =[]
    let min = sampleArray[0]
    for(contador=0; contador <= min; contador++){
        if(min > sampleArray[contador]){
            min = sampleArray[contador]
        }
    }
    output.push(min)
    return showResults(min, "Kata 17")
}
const botaoKata17 = document.getElementById("Kata17")
botaoKata17.addEventListener("click", kata17)


function kata18(){
    const output =[]
    let max = 0
    for(contador=0; contador <= max; contador++){
        if(max < sampleArray[contador]){
            max = sampleArray[contador]
        } 
     output.push(max)
    }
   
    return showResults(max, "Kata 18")
}
const botaoKata18 = document.getElementById("Kata18")
botaoKata18.addEventListener("click", kata18)
