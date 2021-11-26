/*
    #JS COURSEWORK ASSIGNMENT
    ==========================
    Write a Javascript program which accepts the lower and Upper Limit as a range , then the program displays all numbers between the range and also :
    a) Mark each number whether its ODD or EVEN
    b) Show the number of ODD numbers in the range
    c) Show the number of EVEN numbers in the range
    d) Calculate and display the SUM and AVERAGE of the ODD numbers in the range
    e) Calculate and display the SUM and AVERAGE of the EVEN numbers in the range

*/


/* 
    a) Mark each number whether its ODD or EVEN

*/

function range(start, end) {
    // Looping thrpugh the numbers
    while (start <= end) {

        if (start % 2 == 0) {
            console.log(`${start} is EVEN`);
        } else {
            console.log(`${start} is ODD`);
        }
        start++;
    }
}
// Calling the function to mark the numbers as ODD or EVEN
range(1, 10);



/* 
    b) Show the number of ODD numbers in the range
    c) Show the number of EVEN numbers in the range 

*/

function numberOf(start, end) {
    // Arrays storing the odd and even numbers
    var evenNumbers = [];
    var oddNumbers = [];
    
    // While loop to iterate through the numbers and store them in their arrays respectively
    while (start <= end) {
        start++;
        if (start % 2 == 0) {
            evenNumbers.push(start);
        } else {
            oddNumbers.push(start);
        }
    }
    // loggin the number of EVEN adn ODD numbers in the range
    console.log("\n");

    console.log( " The number of ODD numbers : " + oddNumbers.length);
    console.log(" The number of EVEN numbers : " + evenNumbers.length);
    
    console.log("\n");
}

numberOf(1, 10);



/* 
    d) Calculate and display the SUM and AVERAGE of the ODD numbers in the range 
    e) Calculate and display the SUM and AVERAGE of the EVEN numbers in the range
*/

function sumAndAverageOf(start, end) {
    // Arrays storing the odd and even numbers
    var evenNumbers = [];
    var oddNumbers = [];
    // Variables to store the SUM of the ODD and EVEN numbers
    let oddSummation = 0;
    let evenSummation = 0;

    // Variable to store the AVERAGE of the ODD and EVEN numbers
    let oddAverage = 0;
    let evenAverage = 0;
    
    while (start <= end) {
        start++;
        if (start % 2 == 0) {
            evenNumbers.push(start);
        } else {
            oddNumbers.push(start);
        }
    }

    // Iterating through the ODD Nmbers and adding them to find the SUM
    for (let i = 0; i < oddNumbers.length; i++) {
        oddSummation += oddNumbers[i];
    }

    // The SUM of the ODD numbers
    console.log( " The Sum of Odd Numbers =  " + oddSummation );
    // The AVERAGE of the ODD numbers
    oddAverage = oddSummation / oddNumbers.length;
    console.log( " The Average of Odd Numbers =  " + oddAverage );

    console.log("\n");

    
    // Looping through the EVEN Nmbers and adding them to find the SUM
    for (let i = 0; i < evenNumbers.length; i++) {
        evenSummation += evenNumbers[i];
    }
    // The SUM of the EVEN numbers
    console.log( " The Sum of Even Numbers =  " + evenSummation );
    // The AVERAGE of the EVEN numbers
    evenAverage = evenSummation / evenNumbers.length;
    console.log( " The Average of Even Numbers =  " + evenAverage );

}

sumAndAverageOf(1, 10);