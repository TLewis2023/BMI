window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculatebmi)
}

function calculatebmi(){
const Height = document.querySelector('#Height').value;
const Weight = document.querySelector('#Weight').value;
const result = document.querySelector('#result');

if ( Height || isNaN(Height) || Height < 0){
    result.innerText = "Please provide a valid height";
    return;
}else if ( Weight || isNaN(Weight) || Weight < 0){
    result.innerText = "Please provide a valid weight";
    return;
}

const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);

if(bmi < 18.5){
    result.innerText = `Under Weight: ${bmi}`;
}else if (bmi >= 18.5 && bmi < 24.9){
    result.innerText = `Normal: ${bmi}`;
}else if(bmi >= 25 && bmi < 29.9){
    result.innerText = `Overweight: ${bmi}`;
}else if (bmi >= 30 && bmi < 34.9){
    result.innerText = `Obesity Type I: ${bmi}`;
}else if (bmi >= 35 && bmi < 39.9){
    result.innerText = `Obesity Type II: ${bmi}`;
} else {
    result.innerText = `Extreme Normal: ${bmi}`;
}

}