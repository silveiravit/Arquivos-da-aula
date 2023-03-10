var campo = [
    document.getElementById('peso'),
    document.getElementById('altura')
]

var btn = document.getElementById('btn')
var res = document.getElementById('res-img')
var img = document.createElement('img')

btn.addEventListener("click", calcular)

function calcular(){
    
    let imc = Number(campo[0].value)/(Number(campo[1].value)*Number(campo[1].value))

    res.style.backgroundColor = '#1657a1'
    res.style.padding = '10px'
    res.style.width = '400px'    
    res.style.borderRadius = '10px'
    res.style.margin = 'auto'
    res.style.marginTop = '20px'
    res.style.textAlign = 'center'
    res.style.color = 'white'
    res.style.font = 'normal 15px arial'
    res.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.384)'
    
    if(campo[0].value == "" || campo[1].value == ""){
        alert("Os dados não foram inseridos corretamente.")
        location.reload()
    }
    else if(campo[0].value < 1){
        alert("Peso inválido.")
        location.reload()
    }
    else if(campo[1].value > 3){
        alert("Altura inválida.")
        location.reload()
    }
    else if(imc < 16.9){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está muito abaixo do peso.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
    else if(imc >= 17 && imc <= 18.4){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está abaixo do peso.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
    else if(imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está no peso normal.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
    else if(imc >= 25 && imc <= 29.9){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está levemente acima do peso.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
    else if(imc >= 30 && imc <= 34.9){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está com obesidade grau 1.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
    else if(imc >= 35 && imc <= 40){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está com obesidade grau 2.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
    else if(imc > 40){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está com obesidade grau 3.`

        img.src = 'tabela-imc.png'
        img.style.width = '300px'
        img.style.margin = '10px'

        res.appendChild(img)
    }
}