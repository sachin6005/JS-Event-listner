console.log('loaded')
var btn = document.getElementById('clickme')

function btnClick(){
    var ranNum1 = Math.floor(Math.random()*255)
    var ranNum2 = Math.floor(Math.random()*255)
    var ranNum3 = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = "rgb("+ranNum1+","+ranNum2+","+ranNum3+")"
}

btn.addEventListener('click',btnClick)