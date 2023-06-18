//Yearly Tax rates 

//  function calculateTaxRate(Annual Taxable Pay) {

//     let Annual Taxable Pay = 120000;

 

//     if (Annual Taxable Pay <= 288,000) {

//       rate = 10;

//     } else if (Annual Taxable Pay >= 288,001 && Annual Taxable Pay <= 388,000) {

//       rate = 25;

//     } else if (Annual Taxable Pay > 388,000) {

//       rate = 30;

//     }

 

//     return rate;

// console.log(rate(Annual Taxable Pay))




// calculate total monthly tax rate
function calculateTaxRate(monthlyTaxablePay) {
    let rate = ();
    if (monthlyTaxablePay <= 24000) {
      rate = 10;
    } 
    else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {
      rate = 25;
    } else if (monthlyTaxablePay > 32333) {
      rate = 30;
    }
    else{
    return rate;
    }
  }



  //Finding the total relief range for market interest rate 
function calculateReliefsAndAllowances(relief)
Personal Relief <= 28,800	
Insurance Relief <= 60,000
Allowable Pension Fund Contribution <= 240,000
Affordable Housing Relief <= 108,000
Allowable Owner Occupier Interest <= 300,000
Disability Exemption <= 1,800,000

market interest rate = (rate*0.31)


//calculating NHIF deductions from grosspay


function calculateDeduction(grossPay) {
    let deduction = 0;
    if (grossPay > 5999 && grossPay <= 7999) {
      deduction = 300;
    } 
    else if (grossPay >= 8000 && grossPay <= 11999) {
      deduction = 400;
    } 
    else if (grossPay >= 12000 && grossPay <= 14999) {
      deduction = 500;
    } 
    else if (grossPay >= 15000 && grossPay <= 19999) {
      deduction = 600;
    } 
    else if (grossPay >= 20000 && grossPay <= 24999) {
      deduction = 750;
    } 
    else if (grossPay >= 25000 && grossPay <= 29999) {
      deduction = 850;
    } 
    else if (grossPay >= 30000 && grossPay <= 34999) {
      deduction = 900;
    } 
    else if (grossPay >= 35000 && grossPay <= 39999) {
      deduction = 950;
    } 
    else if (grossPay >= 40000 && grossPay <= 44999) {
      deduction = 1000;
    } 
    else if (grossPay >= 45000 && grossPay <= 49999) {
      deduction = 1100;
    } 
    else if (grossPay >= 50000 && grossPay <= 59999) {
      deduction = 1200;
    } 
    else if (grossPay >= 60000 && grossPay <= 69999) {
      deduction = 1300;
    } 
    else if (grossPay >= 70000 && grossPay <= 79999) {
      deduction = 1400;
    } 
    else if (grossPay >= 80000 && grossPay <= 89999) {
      deduction = 1500;
    } 
    else if (grossPay >= 90000 && grossPay <= 99999) {
      deduction = 1600;
    } 
    else if (grossPay >= 100000) {
      deduction = 1700;
    }
    return deduction;
  }

 

//   //NSSF

  function calculatePensionablePayTier(pay) {
    if (pay >= 6000){
   return pay * 0.06
    }else if(pay >= 6,001 && pay <= 18,000){
        return pay * 0.06
    }

  }

 

  //Calculating net salary using the above values and categories

    function calculateNetSalary(salary, benefits){
    let monthlyTaxablePay = salary
    let deductTax = calculateTaxRate(monthlyTaxablePay)
    let grossPay = salary - ((deductTax / 100) * salary)
    let deductNhif = calculateDeduction(grossPay)
    let pay = salary - ((deductTax / 100) * salary) - deductNhif
    let deductNssf = calculatePensionablePayTier(pay)
    let netSalaryCalculation = () =>{var netSalaryValue = (pay - deductNhif) ; return netSalaryValue}
    let netSalary = netSalaryCalculation()
    console.log(netSalary)
    return netSalary
    }

 

 let salary = parseInt("7000")//input gross salsary
 let benefits = parseInt("800")// input benefits
 calculateNetSalary(salary, benefits)

 