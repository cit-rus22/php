let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_multi').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multi';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_eq').addEventListener('click', function () {
    switch (operation) {
        case 'sum':
            const resultSum = lastOperand + parseInt(inputWindow.value);
            operation = null;
            lastOPerand = 0;
            inputWindow.value = resultSum;
            break;
        case 'def':
            const resultDef = lastOperand - parseInt(inputWindow.value);
            operation = null;
            lastOPerand = 0;
            inputWindow.value = resultDef;
            break;
        case 'multi':
            const resultMulti = lastOperand * parseInt(inputWindow.value);
            operation = null;
            lastOPerand = 0;
            inputWindow.value = resultMulti;
            break;
            //
        case 'div':
            const resultDiv = lastOperand / parseInt(inputWindow.value);
            operation = null;
            lastOPerand = 0;
            inputWindow.value = resultDiv;
            break;
    
    }
})
