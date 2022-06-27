// Declare Variables
let disp = document.getElementById("disp");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");

const numC = document.getElementById("clear");
const numA = document.getElementById("numA");
const numS = document.getElementById("numS");
const numM = document.getElementById("numM");
const numD = document.getElementById("numD");
const equal = document.getElementById("equals");

let history = document.getElementsByClassName('hist');

count1 = '';
count2 = '';
const Total = [];
let sum = 0;
let sub = 0;
let mul = 1;
let div = 0;
let i = 0;
let n = 0;
let flag = '';

// reset variables with "C"
numC.addEventListener("click", function () {
    disp.innerHTML = "0";
    count1 = '';
    count2 = '';
    const Total = [];
    sum = 0;
    sub = 0;
    mul = 1;
    div = 0;
    i = 0;
    flag = '';
})

// Numbers define and Display
num1.addEventListener("click", function () {
    count1 += "1";
    disp.innerHTML = (count2 + count1);
})
num2.addEventListener("click", function () {
    count1 += "2";
    disp.innerHTML = (count2 + count1);
})
num3.addEventListener("click", function () {
    count1 += "3";
    disp.innerHTML = (count2 + count1);
})
num4.addEventListener("click", function () {
    count1 += "4";
    disp.innerHTML = (count2 + count1);
})
num5.addEventListener("click", function () {
    count1 += "5";
    disp.innerHTML = (count2 + count1);
})
num6.addEventListener("click", function () {
    count1 += "6";
    disp.innerHTML = (count2 + count1);
})
num7.addEventListener("click", function () {
    count1 += "7";
    disp.innerHTML = (count2 + count1);
})
num8.addEventListener("click", function () {
    count1 += "8";
    disp.innerHTML = (count2 + count1);
})
num9.addEventListener("click", function () {
    count1 += "9";
    disp.innerHTML = (count2 + count1);
})
num0.addEventListener("click", function () {
    count1 += "0";
    disp.innerHTML = (count2 + count1);
})
// Plus
numA.addEventListener("click", function () {
    Total[i] = Number(count1);
    sum += Total[i];
    console.log(sum);
    count1 += " + ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    // i++;
    flag = "+";
})
// Minus
numS.addEventListener("click", function () {
    Total[i] = Number(count1);
    sub = Total[i];
    console.log(sub);
    count1 += " - ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    // i++;
    flag = "-";
})
// Multiply
numM.addEventListener("click", function () {
    Total[i] = Number(count1);
    mul *= Total[i];
    console.log(mul);
    count1 += " * ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    // i++;
    flag = "*";
})

// Divide
numD.addEventListener("click", function () {
    Total[i] = Number(count1);
    div = Total[i];
    console.log(div);
    count1 += " / ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    // i++;
    flag = "/";
})

//Equal Button
equal.addEventListener("click", function () {

    if(flag === "+")
    {
        Total[i] = Number(count1);
        sum += Total[i];
        // console.log(sum);  
        disp.innerHTML = sum;
        if(n<10){
            history[n].innerHTML = sum;
            n++;
        }
    }
    else if(flag === "-")
    {
        Total[i] = Number(count1);
        sub -= Total[i];
        // console.log(sub);  
        disp.innerHTML = sub;
        if(n<10){
            history[n].innerHTML = sub;
            n++;
        }
    }
    else if(flag === "*")
    {
        Total[i] = Number(count1);
        mul *= Total[i];
        // console.log(mul);  
        disp.innerHTML = mul;
        if(n<10){
            history[n].innerHTML = mul;
            n++;
        }
    }

    else if(flag === "/")
    {
        Total[i] = Number(count1);
        div /= Total[i];
        // console.log(div);  
        disp.innerHTML = div;
        if(n<10){
            history[n].innerHTML = div;
            n++;
        }
    }

})



