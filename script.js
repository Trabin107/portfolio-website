function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}


// visitor counter for the number of people accessing the website
async function fetchVisitorCount(){
    const response = await fetch("https://xy6l0ohu70.execute-api.us-east-1.amazonaws.com/cloud");
    const data = await response.json();
    document.getElementById("views").innerHTML = data.count;
}
fetchVisitorCount();