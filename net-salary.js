// //Yearly Tax rates 

const prompt=require("prompt-sync")({sigint:true}); 
const basicSalary = parseFloat(prompt("Enter the employee's basic salary:"));
const benefits = parseFloat(prompt("Enter the employee's benefits:"));

// KRA tax rates for 2023
const incomeTaxBands = [
  { lowerLimit: 0, upperLimit: 24999, taxRate: 0 },
  { lowerLimit: 25000, upperLimit: 39999, taxRate: 10 },
  { lowerLimit: 40000, upperLimit: 59999, taxRate: 15 },
  { lowerLimit: 60000, upperLimit: 79999, taxRate: 20 },
  { lowerLimit: 80000, upperLimit: 99999, taxRate: 25 },
  { lowerLimit: 100000, upperLimit: Infinity, taxRate: 30 }
];

// NHIF rates for 2023
const nhifRates = [
  { lowerLimit: 0, upperLimit: 5999, monthlyRate: 150 },
  { lowerLimit: 6000, upperLimit: 7999, monthlyRate: 300 },
  { lowerLimit: 8000, upperLimit: 11999, monthlyRate: 400 },
  { lowerLimit: 12000, upperLimit: 14999, monthlyRate: 500 },
  { lowerLimit: 15000, upperLimit: 19999, monthlyRate: 600 },
  { lowerLimit: 20000, upperLimit: 24999, monthlyRate: 750 },
  { lowerLimit: 25000, upperLimit: 29999, monthlyRate: 850 },
  { lowerLimit: 30000, upperLimit: 34999, monthlyRate: 900 },
  { lowerLimit: 35000, upperLimit: 39999, monthlyRate: 950 },
  { lowerLimit: 40000, upperLimit: 44999, monthlyRate: 1000 },
  { lowerLimit: 45000, upperLimit: 49999, monthlyRate: 1100 },
  { lowerLimit: 50000, upperLimit: 59999, monthlyRate: 1200 },
  { lowerLimit: 60000, upperLimit: 69999, monthlyRate: 1300 },
  { lowerLimit: 70000, upperLimit: 79999, monthlyRate: 1400 },
  { lowerLimit: 80000, upperLimit: 89999, monthlyRate: 1500 },
  { lowerLimit: 90000, upperLimit: 99999, monthlyRate: 1600 },
  { lowerLimit: 100000, upperLimit: 109999, monthlyRate: 1700 },
  { lowerLimit: 110000, upperLimit: 119999, monthlyRate: 1800 },
  { lowerLimit: 120000, upperLimit: 129999, monthlyRate: 1900 },
  { lowerLimit: 130000, upperLimit: Infinity, monthlyRate: 2000 }
];

// NSSF rates for 2023
const nssfRates = {
  employee: 6,
  employer: 6,
  voluntary: 6
};
// Calculate gross pay
const grossPay = basicSalary + benefits;

// Calculate Payee Tax
let payeeTax = 0;
for (const band of incomeTaxBands) {
  const taxableAmount = Math.min(band.upperLimit - band.lowerLimit, grossPay - band.lowerLimit);
  if (taxableAmount <= 0) {
    break;
  }
  payeeTax += (taxableAmount * band.taxRate) / 100;
}

// Calculate NHIF deduction
let nhifDeduction = 0;
for (const rate of nhifRates) {
  if (grossPay >= rate.lowerLimit && grossPay <= rate.upperLimit) {
    nhifDeduction = rate.monthlyRate;
    break;
  }
}

// Calculate NSSF deduction
const nssfDeduction = (nssfRates.employee / 100) * basicSalary;

// Calculate net salary
const deductions = payeeTax + nhifDeduction + nssfDeduction;
const netSalary = grossPay - deductions;

// Output results
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Pay: ${grossPay}`);
console.log(`Payee Tax: ${payeeTax}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Deductions: ${deductions}`);
console.log(`Net Salary: ${netSalary}`);

