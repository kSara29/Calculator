var textArea = document.getElementById('inputVal');
var historyCalc = document.getElementById('historyCalc');
var btnCalc = document.getElementsByClassName('btn');
var t = 0;
var items = [];
function pushArray(i) { items.push(i); }
function popArray() { items.shift(); }
function call() {
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
}
call();
var flag = true;
textArea.innerHTML = '0';
function onButtonClick(e) {
    if (e.target.innerHTML === 'c') {
        textArea.innerHTML = '0';
    }
    else if (e.target.innerHTML === '=') {
        if (textArea.innerHTML !== '0') {
            var result = textArea.innerHTML + '=' + +eval(textArea.innerHTML).toFixed(5);
            pushArray(result);
            if (t >= 3) {
                popArray();
            }
            historyCalc.innerHTML = '';
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                historyCalc.innerHTML += item + '<br>';
            }
            t++;
            textArea.innerHTML = '0';
            console.log(result);
        }
    }
    else if (textArea.innerHTML === '0') {
        if (e.target.innerHTML === '-' || e.target.innerHTML === '+' || e.target.innerHTML === '/' || e.target.innerHTML === '*') {
            textArea.innerHTML += e.target.innerHTML;
            flag = false;
        }
        else {
            textArea.innerHTML = e.target.innerHTML;
        }
    }
    else if (e.target.innerHTML === '-' || e.target.innerHTML === '+' || e.target.innerHTML === '/' || e.target.innerHTML === '*') {
        if (flag) {
            textArea.innerHTML += e.target.innerHTML;
            flag = false;
        }
    }
    else {
        textArea.innerHTML += e.target.innerHTML;
        flag = true;
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
