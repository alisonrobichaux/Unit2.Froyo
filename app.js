// app.js
function submitOrder() {
    // Get the input value
    const flavorsInput = document.getElementById('flavors').value;
  
    // Process the entered flavors
    const flavorsArray = flavorsInput.split(',');
    const flavorCounts = {};
  
    flavorsArray.forEach((flavor) => {
      const trimmedFlavor = flavor.trim(); // Remove leading/trailing spaces
      flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
    });
  
    // Display the result in the console
    console.table(flavorCounts);
  }