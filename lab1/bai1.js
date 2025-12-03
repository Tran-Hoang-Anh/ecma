function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  let classification = "";
  if (bmi < 18.5) {
    classification = "Thiếu cân";
  } else if (bmi < 25) {
    classification = "Bình thường";
  } else if (bmi < 30) {
    classification = "Thừa cân";
  } else {
    classification = "Béo phì";
  }

  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${classification}`;
}

console.log(calculateBMI(70, 1.75)); 

