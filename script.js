// Get the input elements
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");

// Get the output elements
const priceElement = document.getElementById("price");
const discountElement = document.getElementById("discount");

// Button click event listener
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {

    // Get the input values
    const km = parseInt(kmInput.value);
    const age = parseInt(ageInput.value);

    // Calculate the price of the ticket
    let ticketPrice = km * 0.233;

    // Calculate the discount based on the age
    let discountAmount = 0;

    if(age < 0 || age > 120 || isNaN(age) || isNaN(km) || km < 0)
    {
        alert("Please enter valid parameters!");
        return;
    }
    
    if (age < 18) 
    {
        discountAmount = 19.4;
        ticketPrice -= ticketPrice * (discountAmount / 100);
        alert("Because you are under 18 years old, you get a 19.4% discount on your ticket price!");
    } 
    else if (age > 65) 
    {
        discountAmount = 37.7;
        ticketPrice -= ticketPrice * (discountAmount / 100);
        alert("Because you are over 65 years old, you get a 37.7% discount on your ticket price!");
    } 
    else 
    {
        alert("Because you are between 18 and 65 years old, you don't get any discount on your ticket price.");
    }

    // Printing the final ticket price as well as the discount element to the console
    console.log("The final ticket price is: " + ticketPrice.toFixed(2) + " €");
    console.log("The discount amount is: " + discountAmount + " %");

    // Display the calculated values
    priceElement.textContent = ticketPrice.toFixed(2) + " €";
    discountElement.textContent = discountAmount + " %";

    // If priceElement or discountElement are not valid, display an error message 
    if (priceElement.textContent === "NaN €" || discountElement.textContent === "NaN %")
    {
        alert("Please enter a valid number!");
        priceElement.textContent = "Not Valid";
        discountElement.textContent = "Not Valid";
    }

    
    // Clear the input fields
    kmInput.value = "";
    ageInput.value = "";
    });
