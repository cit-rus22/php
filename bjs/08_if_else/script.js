let inputMin = parseInt(prompt('Минимальное знание числа для игры', '0'));
let inputMax = parseInt(prompt('Максимальное знание числа для игры', '100'));

// Проверка на мин/макс и NaN
minValue = parseInt(inputMin);
maxValue = parseInt(inputMax);
minValue = minValue || 0;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = maxValue || 100;
maxValue = (maxValue > 999) ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
const phraseRandom = Math.round(Math.random() * 3);
if (phraseRandom == 1) {
    answerField.innerText = `Вы загадали число ${answerNumber }`
} else if (phraseRandom == 2) {
    answerField.innerText = `Наверное это ${answerNumber }`
} else {
    answerField.innerText = `Думаю это число ${answerNumber }`
};

// Заново

document.getElementById('btnRetry').addEventListener('click', function () {
    inputMin = parseInt(prompt('Минимальное знание числа для игры', '0'));
    inputMax = parseInt(prompt('Максимальное знание числа для игры', '100'));
    minValue = parseInt(inputMin);
    maxValue = parseInt(inputMax);
    minValue = minValue || 0;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = maxValue || 100;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    orderNumber = 0;
    gameRun = true;
    let answerNumber = Math.floor((minValue + maxValue) / 2);
    const phraseRandom = Math.round(Math.random() * 3);
    if (phraseRandom == 1) {
        answerField.innerText = `Вы загадали число ${answerNumber }`
    } else if (phraseRandom == 2) {
        answerField.innerText = `Наверное это ${answerNumber }`
    } else {
        answerField.innerText = `Думаю это число ${answerNumber }`
    };

})


// Больше 
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 3);
            let answerText;
            if (phraseRandom == 1) {
                answerText = `Что-то не то\n\u{1F60E}`
            } else if (phraseRandom == 2) {
                answerText = `Что-то здесь не так \n\u{1F60E}`
            } else {
                answerText = `Где-то ошибка \n\u{1F60E}`
            };

            const answerPhrase = answerText;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            if (phraseRandom == 1) {
                answerField.innerText = `Вы загадали число ${answerNumber }`
            } else if (phraseRandom == 2) {
                answerField.innerText = `Наверное это ${answerNumber }`
            } else {
                answerField.innerText = `Думаю это число ${answerNumber }`
            };
        }
    }
})

// Меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue + 1 === maxValue) {
            const phraseRandom = Math.round(Math.random() * 3);
            let answerText;
            if (phraseRandom == 1) {
                answerText = `Что-то не то\n\u{1F60E}`
            } else if (phraseRandom == 2) {
                answerText = `Что-то здесь не так \n\u{1F60E}`
            } else {
                answerText = `Где-то ошибка \n\u{1F60E}`
            };

            const answerPhrase = answerText;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            if (phraseRandom == 1) {
                answerField.innerText = `Вы загадали число ${answerNumber }`
            } else if (phraseRandom == 2) {
                answerField.innerText = `Наверное это ${answerNumber }`
            } else {
                answerField.innerText = `Думаю это число ${answerNumber }`
            };
        }
    }
})

// Верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        let answerText;
        if (phraseRandom == 1) {
            answerText = `Я всегда угадываю\n\u{1F60E}`
        } else if (phraseRandom == 2) {
            answerText = `Я молодец? \n\u{1F60E}`
        } else {
            answerText = `Ты думал, что я тебя не переиграю? \n\u{1F60E}`
        };

        const answerPhrase = answerText;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})