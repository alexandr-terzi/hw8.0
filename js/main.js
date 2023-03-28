// 1
document.write('1. ');
let a1 = [];

for (let i = 10; i <= 20; i++) {
    a1.push(i); 
}

document.write(a1.join(', '));
document.write('</br>');

// 2
document.write('2. ');
let a2 = [];

for (let i = 10; i <= 20; i++) {
    a2.push(i * i);
}

document.write(a2.join(', '));
document.write('</br>');

//3
document.write('3. ');
let a3 = [];

for (let i = 1; i <= 10; i++) {
    a3.push(`${i} * 7 = ${i * 7}`);
}

document.write(a3.join('</br>'));
document.write('</br>');

//4
document.write('4. ');
let a4 = [];
let sum4 = 0;

for (let i = 1; i <= 15; i++) {
    a4.push(i);
    sum4 = i + sum4;
}

document.write(`Сумма чисел от 1 до 15 = ${sum4}`);
document.write('</br>');

//5
document.write('5. ');
let a5 = [];
let multiplication = 1;

for (let i = 15; i <= 35; i++) {
    a5.push(i);
    multiplication *= i;
}

document.write(`Произведение чисел от 15 до 35 = ${multiplication}`);
document.write('</br>');

//6
document.write('6. ');
let a6 = [];
let sum6 = 0;

for (let i = 1; i <= 500; i++) {
    a6.push(i);
    sum6 = i + sum6;
}

document.write(`Среднее арифметическое чисел от 1 до 500 = ${sum6 / a6.length}`);
document.write('</br>');

//7
document.write('7. ');
let a7 = [];
let sum7 = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        a7.push(i);
        sum7 += i;
    }
}

document.write(`Сумма парных чисел в диапазоне от 30 до 80 = ${sum7}`);
document.write('</br>');

//8
document.write('8. ');
let a8 = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        a8.push(i);
    }
}

document.write(a8.join(', '));
document.write('</br>');

//9
document.write('9. ');
let number; 
let a9 = [];

do {
    number = +prompt('Enter number more then 0', '5');
} while (isNaN(number) || !number);

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        a9.push(i);
    }  
}

document.write(`Делители числа ${number}: ${a9.join(', ')}`);
document.write('</br>');

//10
document.write('10. '); 
let a10 = [];

for (let i = 1; i < a9.length; i++) {
    if (a9[i] % 2 == 0) {
        a10.push(a9[i]);
    }
}

document.write(`Количество парных делителей числа ${number}: ${a10.length}, а именно: (${a10.join(', ')})`);
document.write('</br>');

//11
document.write('11. '); 
let sum11 = 0

for (let i = 0; i < a10.length; i++) {
    sum11 += a10[i];
}

document.write(`Сумма парных делителей числа ${number}: ${sum11}`);
document.write('</br>');

//12
document.write('12. ');
document.write('</br>');
let a12 = [];
let b12 = [];

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        a12.push(`${j} * ${i} = ${i * j}`);
        
        if (j == 10) {
            a12.push('</br>');
        }
    }
}

document.write(a12.join(' '));
