const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', function() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const activityLevel = document.getElementById('activity-level').value;
  const goal = document.getElementById('goal').value;
  
  let bmr;
  
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age);
  }
  
  let tdee;
  
  switch (activityLevel) {
    case '1.2':
      tdee = bmr * 1.2;
      break;
    case '1.375':
      tdee = bmr * 1.375;
      break;
    case '1.55':
      tdee = bmr * 1.55;
      break;
    case '1.725':
      tdee = bmr * 1.725;
      break;
    case '1.9':
      tdee = bmr * 1.9;
      break;
    default:
      tdee = bmr;
      break;
  }
  
  let calories;
  
  switch (goal) {
    case 'lose':
      calories = tdee - 500;
      break;
    case 'gain':
      calories = tdee + 500;
      break;
    default:
      calories = tdee;
      break;
  }
  
  resultDiv.innerHTML = `<p style="font-size:17px">Votre métabolisme de base est de <b> ${bmr.toFixed(0)}</b> calories par jour. Votre besoin en calories pour maintenir votre poids actuel est de <b> ${tdee.toFixed(0)}</b> calories par jour. Pour atteindre votre objectif, vous devriez consommer environ <b>${calories.toFixed(0)}</b> calories par jour.</p>`;
});

const inputNumber = document.getElementById('input-number');
const resultat = document.getElementById('resultat');

inputNumber.addEventListener('input', (event) => {
  const valeurInput = event.target.value;
  resultat.innerHTML = `La valeur saisie est : ${valeurInput}`;
});

