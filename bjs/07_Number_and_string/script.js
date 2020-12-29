let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

inputWindow.value = '0';


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

// Цифры

document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
    inputWindow.value += '0';
})

// Операции

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    console.log(lastOperand);
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_multi').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multi';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_dot').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    if (inputWindow.value.includes('.') == false) {
        inputWindow.value += ".";}
})

document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
    if (operation === 'minus') {
        const result = -lastOperand;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqrt';
    const resultSqrt = Math.sqrt(lastOperand);
    let tryOutput1 = (`Корень из ${lastOperand} равен ${resultSqrt}`);
    document.querySelector('#duplicateField').innerHTML = ` ${tryOutput1}`;
    operation = null;
    lastOperand = 0;
    inputWindow.value = resultSqrt;
})

// Равно

document.getElementById('btn_eq').addEventListener('click', function () {
    switch (operation) {
        case 'sum':
            const resultSum = lastOperand + parseFloat(inputWindow.value);
            let tryOutput2 = (`${lastOperand} + ${inputWindow.value} = ${resultSum}`);
            document.querySelector('#duplicateField').innerHTML = ` ${tryOutput2}`;
            operation = null;
            console.log(lastOperand);
            lastOperand = 0;
            inputWindow.value = resultSum;
            break;
        case 'def':
            const resultDef = lastOperand - parseFloat(inputWindow.value);
            let tryOutput3 = (`${lastOperand} - ${inputWindow.value} = ${resultDef}`);
            document.querySelector('#duplicateField').innerHTML = ` ${tryOutput3}`;
            operation = null;
            lastOperand = 0;
            inputWindow.value = resultDef;
            break;
        case 'multi':
            const resultMulti = lastOperand * parseFloat(inputWindow.value);
            let tryOutput4 = (`${lastOperand} * ${inputWindow.value} = ${resultMulti}`);
            document.querySelector('#duplicateField').innerHTML = ` ${tryOutput4}`;
            operation = null;
            lastOperand = 0;
            inputWindow.value = resultMulti;
            break;
        case 'div':
            const resultDiv = lastOperand / parseFloat(inputWindow.value);
            let tryOutput5 = (`${lastOperand} / ${inputWindow.value} = ${resultDiv}`);
            document.querySelector('#duplicateField').innerHTML = ` ${tryOutput5}`;
            operation = null;
            lastOperand = 0;
            inputWindow.value = resultDiv;
            break;    
    }
})

