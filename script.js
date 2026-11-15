// Q1: Shopping Bill Calculator
var shirtPrice = 1500;
var trouserPrice = 2500;

var totalBill = shirtPrice + trouserPrice;
var discount = 0;

if (totalBill >= 3000) {
    discount = totalBill * 0.10; // 10% discount
}

var finalPayable = totalBill - discount;

console.log("Original Bill: " + totalBill);
console.log("Discount Amount: " + discount);
console.log("Final Payable Amount: " + finalPayable);

// Q2: Student Result Checker
var csMarks = 80;
var mathMarks = 75;
var engMarks = 85;

var total = csMarks + mathMarks + engMarks;
var percentage = (total / 300) * 100;

console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");

if (percentage >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Q3: Electricity Bill Calculator
var units = 150;
var bill = 0;

if (units <= 100) {
    bill = units * 10;
} else {
    var extraUnits = units - 100;
    bill = (100 * 10) + (extraUnits * 15);
}

console.log("Units Consumed: " + units);
console.log("Total Electricity Bill: " + bill);

// Q4: ATM Withdrawal System
var balance = 20000;
var withdraw = 5000;

if (withdraw > 0 && withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal successful!");
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Error: Invalid amount or low balance.");
}

// Q5: Multiplication Table Generator
var num = 5;

console.log("Table of " + num);

for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// Q6: Movie Ticket Booking System
var age = 25; // Customer ki age
var isStudent = true; // True agar student hai, warna false
var ticketPrice = 0;

if (age < 12) {
    ticketPrice = 300;
} else if (age >= 12 && age <= 59) {
    ticketPrice = 600;
} else {
    ticketPrice = 400;
}

var discountAmount = 0;
// Student discount of 10% available only on Rs. 600 ticket
if (isStudent && ticketPrice === 600) {
    discountAmount = ticketPrice * 0.10;
    ticketPrice = ticketPrice - discountAmount;
}

console.log("Discount Amount: " + discountAmount);
console.log("Final Ticket Cost: " + ticketPrice);

// Q7: Employee Salary and Bonus Calculator
var basicSalary = 50000;
var rating = 5; // Performance rating (1 to 5)
var serviceYears = 6; // Years of service
var bonusPercentage = 0;

if (rating === 5 && serviceYears >= 5) {
    bonusPercentage = 0.20; // 20%
} else if (rating === 4 && serviceYears >= 3) {
    bonusPercentage = 0.15; // 15%
} else if (rating === 3 && serviceYears >= 2) {
    bonusPercentage = 0.10; // 10%
} else {
    bonusPercentage = 0; // No bonus
}

var bonusAmount = basicSalary * bonusPercentage;
var finalSalary = basicSalary + bonusAmount;

console.log("Basic Salary: " + basicSalary);
console.log("Bonus Amount: " + bonusAmount);
console.log("Final Salary: " + finalSalary);

// Q8: Online Food Delivery System
var orderAmount = 2500;
var distanceKm = 4; // Distance in kilometers
var deliveryCharges = 0;

if (orderAmount >= 2000) {
    if (distanceKm <= 5) {
        deliveryCharges = 0; // Free delivery
    } else {
        deliveryCharges = (distanceKm - 5) * 20;
    }
} else {
    if (distanceKm <= 5) {
        deliveryCharges = 100;
    } else {
        deliveryCharges = 100 + ((distanceKm - 5) * 20);
    }
}

var totalBill = orderAmount + deliveryCharges;

console.log("Food Order Amount: " + orderAmount);
console.log("Delivery Charges: " + deliveryCharges);
console.log("Total Bill: " + totalBill);

// Q9: ATM Daily Transaction Limit
var dailyLimit = 50000;
var totalWithdrawn = 0;

// Farz karein yeh withdrawals ki list ya loop hai
var withdrawals = [10000, 20000, 15000]; 

for (var i = 0; i < withdrawals.length; i++) {
    var amount = withdrawals[i];
    
    if (amount <= 0) {
        console.log("Rejected: Negative or zero amount.");
        continue;
    }
    
    if ((totalWithdrawn + amount) > dailyLimit) {
        console.log("Rejected: Exceeds daily limit.");
        break;
    }
    
    totalWithdrawn += amount;
}

var remainingLimit = dailyLimit - totalWithdrawn;

console.log("Total Amount Withdrawn: " + totalWithdrawn);
console.log("Remaining Daily Limit: " + remainingLimit);

// Q10: Smart Parking Fee Calculator
// Farz karein parked hours ki array hai kuch vehicles ke liye
var parkingHoursList = [2, 4, 6]; 
var totalRevenue = 0;

for (var i = 0; i < parkingHoursList.length; i++) {
    var hours = parkingHoursList[i];
    var fee = 0;
    
    if (hours <= 2) {
        fee = hours * 50;
    } else if (hours <= 5) { // Pehle 2 hours @ 50, aglay 3 hours @ 30
        fee = (2 * 50) + ((hours - 2) * 30);
    } else { // 5 hours se upar hone par 20/hr extra
        fee = (2 * 50) + (3 * 30) + ((hours - 5) * 20);
    }
    
    totalRevenue += fee;
    console.log("Vehicle " + (i + 1) + " Parking Fee: Rs. " + fee);
}

console.log("Total Parking Revenue Collected: Rs. " + totalRevenue);

// Q11: University Scholarship Eligibility System
var annualFee = 100000;
var percentage = 92;
var monthlyIncome = 45000;
var scholarshipPercentage = 0;

if (percentage >= 90 && monthlyIncome < 50000) {
    scholarshipPercentage = 1.00; // 100% scholarship
} else if (percentage >= 80 && monthlyIncome < 70000) {
    scholarshipPercentage = 0.50; // 50% scholarship
} else if (percentage >= 70 && monthlyIncome < 40000) {
    scholarshipPercentage = 0.25; // 25% scholarship
} else {
    scholarshipPercentage = 0; // No scholarship
}

var scholarshipAmount = annualFee * scholarshipPercentage;
var remainingPayable = annualFee - scholarshipAmount;

console.log("Scholarship Percentage: " + (scholarshipPercentage * 100) + "%");
console.log("Scholarship Amount: Rs. " + scholarshipAmount);
console.log("Remaining Payable Fee: Rs. " + remainingPayable);

// Q12: Supermarket Inventory and Sales Management
var stock = 100;
var unitCost = 500;
var customerRequests = [10, 20, 5, 70]; // Example requests
var totalSold = 0;
var totalRevenue = 0;

for (var i = 0; i < customerRequests.length; i++) {
    var req = customerRequests[i];
    
    if (req <= 0) {
        console.log("Request rejected: Invalid quantity.");
        continue;
    }
    
    if (req > stock) {
        console.log("Request rejected: Not enough stock available.");
        continue;
    }
    
    // Accept valid request
    stock -= req;
    totalSold += req;
    totalRevenue += (req * unitCost);
    
    if (stock === 0) {
        console.log("Stock is now zero!");
        break;
    }
}

console.log("Total Units Sold: " + totalSold);
console.log("Remaining Stock: " + stock);
console.log("Total Revenue: Rs. " + totalRevenue);

// Q13: Hospital Patient Billing System
// Patient details: days admitted and room type ("general", "semi-private", "private")
var admittedDays = 3;
var roomType = "semi-private"; 
var roomRatePerDay = 0;

if (roomType === "general") {
    roomRatePerDay = 2000;
} else if (roomType === "semi-private") {
    roomRatePerDay = 3500;
} else if (roomType === "private") {
    roomRatePerDay = 5000;
}

var roomCharges = admittedDays * roomRatePerDay;
var medicalTests = 1500;
var medicines = 2000;
var emergencyService = 3000;

var totalPatientBill = roomCharges + medicalTests + medicines + emergencyService;

console.log("Room Charges: Rs. " + roomCharges);
console.log("Total Patient Bill: Rs. " + totalPatientBill);

// Q14: Monthly Mobile Data Usage and Package Management
var totalPackageGB = 10;
var consumedGB = 0;
// Farz karein daily usage ka data hai
var dailyUsageList = [1, 2, 1.5, 3, 2.5]; 

for (var i = 0; i < dailyUsageList.length; i++) {
    var usage = dailyUsageList[i];
    
    if (usage < 0 || (consumedGB + usage) > totalPackageGB) {
        console.log("Invalid usage or exceeds package limit.");
        continue;
    }
    
    consumedGB += usage;
}

var remainingData = totalPackageGB - consumedGB;
var category = "";

if (consumedGB < 5) {
    category = "Low Usage";
} else if (consumedGB >= 5 && consumedGB <= 8) {
    category = "Moderate Usage";
} else if (consumedGB > 8 && consumedGB < 10) {
    category = "High Usage";
} else if (consumedGB === 10) {
    category = "Package Exhausted";
}

console.log("Total Data Consumed: " + consumedGB + " GB");
console.log("Remaining Data: " + remainingData + " GB");
console.log("Usage Category: " + category);

// Q15: University Examination Performance Analysis
var studentMarks = [88, 75, 62, 45, 90, 81, 55, 48, 70, 83];
var totalStudents = studentMarks.length;
var totalClassMarks = 0;
var highest = studentMarks[0];
var lowest = studentMarks[0];
var passCount = 0;
var excellentCount = 0, veryGoodCount = 0, goodCount = 0, failCount = 0;

for (var i = 0; i < totalStudents; i++) {
    var marks = studentMarks[i];
    totalClassMarks += marks;
    
    // Highest & Lowest
    if (marks > highest) highest = marks;
    if (marks < lowest) lowest = marks;
    
    // Categories
    if (marks >= 85) {
        excellentCount++;
        passCount++;
    } else if (marks >= 70 && marks <= 84) {
        veryGoodCount++;
        passCount++;
    } else if (marks >= 50 && marks <= 69) {
        goodCount++;
        passCount++;
    } else {
        failCount++;
    }
}

var classAverage = totalClassMarks / totalStudents;
var passPercentage = (passCount / totalStudents) * 100;

console.log("Total Marks Obtained by All: " + totalClassMarks);
console.log("Class Average: " + classAverage);
console.log("Highest Marks: " + highest);
console.log("Lowest Marks: " + lowest);
console.log("Percentage of Students Passed: " + passPercentage + "%");
console.log("Excellent Students: " + excellentCount);
console.log("Very Good Students: " + veryGoodCount);
console.log("Good Students: " + goodCount);
console.log("Failed Students: " + failCount);