const formValue = document.querySelector('.form');
const convert = document.querySelector('.convert');
const button = document.querySelector('.btn');
const answeringDisplay = document.querySelector('.answer');

//regex code for making sure that the user answers only numbers
const userPattern = /^[0-9]*$/

//what the regex code is validating
const validation = document.querySelector('.convert-from');


//this right here checks to make sure the user is inputing numbers and nothing else 
validation.addEventListener('keyup', (e)=>{
    if(userPattern.test(validation.value) === false){
        validation.style.borderColor = "red";
    } else{
        validation.style.borderColor = "green";
    }
})

const option = document.querySelector('select.form-control');

const otherOption = document.querySelector('#answer');

//This converts from fahrenheit to celcius
const fahrenToCelc = (temp)=>{
    return (temp - 32) * 5/9;
};

//This converts from fahrenheit to kelvin
const fahrenToKelv = (temp) =>{
    return (temp - 32) * 5/9 + 273.15;
};

//This converts from celcius to fahrenheit
const celcToFahren = (temp) =>{
    return (temp * 9/5) + 32;
};

//This converts from celcius to kelvin
const celcToKelv = (temp) =>{
    return (Number)(temp + 273.15);
};

//This converts from kelvin to fahrenheit
const kelvToFahren = (temp) =>{
    return (temp - 273.15) * 9/5 + 32;
};

//This converts from kelvin to celcius
const kelvToCelc = (temp) =>{
    return (temp - 273.15);
};


button.addEventListener('click', ()=>{
    const temp = validation.value;

    //making sure that the user enters a value in the space provided
    if(temp === "" || temp === null){
        alert("Please enter a value");
    }

    console.log(temp);
    if(option.value === 'Fahrenheit' && otherOption.value === 'Celcius'){
        const conversion = fahrenToCelc(temp).toFixed(2);
        answeringDisplay.style.display = 'block';
        answeringDisplay.classList.add('text-center');
        answeringDisplay.textContent = `${conversion} degrees Celcius`;
    } else if(option.value === 'Fahrenheit' && otherOption.value == 'Kelvin'){
        const conversion = fahrenToKelv(temp).toFixed(2);
        answeringDisplay.style.display = 'block';
        answeringDisplay.classList.add('text-center');
        answeringDisplay.textContent = `${conversion} degrees Kelvin`;
    } else if(option.value === 'Celcius' && otherOption.value === 'Fahrenheit'){
        const conversion = celcToFahren(temp).toFixed(2);
        answeringDisplay.style.display = 'block';
        answeringDisplay.classList.add('text-center');
        answeringDisplay.textContent = `${conversion} degrees Fahrenheit`;
    } else if(option.value === 'Celcius' && otherOption.value === 'Kelvin'){
        const conversion = celcToKelv(temp).toFixed(2);
        answeringDisplay.style.display = 'block';
        answeringDisplay.classList.add('text-center');
        answeringDisplay.textContent = `${conversion} degrees Kelvin`;
    } else if(option.value === 'Kelvin' && otherOption.value === 'Fahrenheit'){
        const conversion = kelvToFahren(temp).toFixed(2);
        answeringDisplay.style.display = 'block';
        answeringDisplay.classList.add('text-center');
        answeringDisplay.textContent = `${conversion} degrees Fahrenheit`;
    } else if(option.value === 'Kelvin' && otherOption.value === 'Celcius'){
        const conversion = kelvToCelc(temp).toFixed(2);
        answeringDisplay.style.display = 'block';
        answeringDisplay.classList.add('text-center');
        answeringDisplay.textContent = `${conversion} degrees Celcius`;
    }

});
