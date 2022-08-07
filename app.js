// https://calculator.swiftutors.com/magnetic-field-strength-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const magneticFieldStrengthAroundWireRadio = document.getElementById('magneticFieldStrengthAroundWireRadio');
const currentRadio = document.getElementById('currentRadio');
const distancefromWireRadio = document.getElementById('distancefromWireRadio');

let magneticFieldStrengthAroundWire;
const k = 2e-7;
let current = v1;
let distancefromWire = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

magneticFieldStrengthAroundWireRadio.addEventListener('click', function() {
  variable1.textContent = '(i) Current (amp)';
  variable2.textContent = '(L) Distance from Wire (m)';
  current = v1;
  distancefromWire = v2;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(B) Magnetic Field Strength Around Wire (Tesla)';
  variable2.textContent = '(L) Distance from Wire (m)';
  magneticFieldStrengthAroundWire = v1;
  distancefromWire = v2;
  result.textContent = '';
});

distancefromWireRadio.addEventListener('click', function() {
  variable1.textContent = '(B) Magnetic Field Strength Around Wire (Tesla)';
  variable2.textContent = '(i) Current (amp)';
  magneticFieldStrengthAroundWire = v1;
  current = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(magneticFieldStrengthAroundWireRadio.checked)
    result.textContent = `Magnetic Field Strength Around Wire = ${computeMagneticFieldStrengthAroundWire()} Tesla`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amp`;

  else if(distancefromWireRadio.checked)
    result.textContent = `Distance from Wire = ${computeDistancefromWire().toFixed(2)} m`;
})

// calculation

function computeMagneticFieldStrengthAroundWire() {
  return (k * Number(current.value)) / Number(distancefromWire.value);
}

function computeCurrent() {
  return (Number(magneticFieldStrengthAroundWire.value) * Number(distancefromWire.value)) / k;
}

function computeDistancefromWire() {
  return (k * Number(current.value)) / Number(magneticFieldStrengthAroundWire.value);
}