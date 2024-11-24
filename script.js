function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

// visitor counter for the number of people accessing the website
// Replace with your actual API Gateway URL

const counter = document.querySelector(".visitor-counter"); //
// Function to fetch visitor count
async function updateCounter() {
    try {
        let response = await fetch("https://xy6l0ohu70.execute-api.us-east-1.amazonaws.com/cloud");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let rawData = await response.json(); // First, parse the API response
        let data = JSON.parse(rawData.body); // Parse the stringified JSON in the body
        console.log(data); // Debug: Check if `data.views` is correct
        if (counter) {
            counter.innerHTML = `Views: ${data.views}`; // Access the views property
        } else {
            console.error("Element with class 'visitor-counter' not found.");
        }
    } catch (error) {
        console.error("Error fetching the visitor count:", error);
        if (counter) {
            counter.innerHTML = "Error loading views"; // Fallback message
        }
    }
}

updateCounter();
