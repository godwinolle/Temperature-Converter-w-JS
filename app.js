//add mobile functionality

//see if you can fix this issue where you can't just switch an option and its conversion will
//just come up

//why does celcToKelv function have to be declared as a number before it works

//the input and output field where the user sees and enters numbers
const convertFrom = document.querySelector('.convert-FROM');
const convertTo = document.querySelector('.convert-to');

//the formula to show what the user for future calculations
const formula = document.querySelector('.formula');

//This converts from fahrenheit to celcius
const fahrenToCelc = (temp) => (temp - 32) * 5/9;

//This converts from fahrenheit to kelvin
const fahrenToKelv = (temp) => (temp - 32) * 5/9 + 273.15;

//This converts from celcius to fahrenheit
const celcToFahren = (temp) => (temp * 9/5) + 32;

//This converts from celcius to kelvin
const celcToKelv = (temp) => Number(temp) + 273.15;

//This converts from kelvin to fahrenheit
const kelvToFahren = (temp) => (temp - 273.15) * 9/5 + 32;

//This converts from kelvin to celcius
const kelvToCelc = (temp) => temp - 273.15;



convertFrom.addEventListener('keyup', () =>{
    const temp = convertFrom.value;
    let newTemp = convertTo.value;

    /* the values are grabbed in order to see which type of temperature the user 
    is refering to */
    const convertFromType = document.querySelector('.selection').value;
    const convertToType = document.querySelector('.answerSelection').value;

    //this is working
    if(convertFromType === 'fahrenheit' && convertToType === 'celcius'){
        newTemp = fahrenToCelc(temp).toFixed(2);
        formula.textContent = `(${temp}°F - 32) * 5/9 = ${newTemp}°C`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if(convertFromType === 'fahrenheit' && convertToType === 'kelvin'){
        newTemp = fahrenToKelv(temp).toFixed(2);
        formula.textContent = `(${temp}°F - 32) * 5/9 + 273.15 = ${newTemp}°K`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if(convertFromType === 'celcius' && convertToType === 'fahrenheit'){
        newTemp = celcToFahren(temp).toFixed(2);
        formula.textContent = `(${temp}°C * 9/5) + 32 = ${newTemp}°F`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if(convertFromType === 'celcius' && convertToType === 'kelvin'){
        console.log(convertFromType, convertToType);
        newTemp = celcToKelv(temp).toFixed(2);
        formula.textContent = `(${temp}°C + 273.15) = ${newTemp}°K`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if(convertFromType === 'kelvin' && convertToType === 'fahrenheit'){
        newTemp = kelvToFahren(temp).toFixed(2);
        formula.textContent = `(${temp}°K - 273.15) * 9/5 + 32 = ${newTemp}°F`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if(convertFromType === 'kelvin' && convertToType === 'celcius'){
        newTemp = kelvToCelc(temp).toFixed(2);
        formula.textContent = `${temp}°K - 273.15 = ${newTemp}°C`;
        convertTo.value = `${newTemp}`;
    }
});