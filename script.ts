let textArea = document.getElementById('inputVal');
let historyCalc = document.getElementById('historyCalc')
let btnCalc = document.getElementsByClassName('btn')
let t: number = 0
let items: string[] = []

function pushArray(i: string):void {items.push(i);}
function popArray():void {items.shift();}
function call(): void{
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
}
call();
let flag: boolean = true
textArea.innerHTML = '0'
function onButtonClick(e) {
    if (e.target.innerHTML === 'c') {
        textArea.innerHTML = '0';
    } else if (e.target.innerHTML === '=') {
        if(textArea.innerHTML !== '0'){
            let result = textArea.innerHTML + '=' + +eval(textArea.innerHTML).toFixed(5);
            pushArray(result)
            if(t>=3){
                popArray()
            }
            historyCalc.innerHTML = ''
            for(let item of items){
                historyCalc.innerHTML += item + '<br>';
            }
            t++
            textArea.innerHTML = '0'
            console.log(result)
        }
    } else if (textArea.innerHTML === '0') {
        if(e.target.innerHTML === '-' || e.target.innerHTML === '+' || e.target.innerHTML === '/' || e.target.innerHTML === '*'){
            textArea.innerHTML += e.target.innerHTML;
            flag = false
        }
        else{
            textArea.innerHTML = e.target.innerHTML
        }
    } else if (e.target.innerHTML === '-' || e.target.innerHTML === '+' || e.target.innerHTML === '/' || e.target.innerHTML === '*'){
        if(flag) {
            textArea.innerHTML += e.target.innerHTML;
            flag = false
        }
    } else {
        textArea.innerHTML += e.target.innerHTML;
        flag = true
    }
}




/*
    textArea.onfocus = function():void {
        if (textArea.innerHTML === '0') textArea.innerHTML = ''
    };
    textArea.onblur = function():void {
        if (textArea.innerHTML === '') textArea.innerHTML = '0'
        call();
    };
    textArea.onkeydown=function(e):void {
        if (e.keyCode === 13) {
            let res = textArea.innerHTML + '=' + +eval(textArea.innerHTML);
            textArea.innerHTML = '0'
            console.log(res)
            pushArray(res)
        }
        else{
            textArea.innerHTML += e.key
            console.log(e.key)
        }
    }
    */