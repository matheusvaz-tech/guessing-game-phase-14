// Trabalhando com objetos e funções

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 110,
    height: 1.83,
  },

  {
    name: "Alexandra",
    age: 28,
    weight: 72,
    height: 1.77,
  },

  {
    name: "Josivaldo",
    age: 35,
    weight: 94,
    height: 1.91,
  },
];

function imc(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

// for... of

let text = "";

for (let patient of patients) {
  text += `O paciente ${patient.name} possui o IMC de: ${imc(
    patient.weight,
    patient.height
  )}.\n`;
}

alert(`As informações dos pacientes são as seguintes:\n
${text}`);
